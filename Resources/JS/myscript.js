///////
///////

$(document).ready(function () {
  $(".ham-border").click(function () {
    /* Toggles the 'transtion' class for the three hamburger lines */
    $(".hamburger span:nth-child(1)").toggleClass("transition");
    $(".hamburger span:nth-child(2)").toggleClass("transition");
    $(".hamburger span:nth-child(3)").toggleClass("transition");
    $(".cross span:nth-child(1)").toggleClass("transition");
    $(".cross span:nth-child(2)").toggleClass("transition");

    /* Toggles 'hide-class' for the 'header-nav' container */
    $(".header-nav").toggleClass("hide-class");
  });
});

$(window).scroll(function () {
  if ($(this).scrollTop() > 84) {
    $(".container-1").addClass("sticky");
    $("#header_placeholder").css({ display: "block" });
  } else {
    $(".container-1").removeClass("sticky");
    $("#header_placeholder").css({ display: "none" });
  }
});

$(window).scroll(function () {
  if ($(this).scrollTop() > 84) {
    $(".header-nav").addClass("sticky-menu");
    $("#header_placeholder").css({ display: "block" });
  } else {
    $(".header-nav").removeClass("sticky-menu");
    $("#header_placeholder").css({ display: "none" });
  }
});

// const window_width = window.innerWidth;
// const window_height = window.innerHeight;

// console.log(`width: ` + window_width);
// console.log(`height: ` + window_height);
