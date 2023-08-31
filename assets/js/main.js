(function ($) {
  "use strict";

  $(document).ready(function () {
    /*-----------------------------------------
            global slick slicer control
        ------------------------------------------*/

    var globalSlickInit = $(".global-slick-init");
    if (globalSlickInit.length > 0) {
      //todo have to check slider item
      $.each(globalSlickInit, function (index, value) {
        if ($(this).children("div").length > 1) {
          //todo configure slider settings object
          var sliderSettings = {};
          var allData = $(this).data();
          var infinite =
            typeof allData.infinite == "undefined" ? false : allData.infinite;
          var arrows =
            typeof allData.arrows == "undefined" ? false : allData.arrows;
          var autoplay =
            typeof allData.autoplay == "undefined" ? false : allData.autoplay;
          var focusOnSelect =
            typeof allData.focusonselect == "undefined"
              ? false
              : allData.focusonselect;
          var swipeToSlide =
            typeof allData.swipetoslide == "undefined"
              ? false
              : allData.swipetoslide;
          var slidesToShow =
            typeof allData.slidestoshow == "undefined"
              ? 1
              : allData.slidestoshow;
          var slidesToScroll =
            typeof allData.slidestoscroll == "undefined"
              ? 1
              : allData.slidestoscroll;
          var speed =
            typeof allData.speed == "undefined" ? "500" : allData.speed;
          var dots = typeof allData.dots == "undefined" ? false : allData.dots;
          var cssEase =
            typeof allData.cssease == "undefined" ? "linear" : allData.cssease;
          var prevArrow =
            typeof allData.prevarrow == "undefined" ? "" : allData.prevarrow;
          var nextArrow =
            typeof allData.nextarrow == "undefined" ? "" : allData.nextarrow;
          var centerMode =
            typeof allData.centermode == "undefined"
              ? false
              : allData.centermode;
          var centerPadding =
            typeof allData.centerpadding == "undefined"
              ? "50px"
              : allData.centerpadding;
          var rows =
            typeof allData.rows == "undefined" ? 1 : parseInt(allData.rows);
          var autoplay =
            typeof allData.autoplay == "undefined" ? false : allData.autoplay;
          var autoplaySpeed =
            typeof allData.autoplayspeed == "undefined"
              ? 2000
              : parseInt(allData.autoplayspeed);
          var lazyLoad =
            typeof allData.lazyload == "undefined" ? false : allData.lazyload; // have to remove it from settings object if it undefined
          var appendDots =
            typeof allData.appenddots == "undefined"
              ? false
              : allData.appenddots;
          var appendArrows =
            typeof allData.appendarrows == "undefined"
              ? false
              : allData.appendarrows;
          var asNavFor =
            typeof allData.asnavfor == "undefined" ? false : allData.asnavfor;
          var verticalSwiping =
            typeof allData.verticalswiping == "undefined"
              ? false
              : allData.verticalswiping;
          var vertical =
            typeof allData.vertical == "undefined" ? false : allData.vertical;
          var fade = typeof allData.fade == "undefined" ? false : allData.fade;
          var rtl = typeof allData.rtl == "undefined" ? false : allData.rtl;
          var responsive =
            typeof $(this).data("responsive") == "undefined"
              ? false
              : $(this).data("responsive");

          //slider settings object setup
          sliderSettings.infinite = infinite;
          sliderSettings.arrows = arrows;
          sliderSettings.autoplay = autoplay;
          sliderSettings.focusOnSelect = focusOnSelect;
          sliderSettings.swipeToSlide = swipeToSlide;
          sliderSettings.slidesToShow = slidesToShow;
          sliderSettings.slidesToScroll = slidesToScroll;
          sliderSettings.speed = speed;
          sliderSettings.dots = dots;
          sliderSettings.cssEase = cssEase;
          sliderSettings.prevArrow = prevArrow;
          sliderSettings.nextArrow = nextArrow;
          sliderSettings.rows = rows;
          sliderSettings.autoplaySpeed = autoplaySpeed;
          sliderSettings.autoplay = autoplay;
          sliderSettings.verticalSwiping = verticalSwiping;
          sliderSettings.vertical = vertical;
          sliderSettings.rtl = rtl;
          sliderSettings.centerPadding = centerPadding;

          if (centerMode != false) {
            sliderSettings.centerMode = centerMode;
          }
          if (centerPadding != false) {
            sliderSettings.centerPadding = centerPadding;
          }
          if (lazyLoad != false) {
            sliderSettings.lazyLoad = lazyLoad;
          }
          if (appendDots != false) {
            sliderSettings.appendDots = appendDots;
          }
          if (appendArrows != false) {
            sliderSettings.appendArrows = appendArrows;
          }
          if (asNavFor != false) {
            sliderSettings.asNavFor = asNavFor;
          }
          if (fade != false) {
            sliderSettings.fade = fade;
          }
          if (responsive != false) {
            sliderSettings.responsive = responsive;
          }
          $(this).slick(sliderSettings);
        }
      });
    }

    /*-------------------------------
            Navbar Fix
          ------------------------------*/
    if ($(window).width() < 991) {
      navbarFix();
    }

    $(".menu-item-has-children a").on("click", function () {
      var element = $(this).parent("li");
      if (element.hasClass("show")) {
        element.removeClass("show");
        element.children("ul").slideUp(500);
      } else {
        element.siblings("li").removeClass("show");
        element.addClass("show");
        element.siblings("li").find("ul").slideUp(500);
        element.children("ul").slideDown(500);
      }
    });

    //Odometer
    if ($(".single-counterup").length) {
      $(".single-counterup").each(function () {
        $(this).isInViewport(function (status) {
          if (status === "entered") {
            for (
              var i = 0;
              i < document.querySelectorAll(".odometer").length;
              i++
            ) {
              var el = document.querySelectorAll(".odometer")[i];
              el.innerHTML = el.getAttribute("data-odometer-final");
            }
          }
        });
      });
    }

    // Title Shape Scroll animation
    $(window).on("scroll", function () {
      let shape = document.querySelectorAll(".title-shape");

      for (let i = 0; i < shape.length; i++) {
        var windowHeight = window.innerHeight;
        var elementTop = shape[i].getBoundingClientRect().top;
        var elementVisible = 150;

        if (elementTop < windowHeight - elementVisible) {
          shape[i].classList.add("active");
        } else {
          shape[i].classList.remove("active");
        }
      }
    });
    // Plane Shape Scroll animation
    $(window).on("scroll", function () {
      let shape = document.querySelectorAll(".plane-wrap");

      for (let i = 0; i < shape.length; i++) {
        var windowHeight = window.innerHeight;
        var elementTop = shape[i].getBoundingClientRect().top;
        var elementVisible = 200;

        if (elementTop < windowHeight - elementVisible) {
          shape[i].classList.add("active");
        } else {
          shape[i].classList.remove("active");
        }
      }
    });

    /*--------------------
           Remove cart item
        ---------------------*/
    $(".remove-cart").on("click", function (e) {
      e.preventDefault();
      $(this).parent().parent().hide(300);
    });

    /*-------------------------
            product + - start here
        -------------------------*/

    $(function () {
      $(".qtybutton").on("click", function () {
        var $button = $(this);
        var oldValue = $button.parent().find("input").val();
        if ($button.text() === "+") {
          var newVal = parseFloat(oldValue) + 1;
        } else {
          // Don't allow decrementing below zero
          if (oldValue > 1) {
            var newVal = parseFloat(oldValue) - 1;
          } else {
            newVal = 1;
          }
        }
        $button.parent().find("input").val(newVal);
      });
    });

    /*--------------------
            wow js init
        ---------------------*/
    new WOW().init();

    /*-------------------------
            magnific popup activation
        -------------------------*/
    $(".video-play-btn,.video-popup,.small-vide-play-btn").magnificPopup({
      disableOn: 300,
      type: "iframe",
      mainClass: "mfp-fade",
      removalDelay: 160,
      preloader: false,
      fixedContentPos: false,
    });

    $(".image-popup").magnificPopup({
      type: "image",
      removalDelay: 260,
      mainClass: "mfp-zoom-in",
    });

    /*------------------
            back to top
        ------------------*/
    $(document).on("click", ".back-to-top", function () {
      $("html,body").animate(
        {
          scrollTop: 0,
        },
        2000
      );
    });

    /*-------------------------------
           Nice Select initialize
        ------------------------------*/
    $("select").niceSelect();

    /*----------------------
            Cart Sidebar
        -----------------------*/
    $(".open-cart").on("click", function () {
      $(".cart-menu-wrap").addClass("cart-open");
      $(".cart-menu-overlay").addClass("cart-overlay-open");
    });

    $(".cart-menu-overlay").on("click", function () {
      $(".cart-menu-wrap").removeClass("cart-open");
      $(".cart-menu-overlay").removeClass("cart-overlay-open");
    });

    /*----------------------
            Sidebar
        -----------------------*/
    $(".open-sidebar").on("click", function () {
      $(".sidebar-menu-wrap").addClass("sidebar-open");
      $(".side-menu-overlay").addClass("overlay-open");
    });

    $(".side-menu-overlay,.close-btn-02").on("click", function () {
      $(".sidebar-menu-wrap").removeClass("sidebar-open");
      $(".side-menu-overlay").removeClass("overlay-open");
    });

    /*----------------------
            Search Popup
        -----------------------*/
    var bodyOvrelay = $("#body-overlay");
    var searchPopup = $("#search-popup");

    $(document).on("click", "#body-overlay", function (e) {
      e.preventDefault();
      bodyOvrelay.removeClass("active");
      searchPopup.removeClass("active");
    });
    $(document).on("click", ".border-none", function (e) {
      e.preventDefault();
      bodyOvrelay.removeClass("active");
      searchPopup.removeClass("active");
    });
    $(document).on("click", "#search", function (e) {
      e.preventDefault();
      searchPopup.addClass("active");
      bodyOvrelay.addClass("active");
    });
  });

  //define variable for store last scrolltop
  var lastScrollTop = "";

  $(window).on("scroll", function () {
    //back to top show/hide
    var ScrollTop = $(".back-to-top");
    if ($(window).scrollTop() > 1000) {
      ScrollTop.fadeIn(1000);
    } else {
      ScrollTop.fadeOut(1000);
    }

    // Sticky-Memu
    if ($(window).width() > 991) {
      StickyMenu();
    }
  });

  $(window).on("resize", function () {
    /*-------------------------------
            Navbar Fix
        ------------------------------*/
    if ($(window).width() < 991) {
      navbarFix();
    }
  });

  $(window).on("load", function () {
    /*-----------------
            preloader
        ------------------*/
    setInterval(function () {
      $("#preloader").fadeOut(300);
    }, 500);

    /*-----------------
            back to top
        ------------------*/
    var backtoTop = $(".back-to-top");
    backtoTop.fadeOut();
  });

  function navbarFix() {
    $(document).on(
      "click",
      ".navbar-area .navbar-nav li.menu-item-has-children>a, .navbar-area .navbar-nav li.appside-megamenu>a",
      function (e) {
        e.preventDefault();
      }
    );
  }

  function StickyMenu() {
    /*--------------------------
        sticky menu activation
        ---------------------------*/
    var st = $(this).scrollTop();
    var mainMenuTop = $(".navbar-area");
    if ($(window).scrollTop() > 500) {
      mainMenuTop.addClass("nav-fixed");
    } else {
      mainMenuTop.removeClass("nav-fixed");
    }
    lastScrollTop = st;
  }

  $(".recent").click(function () {
    let target_menu = $(this).siblings(".header-select-list");
    $(".header-select-list").slideUp();

    if (target_menu.is(":hidden")) {
      target_menu.slideDown();
    } else {
      target_menu.slideUp();
    }
  });
})(jQuery);
