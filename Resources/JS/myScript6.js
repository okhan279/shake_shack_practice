//This code creates a slideshow animation for the Hero images. The code was found at
//https://snook.ca/archives/javascript/simplest-jquery-slideshow
//This code is valid through any pixel width.

$(function () {
  $("#slider div:gt(0)").hide();
  setInterval(function () {
    $("#slider :first-child")
      .fadeOut()
      .next("div")
      .fadeIn()
      .end()
      .appendTo("#slider");
  }, 5000);
});
