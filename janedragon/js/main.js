$(document).ready(function() {
  let link = $(".nav-menu__list__link");

  $.scrollify({
    section: ".page-section",
    sectionName: "section-name",
    easing: "easeOutExpo",
    scrollSpeed: 600,
    offset: 0,
    scrollbars: true,
    setHeights: true,
    overflowScroll: true,
    after: function(section) {
      $(link).removeClass("active");
      $(link)
        .eq(section)
        .addClass("active");
    },
    touchScroll: true
  });

  link.each(function(index, element) {
    $(element).click(function(e) {
      let href = $(element).attr("href");
      e.preventDefault();
      $.scrollify.move(href);
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
});
