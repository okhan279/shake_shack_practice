//This code is for the animation of the hamburger icon.
//Valid until 800px.

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
