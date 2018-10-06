$(document).ready(function() {
  const link = $(".nav-menu__list__link");

  link.each(function(index, element) {
    $(element).click(function(e) {
      let href = $(element).attr("href");

      e.preventDefault();
      $("html, body").animate(
        {
          scrollTop: $(href).offset().top
        },
        1000
      );

      $(link).removeClass("active");
      $(link)
        .eq(index)
        .addClass("active");

      if ($(".nav-menu__btn").hasClass("active")) {
        $(".nav-menu__btn").toggleClass("active");
        $(".aside").toggleClass("active");
        $(".page-section").toggleClass("active");
      }
    });
  });

  /* Scroll listener */
  $(document).on("scroll", function(e) {
    $("section").each(function(index) {
      if (
        $(this).offset().top < window.pageYOffset + 10 &&
        $(this).offset().top + $(this).height() > window.pageYOffset + 10
      ) {
        var data = $(this).attr("id");
        $(link).removeClass("active");
        $(link)
          .eq(index)
          .addClass("active");
      }
    });
  });

  /* Map width */
  $(".contacts-map")
    .find("iframe")
    .width($(".contacts-map").width());
  $(".contacts-map")
    .find("iframe")
    .height($(".contacts-map").width());

  /* get instagram images */
  var token = "286197751.e724ce5.4b1c69c9756b4919aa1f48fd3b073604",
    userid = "286197751",
    instgr = $(".portfolio-list"),
    num_photos = instgr.length;

  if ($(window).width() < 1075) {
    for (let index = 5; index < num_photos; index++) {
      const element = instgr[index];
      $(element).hide();
    }
    num_photos = $(".portfolio-list:visible").length;
  }

  $.ajax({
    url: "https://api.instagram.com/v1/users/" + userid + "/media/recent",
    dataType: "jsonp",
    type: "GET",
    data: { access_token: token, count: num_photos },
    success: function(data) {
      for (let x = 0; x < num_photos; x++) {
        const element = data.data[x];

        $(instgr[x]).attr("href", element.link);
        $(instgr[x])
          .find("img")
          .attr("src", element.images.low_resolution.url);
      }
    }
  });

  /* Mobile menu */
  $(".nav-menu__btn").click(function(e) {
    e.preventDefault();
    $(".nav-menu__btn").toggleClass("active");
    $(".aside").toggleClass("active");
    $(".page-section").toggleClass("active");
  });

  /* photo grid */
  let photo = $(".portfolio-list"),
    photoCenter = $(photo).eq(4);
});
