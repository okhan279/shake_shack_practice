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
    $(".dot-container div:nth-child(2)").removeClass("display-circle");
  });

  //dot 2
  $(".section--story").waypoint(
    function () {
      $(".dot-container div:nth-child(1)").css({ border: "none" });
      $(".dot-container div:nth-child(2)").addClass("display-circle");

      // document
      //   .querySelector(".dot-container div:nth-child(2)")
      //   .classList.add("display-circle");

      $(".dot-container div:nth-child(3)").removeClass("display-circle");
    },
    {
      offset: "80px;",
    }
  );

  //dot 3
  $(".section--kit").waypoint(
    function () {
      // $(".dot-container div:nth-child(3)").addClass("display-circle");
      document
        .querySelector(".dot-container div:nth-child(3)")
        .classList.add("display-circle");
      // $(".dot-container div:nth-child(3)").css({
      //   border: "2px solid rgba(255, 255, 255, 1)",
      // });
      $(".dot-container div:nth-child(2)").removeClass("display-circle");
      $(".dot-container div:nth-child(4)").removeClass("display-circle");
    },
    {
      offset: "100px;",
    }
  );

  //dot 4
  $(".section--order").waypoint(
    function () {
      // $(".dot-container div:nth-child(4)").addClass("display-circle");
      document
        .querySelector(".dot-container div:nth-child(4)")
        .classList.add("display-circle");
      $(".dot-container div:nth-child(3)").removeClass("display-circle");
      $(".dot-container div:nth-child(5)").removeClass("display-circle");
    },
    {
      offset: "100px;",
    }
  );

  //dot 5
  $(".section--ethics").waypoint(
    function () {
      $(".dot-container div:nth-child(5)").addClass("display-circle");
      $(".dot-container div:nth-child(4)").removeClass("display-circle");
      $(".dot-container div:nth-child(6)").removeClass("display-circle");
    },
    {
      offset: "100px;",
    }
  );

  //dot 6
  $(".section--vacancies").waypoint(
    function () {
      $(".dot-container div:nth-child(6)").addClass("display-circle");
      $(".dot-container div:nth-child(5)").removeClass("display-circle");
      $(".dot-container div:nth-child(7)").removeClass("display-circle");
    },
    {
      offset: "100px;",
    }
  );

  //dot 7
  $(".section--contact-us").waypoint(
    function () {
      $(".dot-container div:nth-child(6)").removeClass("display-circle");
      $(".dot-container div:nth-child(7)").addClass("display-circle");
    },
    {
      offset: "100px;",
    }
  );

  //--------------- SCROLLING UPWARDS --------------- //
  //The green cart in the 'section--story' section. Moves the circle to the 1st dot when scrolling upwards from the 'section--kit' section.
  $(".home-cart").waypoint(
    function () {
      $(".dot-container div:nth-child(2)").addClass("display-circle");
      $(".dot-container div:nth-child(3)").removeClass("display-circle");
    },
    {
      offset: "100px;",
    }
  );

  //'Order DIY Kit'. Moves the circle to the 3rd dot when scrolling upwards from the 'section--order' section.
  $(".section--kit a").waypoint(
    function () {
      $(".dot-container div:nth-child(3)").addClass("display-circle");
      $(".dot-container div:nth-child(4)").removeClass("display-circle");
    },
    {
      offset: "100px;",
    }
  );

  // 'Order on Dilveroo'. Moves the circle to the 4th dot when scrolling upwards from the 'section--ethics' section.
  $(".section--order a").waypoint(
    function () {
      $(".dot-container div:nth-child(4)").addClass("display-circle");
      $(".dot-container div:nth-child(5)").removeClass("display-circle");
    },
    {
      offset: "200px;",
    }
  );

  // 'Meet Our Charity Partners'. Moves the circle to the 5th dot when scrolling upwards from the 'section--ethics' section.
  $(".section--ethics a").waypoint(
    function () {
      $(".dot-container div:nth-child(5)").addClass("display-circle");
      $(".dot-container div:nth-child(6)").removeClass("display-circle");
    },
    {
      offset: "100px;",
    }
  );

  // 'Meet Our Charity Partners'. Moves the circle to the 5th dot when scrolling upwards from the 'section--ethics' section.
  $(".section--vacancies a").waypoint(
    function () {
      $(".dot-container div:nth-child(6)").addClass("display-circle");
      $(".dot-container div:nth-child(7)").removeClass("display-circle");
    },
    {
      offset: "100px;",
    }
  );
  ///////////////////////////////////////////////////////////////////////////////////////

  // });
  // $(window).scroll(function () {
  //   if ($(this).scrollTop() > 607 && $(this).scrollTop() < 1422) {
  //     $(".dot-container div:nth-child(2)").addClass("display-circle");
  //   } else {
  //     $(".dot-container div:nth-child(2)").removeClass("display-circle");
  //   }
  // });

  //   const dot1 = document.querySelector(".dot-container div:nth-child(1)");
  // window.onscroll = function () {
  // let scrolled = window.scrollY; //window.scrollY reads the current scroll position in px.
  // console.log(`Scrolled: \n` + scrolled);
  // if (scrolled >= 728 && scrolled < 1396) {
  //   $(dot1).addClass("display-circle");
  // } else {
  //   $(dot1).removeClass("display-circle");
  // };
});

// let scrolled = window.scrollY; //window.scrollY reads the current scroll position in px.
// console.log(`Scrolled: \n` + scrolled);
// if (scrolled > 411 && scrolled < 603) {
//   //Do something
// }
