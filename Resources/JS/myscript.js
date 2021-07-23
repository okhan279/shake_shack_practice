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

  /* Adds the sticky class to the 'container-1' element */
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
  // });

  /* Makes the white circle visible depending on the section of the page the user is on */

  //dot 1
  $(".js--header-pic").waypoint(function () {
    $(".dot-container div:nth-child(1)").css({ border: "2px solid white" });
    $(".dot-container div:nth-child(3)").css({ opacity: "0" });
    $(".dot-container p:nth-child(2)").css({ color: "#66b245" }); //adds green colour to dot 1
    $(".dot-container p:nth-child(4)").removeClass("green");
  });

  //dot 2
  $(".section--story").waypoint(
    function () {
      $(".dot-container div:nth-child(1)").css({ border: "none" }); //circle 1
      $(".dot-container div:nth-child(3)").css({ opacity: "1" }); // circle 2
      $(".dot-container div:nth-child(5)").css({ opacity: "0" }); //circle 3
      $(".dot-container p:nth-child(4)").addClass("green"); //adds '.green' to dot 2
      $(".dot-container p:nth-child(2)").css({ color: "#fff" }); //removes '.green' from dot 3
      $(".dot-container p:nth-child(6)").removeClass("green"); //removes '.green' from dot 3
    },
    {
      offset: "80px;",
    }
  );

  //dot 3
  $(".section--kit").waypoint(
    function () {
      $(".dot-container div:nth-child(3)").css({ opacity: "0" }); //removes circle from dot 2
      $(".dot-container div:nth-child(5)").css({ opacity: "1" }); //add circle to dot 3
      $(".dot-container div:nth-child(7)").css({ opacity: "0" }); //removes circle from dot 4 (from scrolling upwards)
      $(".dot-container p:nth-child(6)").addClass("green"); //adds '.green' to dot 3
      $(".dot-container p:nth-child(4)").removeClass("green"); //removes '.green' from dot 2
    },
    {
      offset: "100px;",
    }
  );

  //dot 4
  $(".section--order").waypoint(
    function () {
      $(".dot-container div:nth-child(5)").css({ opacity: "0" });
      $(".dot-container div:nth-child(7)").css({ opacity: "1" });
      $(".dot-container div:nth-child(9)").css({ opacity: "0" });
      $(".dot-container p:nth-child(8)").addClass("green"); //adds '.green' to dot 4
      $(".dot-container p:nth-child(6)").removeClass("green"); //removes '.green' from dot 3
    },
    {
      offset: "100px;",
    }
  );

  //dot 5
  $(".section--ethics").waypoint(
    function () {
      $(".dot-container div:nth-child(7)").css({ opacity: "0" });
      $(".dot-container div:nth-child(9)").css({ opacity: "1" });
      $(".dot-container div:nth-child(11)").css({ opacity: "0" });
      $(".dot-container p:nth-child(10)").addClass("green"); //adds '.green' to dot 5
      $(".dot-container p:nth-child(8)").removeClass("green"); //removes '.green' from dot 4
    },
    {
      offset: "100px;",
    }
  );

  //dot 6
  $(".section--vacancies").waypoint(
    function () {
      $(".dot-container div:nth-child(9)").css({ opacity: "0" });
      $(".dot-container div:nth-child(11)").css({ opacity: "1" });
      $(".dot-container div:nth-child(13)").css({ opacity: "0" });
      $(".dot-container p:nth-child(12)").addClass("green"); //adds '.green' to dot 6
      $(".dot-container p:nth-child(10)").removeClass("green"); //removes '.green' from dot 5
    },
    {
      offset: "140px;",
    }
  );

  //dot 7
  $(".section--contact-us").waypoint(
    function () {
      $(".dot-container div:nth-child(11)").css({ opacity: "0" });
      $(".dot-container div:nth-child(13)").css({ opacity: "1" });
      $(".dot-container p:nth-child(14)").addClass("green"); //adds '.green' to dot 6
      $(".dot-container p:nth-child(12)").removeClass("green"); //removes '.green' from dot 5
    },
    {
      offset: "100px;",
    }
  );

  $(".section--mailing-list").waypoint(
    function () {
      $(".dot-container div:nth-child(13)").css({ opacity: "0" });
      $(".dot-container p:nth-child(14)").removeClass("green"); //adds '.green' to dot 6
    },
    {
      offset: "250px;",
    }
  );

  //--------------- SCROLLING UPWARDS --------------- //
  //The green cart in the 'section--story' section. Moves the circle to the 1st dot when scrolling upwards from the 'section--kit' section.
  $(".home-cart").waypoint(
    function () {
      $(".dot-container div:nth-child(3)").css({ opacity: "1" });
      $(".dot-container div:nth-child(5)").css({ opacity: "0" });
      $(".dot-container p:nth-child(4)").addClass("green");
      $(".dot-container p:nth-child(6)").removeClass("green"); //dot 3
    },
    {
      offset: "100px;",
    }
  );

  //'Order DIY Kit'. Moves the circle to the 3rd dot when scrolling upwards from the 'section--order' section.
  $(".section--kit a").waypoint(
    function () {
      $(".dot-container div:nth-child(5)").css({ opacity: "1" });
      $(".dot-container div:nth-child(7)").css({ opacity: "0" });
      $(".dot-container p:nth-child(6)").addClass("green"); //dot 3
      $(".dot-container p:nth-child(8)").removeClass("green"); //dot 4
    },
    {
      offset: "100px;",
    }
  );

  // 'Order on Dilveroo'. Moves the circle to the 4th dot when scrolling upwards from the 'section--ethics' section.
  $(".section--order a").waypoint(
    function () {
      $(".dot-container div:nth-child(7)").css({ opacity: "1" });
      $(".dot-container div:nth-child(9)").css({ opacity: "0" });
      $(".dot-container p:nth-child(8)").addClass("green"); //dot 4
      $(".dot-container p:nth-child(10)").removeClass("green"); //dot 5
    },
    {
      offset: "200px;",
    }
  );

  // 'Meet Our Charity Partners'. Moves the circle to the 5th dot when scrolling upwards from the 'section--ethics' section.
  $(".section--ethics a").waypoint(
    function () {
      $(".dot-container div:nth-child(9)").css({ opacity: "1" });
      $(".dot-container div:nth-child(11)").css({ opacity: "0" });
      $(".dot-container p:nth-child(10)").addClass("green"); //dot 5
      $(".dot-container p:nth-child(12)").removeClass("green"); //dot 6
    },
    {
      offset: "100px;",
    }
  );

  // 'Apply Here'. Moves the circle to the 6th dot when scrolling upwards from the 'section--contact-us' section.
  $(".section--vacancies a").waypoint(
    function () {
      $(".dot-container div:nth-child(11)").css({ opacity: "1" });
      $(".dot-container div:nth-child(13)").css({ opacity: "0" });
      $(".dot-container p:nth-child(12)").addClass("green"); //dot 6
      $(".dot-container p:nth-child(14)").removeClass("green"); //dot 7
    },
    {
      offset: "170px;",
    }
  );

  $(".section--contact-us a").waypoint(
    function () {
      $(".dot-container div:nth-child(13)").css({ opacity: "1" });
      $(".dot-container p:nth-child(14)").addClass("green"); //dot 7
    },
    {
      offset: "200px;",
    }
  );
  ///////////////////////////////////////////////////////////////////////////////////////
});

//Code to change Hero picture when clicking on the image. The code for this was found on https://www.youtube.com/watch?v=7ZO2RTMNSAY
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
///////////////////////////////////////////////////////////////////////////////////////

//Code to change colour of arrow on Hero images when hovered over.
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

  $("#arrow-right-div").click(function () {
    // $(".hero-img-2").css("opacity", "0");
  });

  $(function () {
    $("#slider div:gt(0)").hide();
    setInterval(function () {
      $("#slider :first-child")
        .fadeOut()
        .next("div")
        .fadeIn()
        .end()
        .appendTo("#slider");
    }, 3000);
  });
});

// $(function(){
//   $('.fadein img:gt(0)').hide();
//   setInterval(function(){
//     $('.fadein :first-child')
//     .fadeOut()
//     .next('img')
//     .fadeIn()
//     .end()
//     .appendTo('.fadein');},
//     3000);
// });
