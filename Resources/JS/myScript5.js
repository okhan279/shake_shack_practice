//This code makes the arrows on the Hero image transition to a green colour when hovered over.
// Starts at 1120px.

$(document).ready(function () {
  $("#arrow-left-div").hover(
    function () {
      $(this).css("border-color", "#66b245"); //Note: I tried using the 'toggleClass' function but for some reason it was not working.
      $("#arrow-left").css("background-color", "#66b245");
    },
    function () {
      $(this).css("border-color", "#fff");
      $("#arrow-left").css("background-color", "#fff");
    }
  );

  $("#arrow-right-div").hover(
    function () {
      $(this).css("border-color", "#66b245");
      $("#arrow-right").css("background-color", "#66b245");
    },
    function () {
      $(this).css("border-color", "#fff");
      $("#arrow-right").css("background-color", "#fff");
    }
  );
});
