$(document).ready(function() {
  /* Toolbar */
  let nav = $(".header-nav");

  $(".toggle-nav").on("click", function() {
    $(".header-nav-menu").slideToggle();
    nav.addClass("active");
  });

  $(window).scroll(function() {
    var block_btn = $(".b_fix");
    var offset = block_btn.offset();
    if (offset.top <= 30) {
      nav.removeClass("active");
    } else {
      nav.addClass("active");
    }
  });

  /* ScrollTo element  */
  $(".header-nav-menu__item").click(function(e) {
    e.preventDefault();
    $(".header-nav-menu").slideToggle();
    var _href = $(this)
      .find("a")
      .attr("href");
    $("html, body").animate(
      {
        scrollTop: $(_href).offset().top - 100
      },
      1000
    );
  });

  /* Hover */
  $(".hobby-img").each(function(index, element) {
    let img = $(this).find("img"),
      img_src = $(this)
        .find("img")
        .attr("src"),
      img_data_src = $(this)
        .find("img")
        .attr("data-src");
    $(element)
      .mousemove(function(e) {
        // console.log(img_src);

        img.attr("src", img_data_src);

        var pos = $(this).offset();
        var elem_left = pos.left;
        var elem_top = pos.top;
        var Xinner = e.pageX - elem_left;
        var Yinner = e.pageY - elem_top;

        $("span.hover:eq(" + index + ")")
          .css("display", "block")
          .css("left", Xinner + 15 + "px")
          .css("top", Yinner + 15 + "px");
      })
      .mouseleave(function() {
        img.attr("src", img_src);
        $("span.hover:eq(" + index + ")").css("display", "none");
      });
  });

  /* Load More Image */
  if ($(window).width() >= 992) {
    $(".portfolio-content-img")
      .slice(0, 6)
      .show();
  } else {
    $(".portfolio-content-img")
      .slice(0, 3)
      .show();
  }
  $(".portfolio-add").on("click", function(e) {
    e.preventDefault();
    $(".portfolio-content-img:hidden")
      .slice(0, 3)
      .slideDown();
    if ($(".portfolio-content-img:hidden").length <= 0) {
      $(".portfolio-add").hide();
    }
  });

  /* Send Form */
  $(".contact-form").submit(function(e) {
    e.preventDefault();
    var title = $(".contact-form-title");
    var $form = $(this);

    title.slideUp("slow");
    $.ajax({
      type: $form.attr("method"),
      url: $form.attr("action"),
      data: $form.serialize()
    })
      .done(function() {
        console.log("success");
        title.slideDown(function() {
          title.text("Спасибо за заявку! Отвечу в течении 15 мин!");
        });
      })
      .fail(function() {
        console.log("fail");
        title.slideDown(function() {
          title.html(
            "ОЙ! Что-то пошло не так... Свяжитесь со мной по телефону &#10144;"
          );
        });
      });
  });

  /* Map width */
  $(".contact-map__src")
    .find("iframe")
    .width($(".contact-map").outerWidth());
});
