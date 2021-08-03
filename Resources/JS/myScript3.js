//Animation for the white dots and cricles to transition depending on which part of the page.
//Starts at 415px.

$(document).ready(function () {
  $(".js--header-pic").waypoint(function () {
    $(".dot-container div:nth-child(1)").css({ border: "2px solid white" }); //circle 1
    $(".dot-container div:nth-child(3)").css({ opacity: "0" }); //circle 3
    $(".dot-container p:nth-child(2)").css({ color: "#66b245" }); //dot 1
    $(".dot-container p:nth-child(4)").removeClass("green"); // dot 2
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
      offset: "150px;",
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
      offset: "150px;",
    }
  );

  //dot 4
  $(".section--order").waypoint(
    function () {
      $(".dot-container div:nth-child(5)").css({ opacity: "0" }); //circle 3
      $(".dot-container div:nth-child(7)").css({ opacity: "1" }); // circle 4
      $(".dot-container div:nth-child(9)").css({ opacity: "0" }); //circle 5
      $(".dot-container p:nth-child(8)").addClass("green"); //adds '.green' to dot 4
      $(".dot-container p:nth-child(6)").removeClass("green"); //removes '.green' from dot 3
    },
    {
      offset: "150px;",
    }
  );

  //dot 5
  $(".section--ethics").waypoint(
    function () {
      $(".dot-container div:nth-child(7)").css({ opacity: "0" }); //circle 4
      $(".dot-container div:nth-child(9)").css({ opacity: "1" }); //circle 5
      $(".dot-container div:nth-child(11)").css({ opacity: "0" }); //circle 6
      $(".dot-container p:nth-child(10)").addClass("green"); //adds '.green' to dot 5
      $(".dot-container p:nth-child(8)").removeClass("green"); //removes '.green' from dot 4
    },
    {
      offset: "150px;",
    }
  );

  //dot 6
  $(".section--vacancies").waypoint(
    function () {
      $(".dot-container div:nth-child(9)").css({ opacity: "0" }); //circle 5
      $(".dot-container div:nth-child(11)").css({ opacity: "1" }); // circle 6
      $(".dot-container div:nth-child(13)").css({ opacity: "0" }); //circle 7
      $(".dot-container p:nth-child(12)").addClass("green"); //adds '.green' to dot 6
      $(".dot-container p:nth-child(10)").removeClass("green"); //removes '.green' from dot 5
    },
    {
      offset: "150px;",
    }
  );

  //dot 7
  $(".section--contact-us").waypoint(
    function () {
      $(".dot-container div:nth-child(11)").css({ opacity: "0" }); //circle 6
      $(".dot-container div:nth-child(13)").css({ opacity: "1" }); //circle 7
      $(".dot-container p:nth-child(14)").addClass("green"); //adds '.green' to dot 6
      $(".dot-container p:nth-child(12)").removeClass("green"); //removes '.green' from dot 5
    },
    {
      offset: "150px;",
    }
  );

  $(".section--mailing-list").waypoint(
    function () {
      $(".dot-container div:nth-child(13)").css({ opacity: "0" }); //circle 7
      $(".dot-container p:nth-child(14)").removeClass("green"); //adds '.green' to dot 6
    },
    {
      offset: "250px;",
    }
  );

  //--------------- SCROLLING UPWARDS --------------- //
  //The green cart in the 'section--story' section. Moves the circle to the 1st dot when scrolling upwards from the 'section--kit' section.
  $(".dot1-waypoint").waypoint(
    function () {
      $(".dot-container div:nth-child(1)").css({ border: "2px solid white" }); //circle 1
      $(".dot-container p:nth-child(2)").css({ color: "#66b245" }); //dot 1
      $(".dot-container div:nth-child(3)").css({ opacity: "0" }); //circle 2
      $(".dot-container p:nth-child(4)").removeClass("green"); //removes '.green' to dot 2
    },
    {
      offset: "100px;",
    }
  );

  $(".home-cart").waypoint(
    function () {
      $(".dot-container div:nth-child(3)").css({ opacity: "1" }); //circle 2
      $(".dot-container div:nth-child(5)").css({ opacity: "0" }); //circle 3
      $(".dot-container p:nth-child(4)").addClass("green"); //dot2
      $(".dot-container p:nth-child(6)").removeClass("green"); //dot 3
    },
    {
      offset: "100px;",
    }
  );

  //'Order DIY Kit'. Moves the circle to the 3rd dot when scrolling upwards from the 'section--order' section.
  $(".section--kit a").waypoint(
    function () {
      $(".dot-container div:nth-child(5)").css({ opacity: "1" }); //circle 3
      $(".dot-container div:nth-child(7)").css({ opacity: "0" }); //circle 4
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
      $(".dot-container div:nth-child(7)").css({ opacity: "1" }); //circle 4
      $(".dot-container div:nth-child(9)").css({ opacity: "0" }); //circle 5
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
      $(".dot-container div:nth-child(9)").css({ opacity: "1" }); //circle 5
      $(".dot-container div:nth-child(11)").css({ opacity: "0" }); //circle 6
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
      $(".dot-container div:nth-child(11)").css({ opacity: "1" }); //circle 6
      $(".dot-container div:nth-child(13)").css({ opacity: "0" }); //circle 7
      $(".dot-container p:nth-child(12)").addClass("green"); //dot 6
      $(".dot-container p:nth-child(14)").removeClass("green"); //dot 7
    },
    {
      offset: "170px;",
    }
  );

  $(".section--contact-us a").waypoint(
    function () {
      $(".dot-container div:nth-child(13)").css({ opacity: "1" }); //circle 7
      $(".dot-container p:nth-child(14)").addClass("green"); //dot 7
    },
    {
      offset: "200px;",
    }
  );
});
