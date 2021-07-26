//Code to change Hero picture when clicking on either arrow. The code for this was found on https://www.youtube.com/watch?v=7ZO2RTMNSAY
// Starts at 1120px.

$(document).ready(function () {
  let sliderImages = document.querySelectorAll(".slide"),
    arrowRight = document.querySelector("#arrow-right"),
    arrowLeft = document.querySelector("#arrow-left"),
    current = 0;

  //Clear all images
  function reset() {
    for (i = 0; i < sliderImages.length; i++) {
      sliderImages[i].style.display = "none";
    }
  }

  // //slider init
  function startSlide() {
    reset();
    sliderImages[0].style.display = "block";
  }

  // //show previous
  function slideLeft() {
    reset();
    sliderImages[current - 1].style.display = "block";
    current--;
  }

  //show next
  function slideRight() {
    reset();
    sliderImages[current + 1].style.display = "block";
    current++;
  }

  //Left arrow click
  arrowLeft.addEventListener("click", function () {
    if (current === 0) {
      current = sliderImages.length;
    }
    slideLeft();
  });

  //Right arrow click
  arrowRight.addEventListener("click", function () {
    if (current === sliderImages.length - 1) {
      current = -1;
    }
    slideRight();
  });

  startSlide();
});
