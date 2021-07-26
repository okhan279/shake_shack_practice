//This code is the Sticky Nav for the navigation menu at the very top.
//Valid for all pixel widths.

$(document).ready(function () {
  $(window).scroll(function () {
    if ($(this).scrollTop() > 84) {
      $(".container-1").addClass("sticky");
      $("#header_placeholder").css({ display: "block" });
    } else {
      $(".container-1").removeClass("sticky");
      $("#header_placeholder").css({ display: "none" });
    }
  });

  /* Adds the sticky class to the 'header-nav' element. */
  $(window).scroll(function () {
    if ($(this).scrollTop() > 84) {
      $(".header-nav").addClass("sticky-menu");
      $("#header_placeholder").css({ display: "block" });
    } else {
      $(".header-nav").removeClass("sticky-menu");
      $("#header_placeholder").css({ display: "none" });
    }
  });
});
