// Add all JS development here
jQuery(function ($) {
  $(document).ready(function () {
    //*************Main Menu****************/
    //Navbar Desktop Scrollspy
    $(window).scroll(function () {
      var scroll = $(window).scrollTop();
      if (scroll > 80) {
        $(".inner").addClass("affix");
        //$('#dark-logo').show(); //Show dark logo
        //$('#white-logo').hide(); //Hide dark logo
      } else {
        $(".inner").removeClass("affix");
        //$('#dark-logo').hide(); //Hide dark logo
        //$('#white-logo').show(); //Show dark logo
      }
    });

    // Dropdown Hover
    //------Don't Remove this code this need to Menu hover to liner dropdown.
    //-----IF don't need to left right dropdown animation uncomment this function.
    $("ul.navbar-nav li.dropdown").hover(
      function () {
        $(this).find(".dropdown-menu").stop(true, true).delay(100).fadeIn(300);
      },
      function () {
        $(this).find(".dropdown-menu").stop(true, true).delay(100).fadeOut(300);
      }
    );

    $(".dropdown").hover(
      function () {
        $("#desktop-dropdown-menu", this).show(1000); //show mega menu
        $(".inner").addClass("navbar-white"); //Add white bg color the navbar
        //$('#dark-logo').show(); //Show dark logo
        //$('#white-logo').hide(); //Hide dark logo
      },
      function () {
        $("#desktop-dropdown-menu", this).hide(); //Hide mega menu
        $(".inner").removeClass("navbar-white"); //Add white bg color the navbar
        //$('#dark-logo').hide(); //Hide dark logo
        // $('#white-logo').show(); //Show dark logo
      }
    );
    //End Dropdwon Hover
    //*************Main Menu****************/

    //Navbar Mobile Scrollspy
    $(window).scroll(function () {
      var scroll = $(window).scrollTop();
      if (scroll > 80) {
        $(".mobile-inner").addClass("affix");
      } else {
        $(".mobile-inner").removeClass("affix");
      }
    });

    //Navbar Close after click
    // $(document).on('click', function () {
    //     $('.navbar .collapse').collapse('hide');
    // })

    //Mobile Menu hamburger
    $(".hamburger").click(function () {
      $(this).toggleClass("is-active");
    });

    //Number Counter
    var a = 0;
    $(window).scroll(function () {
      var oTop = $(".card").offset().top - window.innerHeight;
      if (a == 0 && $(window).scrollTop() > oTop) {
        $(".counter-value").each(function () {
          var $this = $(this),
            countTo = $this.attr("data-number");
          $({
            countNum: $this.text(),
          }).animate(
            {
              countNum: countTo,
            },

            {
              duration: 5000,
              easing: "swing",
              step: function () {
                //$this.text(Math.ceil(this.countNum));
                $this.text(Math.ceil(this.countNum).toLocaleString("en"));
              },
              complete: function () {
                $this.text(Math.ceil(this.countNum).toLocaleString("en"));
                //alert('finished');
              },
            }
          );
        });
        a = 1;
      }
    });

    //AOS animation
    // AOS.init({
    //     disable: true,
    // });

    //Client logo slider
    $(".clients-slider").owlCarousel({
      loop: true,
      margin: 10,
      nav: false,
      navText: [
        "<div class='prev-slide'><i class='ri-arrow-left-s-line'></i></div>",
        "<div class='next-slide'><i class='ri-arrow-right-s-line'></i></div>",
      ],
      dots: true,
      lazyLoad: true,
      transitionStyle: "fade",
      animateOut: "animate__fadeOutLeft",
      animateIn: "animate__fadeIn",
      slideTransition: "ease-in-out",
      autoplay: false,
      autoplayTimeout: 3000,
      autoplaySpeed: 800,
      smartSpeed: 450,
      responsive: {
        0: {
          items: 3,
        },
        768: {
          items: 5,
        },
        1200: {
          items: 7,
        },
      },
    });

    //Client Slider Industry and Services
    $(".clients-non-slider").owlCarousel({
      mouseDrag: false,
      margin: 10,
      nav: false,
      dots: false,
      smartSpeed: 450,
      responsive: {
        0: {
          items: 3,
        },
        600: {
          items: 3,
        },
        1000: {
          items: 7,
        },
      },
    });

    //Outcomes slider
    $(".outcomes-slider").owlCarousel({
      loop: true,
      margin: 10,
      nav: true,
      navText: [
        "<div class='prev-slide'><i class='ri-arrow-left-s-line'></i></div>",
        "<div class='next-slide'><i class='ri-arrow-right-s-line'></i></div>",
      ],
      dots: false,
      lazyLoad: true,
      animateOut: "animate__fadeOutLeftBig",
      animateIn: "animate__fadeInRightBig",

      slideTransition: "ease-in-out",
      autoplay: true,
      autoplayTimeout: 4000,
      autoplaySpeed: 800,
      smartSpeed: 450,
      responsive: {
        0: {
          items: 1,
          // stagePadding: 15
        },
        576: {
          items: 2,
          stagePadding: 50,
        },
        768: {
          items: 2,
          stagePadding: 100,
        },
        1200: {
          items: 3,
          stagePadding: 100,
        },
        1441: {
          items: 4,
          stagePadding: 100,
        },
      },
    });

    //Life at fortude slider
    $(".slide-show-slider").owlCarousel({
      loop: true,
      margin: 10,
      nav: false,
      dots: false,
      lazyLoad: true,
      transitionStyle: "fade",
      animateOut: "fadeOut",

      slideTransition: "linear",
      autoplay: true,
      autoplayTimeout: 3000,
      autoplaySpeed: 1000,

      responsive: {
        0: {
          items: 1,
        },
        600: {
          items: 1,
        },
        1000: {
          items: 1,
        },
      },
    });

    //Industry Feeadback Slider
    $(".feedback-slider").owlCarousel({
      loop: true,
      margin: 0,
      nav: false,
      dots: false,
      lazyLoad: true,
      transitionStyle: "fade",
      animateOut: "fadeOut",

      slideTransition: "linear",
      autoplay: true,
      autoplayTimeout: 3000,
      autoplaySpeed: 1000,
      responsive: {
        0: {
          items: 1,
        },
        600: {
          items: 1,
        },
        1000: {
          items: 1,
        },
      },
    });

    //Linkedin Profiles Slider
    $(".profiles-slider").owlCarousel({
      loop: false,
      margin: 10,
      nav: false,
      dots: false,
      responsive: {
        0: {
          items: 2,
        },
        600: {
          items: 3,
        },
        1000: {
          items: 4,
        },
        1200: {
          items: 5,
        },
      },
    });

    //Insight main slider
    $(".insight-slider").owlCarousel({
      loop: true,
      margin: 10,
      nav: false,
      dots: false,
      lazyLoad: true,
      transitionStyle: "fade",
      animateOut: "fadeOut",

      slideTransition: "linear",
      autoplay: true,
      autoplayTimeout: 3000,
      autoplaySpeed: 1000,
      responsive: {
        0: {
          items: 1,
        },
        600: {
          items: 1,
        },
        1000: {
          items: 1,
        },
      },
    });

    //Webinar Grid slider
    $(".webinar-grid-slider").owlCarousel({
      loop: true,
      margin: 10,
      nav: true,
      navText: [
        "<div class='prev-slide'><i class='ri-arrow-left-s-line'></i></div>",
        "<div class='next-slide'><i class='ri-arrow-right-s-line'></i></div>",
      ],
      dots: false,
      responsive: {
        0: {
          items: 1,
        },

        768: {
          items: 2,
        },

        992: {
          items: 3,
        },

        1024: {
          items: 4,
        },
      },
    });

    //Featured news slider
    $(".featurednews-slider").owlCarousel({
      loop: true,
      margin: 10,
      nav: true,
      navText: [
        "<div class='prev-slide'><i class='ri-arrow-left-s-line'></i></div>",
        "<div class='next-slide'><i class='ri-arrow-right-s-line'></i></div>",
      ],
      dots: false,
      lazyLoad: true,
      transitionStyle: "fade",
      animateOut: "fadeOut",
      slideTransition: "linear",
      autoplay: true,
      autoplayTimeout: 3000,
      autoplaySpeed: 1500,
      smartSpeed: 450,
      responsive: {
        0: {
          items: 1,
        },
        600: {
          items: 1,
        },
        1000: {
          items: 1,
        },
      },
    });

    //Featured blogs slider
    $(".featured-blogs-slider").owlCarousel({
      loop: true,
      margin: 10,
      nav: true,
      navText: [
        "<div class='prev-slide'><i class='ri-arrow-left-s-line'></i></div>",
        "<div class='next-slide'><i class='ri-arrow-right-s-line'></i></div>",
      ],
      dots: false,
      lazyLoad: true,
      transitionStyle: "fade",
      animateOut: "animate__fadeOutLeft",
      animateIn: "animate__fadeIn",

      slideTransition: "linear",
      // slideTransition: 'ease-in-out',
      autoplay: true,
      autoplayTimeout: 15000,
      autoplaySpeed: 1000,
      smartSpeed: 450,
      responsive: {
        0: {
          items: 1,
        },
        600: {
          items: 1,
        },
        1000: {
          items: 1,
        },
      },
    });

    //Employee Feedback slider
    $(".employee-feedback-slider").owlCarousel({
      loop: true,
      margin: 10,
      nav: false,
      dots: false,
      lazyLoad: true,
      transitionStyle: "fade",
      animateOut: "fadeOut",

      slideTransition: "linear",
      autoplay: true,
      autoplayTimeout: 3000,
      autoplaySpeed: 1000,
      responsive: {
        0: {
          items: 1,
        },
        600: {
          items: 1,
        },
        1000: {
          items: 1,
        },
      },
    });

    //Webinar speaker slider
    $(".webinar-speaker-slider").owlCarousel({
      loop: false,
      margin: 10,
      nav: true,
      responsive: {
        0: {
          items: 1,
        },
        600: {
          items: 3,
        },
        1000: {
          items: 5,
        },
      },
    });

    //our wall Slider
    $(".ourwall-slider").owlCarousel({
      loop: true,
      margin: 10,
      nav: true,
      navText: [
        "<div class='prev-slide'><i class='ri-arrow-left-s-line'></i></div>",
        "<div class='next-slide'><i class='ri-arrow-right-s-line'></i></div>",
      ],
      dots: false,
      lazyLoad: true,
      transitionStyle: "fade",
      animateOut: "animate__fadeOutLeft",
      animateIn: "animate__fadeIn",
      slideTransition: "ease-in-out",
      autoplay: true,
      autoplayTimeout: 3000,
      autoplaySpeed: 1000,
      responsive: {
        0: {
          items: 1,
        },
        600: {
          items: 3,
        },
        1000: {
          items: 3,
        },
      },
    });

    //Feedback Slider Two
    $(".feedback-slider-two").owlCarousel({
      loop: true,
      margin: 10,
      nav: false,
      dots: false,
      responsive: {
        0: {
          items: 1,
        },
        600: {
          items: 1,
        },
        1000: {
          items: 1,
        },
      },
    });

    $(".related-blog-mobile").owlCarousel({
      loop: true,
      margin: 10,
      nav: true,
      navText: [
        "<div class='prev-slide'><i class='ri-arrow-left-s-line'></i></div>",
        "<div class='next-slide'><i class='ri-arrow-right-s-line'></i></div>",
      ],
      dots: false,
      lazyLoad: true,
      responsive: {
        0: {
          items: 1,
        },
        576: {
          items: 2,
        },
      },
    });

    $(".related-resource-mobile").owlCarousel({
      loop: true,
      margin: 10,
      nav: true,
      navText: [
        "<div class='prev-slide'><i class='ri-arrow-left-s-line'></i></div>",
        "<div class='next-slide'><i class='ri-arrow-right-s-line'></i></div>",
      ],
      dots: false,
      lazyLoad: true,
      responsive: {
        0: {
          items: 1,
        },
        576: {
          items: 2,
        },
      },
    });

    //Product single customers silder
    $('.customer-slider').owlCarousel({
      loop:true,
      margin:10,
      nav:true,
      navText: [
        "<div class='prev-slide'><i class='ri-arrow-left-s-line'></i></div>",
        "<div class='next-slide'><i class='ri-arrow-right-s-line'></i></div>",
      ],
      dots: false,
      responsive:{
          0:{
              items:2
          },
          600:{
              items:3
          },
          1000:{
              items:3
          }
      }
  })

    //Home Hero Boxes
    $(window).scroll(function () {
      var scroll = $(window).scrollTop();
      if (scroll > 100) {
        $(".hero-b").addClass("hero-boxes-animate");
      } else {
        $(".hero-b").removeClass("hero-boxes-animate");
        // $(".hero-b").addClass("fadeInUp-3");
      }
    });

    // init Isotope elements
    var $box = $(".isotope-box").isotope({
      itemSelector: ".isotope-item",
    });
    // filter functions

    // bind filter button click
    $(".isotope-toolbar").on("click", "a", function () {
      var filterValue = $(this).attr("data-type");
      $(".isotope-toolbar-btn").removeClass("active");
      $(this).addClass("active");
      if (filterValue !== "*") {
        filterValue = '[data-type="' + filterValue + '"]';
      }
      console.log(filterValue);
      $box.isotope({ filter: filterValue });
    });

    // init Isotope
    var $grid = $(".isotope-box").isotope({
      itemSelector: ".element-item",
      layoutMode: "fitRows",
    });
    // filter functions
    var filterFns = {
      // show if number is greater than 50
      // numberGreaterThan50: function () {
      //   var number = $(this).find(".number").text();
      //   return parseInt(number, 10) > 50;
      // },
      // show if name ends with -ium
      // ium: function () {
      //   var name = $(this).find(".name").text();
      //   return name.match(/ium$/);
      // },
    };
    // bind filter on select change
    $(".filters-select").on("change", function () {
      // get filter value from option value
      var filterValue = this.value;
      // use filterFn if matches value
      filterValue = filterFns[filterValue] || filterValue;
      $grid.isotope({ filter: filterValue });
    });


    // window.onscroll = function (e) {  

    //   var constantY = 1000;
    //     var scrollTop = window.pageYOffset || (document.documentElement || document.body.parentNode || document.body).scrollTop;
    //   var sidebars = document.getElementsByClassName("sidebar");
    //   if (scrollTop > constantY) {
    //   sidebars[0].classList.add("sticky-panel");
      
    //   }
    //   else {
    //   sidebars[0].classList.remove("sticky-panel");
    //   sidebars[0].classList.add("bottom-panel");
    //   }
      
    //     //console.log(window.pageYOffset || (document.documentElement || document.body.parentNode ||document.body).scrollTop);
    //   }

    // window.onscroll = function (e) {  
    //   var constantY = 300;
    //   var mainContent = document.querySelector('.survey');
    //   var contentRect = mainContent.getBoundingClientRect();
    //   var scrollTop = (window.pageYOffset || document.documentElement.scrollTop) - contentRect.top;
    //   var sidebars = document.getElementsByClassName("sidebar");
    //   if (scrollTop > constantY) {
    //     sidebars[0].classList.add("sticky-panel");
    //   } else {
    //     sidebars[0].classList.remove("sticky-panel");
    //     sidebars[0].classList.add("bottom-panel");
    //   }
    // };

    $(function () {
      var top =
        $(".sidebar").offset().top -
        parseFloat($(".sidebar").css("marginTop").replace(/auto/, 0));
      var footTop =
        $("#footer").offset().top -
        parseFloat($("#footer").css("marginTop").replace(/auto/, 0));

      var maxY = footTop - $(".sidebar").outerHeight();

      $(window).scroll(function (evt) {
        var y = $(this).scrollTop();
        if (y > top) {
          if (y < maxY) {
            $(".sidebar").addClass("fixed").removeAttr("style");
          } else {
            $(".sidebar")
              .removeClass("fixed")
              .css({
                position: "absolute",
                top: maxY - top + "px",
              });
          }
        } else {
          $(".sidebar").removeClass("fixed");
        }
      });
    });





    
    
    
    




    
    
    

    //Fortest Page Video
    // var overlay = document.getElementById("video-main"),
    //   video = document.getElementById("video-1"),
    //   videoPlaying = false;

    // function hideOverlay() {
    //   overlay.style.display = "none";
    //   videoPlaying = true;
    //   video.play();
    // }

    // function showOverlay() {
    //   // this check is to differentiate seek and actual pause
    //   if (video.readyState === 4) {
    //     overlay.style.display = "block";
    //     videoPlaying = true;
    //   }
    // }
    // video.addEventListener("pause", showOverlay);
    // overlay.addEventListener("click", hideOverlay);
    //Fortest Page Video End

    // //Fortest Page Demo Video
    // var overlay1 = document.getElementById("video-demo-overlay"),
    //   video1 = document.getElementById("demo-video"),
    //   videoPlaying = false;

    // function hideOverlay1() {
    //   overlay1.style.display = "none";
    //   videoPlaying = true;
    //   video1.play();
    // }

    // function showOverlay1() {
    //   // this check is to differentiate seek and actual pause
    //   if (video1.readyState === 4) {
    //     overlay1.style.display = "block";
    //     videoPlaying = true;
    //   }
    // }
    // video1.addEventListener("pause", showOverlay1);
    // overlay1.addEventListener("click", hideOverlay1);
    // //Fortest Page Demo Video End

    //select2js for fillters
    $(".filters-select").select2();

    // $(".slider-for").slick({
    //   slidesToShow: 1,
    //   slidesToScroll: 1,
    //   arrows: false,
    //   fade: true,
    //   asNavFor: ".slider-nav",
    // });
    // $(".slider-nav").slick({
    //   slidesToShow: 3,
    //   slidesToScroll: 1,
    //   asNavFor: ".slider-for",
    //   dots: false,
    //   focusOnSelect: true,
    //   responsive: [
    //     {
    //       breakpoint: 768,
    //       settings: {
    //         slidesToShow: 2,
    //         arrows: false,
    //       },
    //     },
    //     {
    //       breakpoint: 480,
    //       settings: {
    //         slidesToShow: 1,
    //         arrows: true,
    //       },
    //     },
    //   ],
    // });

    // $("a[data-slide]").click(function (e) {
    //   e.preventDefault();
    //   var slideno = $(this).data("slide");
    //   $(".slider-nav").slick("slickGoTo", slideno - 1);
    // });

    //Single blog page sidebar scroll
    var a = new StickySidebar("#sidebar", {
      topSpacing: 100,
      bottomSpacing: 50,
      containerSelector: ".row",
      innerWrapperSelector: ".sidebar__inner",
      resizeSensor: true,
      stickyClass: "is-affixed",
    });

    //Single blog scroll progress bar
    $(function () {
      // update on window scroll or resize
      $(window).on("resize scroll", function () {
        updateProgress(".progress");
      });

      var offsetHeight =
        document.getElementById("blogbody-content").offsetHeight;

      function updateProgress(element) {
        var height = offsetHeight,
          progress = $(window).scrollTop() / height;

        $(element).css("width", progress * 100 + "%");
      }
    });

    //analytics helthcheck page sidebar scroll
    // var a = new StickySidebar("#sidebar-health", {
    //   topSpacing: 100,
    //   bottomSpacing: 50,
    //   containerSelector: "#main-content",
    //   innerWrapperSelector: ".sidebar__inner1",
    //   resizeSensor: true,
    //   stickyClass: "is-affixed",
    // });

    // $('#sidebar-health').theiaStickySidebar();
  });
});

// accourdian js
function expand(target) {
  for (let slide of target.parentNode.children) {
    slide.classList.remove("slide--expanded");
  }
  target.classList.add("slide--expanded");
}
// End accourdian js

//Contact Us Image Function
function UnitedStates() {
  document.getElementById("location-united-states").style.display = "block";
  document.getElementById("location-canada").style.display = "none";
  document.getElementById("location-united-kingdom").style.display = "none";
  document.getElementById("location-sri-lanka").style.display = "none";
  document.getElementById("location-australia").style.display = "none";

  var element = document.getElementById("location-united-states");
  element.classList.add("show");
  var element = document.getElementById("location-canada");
  element.classList.remove("show");
  var element = document.getElementById("location-united-kingdom");
  element.classList.remove("show");
  var element = document.getElementById("location-sri-lanka");
  element.classList.remove("show");
  var element = document.getElementById("location-australia");
  element.classList.remove("show");
}

function Canada() {
  document.getElementById("location-united-states").style.display = "none";
  document.getElementById("location-canada").style.display = "block";
  document.getElementById("location-united-kingdom").style.display = "none";
  document.getElementById("location-sri-lanka").style.display = "none";
  document.getElementById("location-australia").style.display = "none";

  var element = document.getElementById("location-united-states");
  element.classList.remove("show");
  var element = document.getElementById("location-canada");
  element.classList.add("show");
  var element = document.getElementById("location-united-kingdom");
  element.classList.remove("show");
  var element = document.getElementById("location-sri-lanka");
  element.classList.remove("show");
  var element = document.getElementById("location-australia");
  element.classList.remove("show");
}

function UnitedKingdom() {
  document.getElementById("location-united-states").style.display = "none";
  document.getElementById("location-canada").style.display = "none";
  document.getElementById("location-united-kingdom").style.display = "block";
  document.getElementById("location-sri-lanka").style.display = "none";
  document.getElementById("location-australia").style.display = "none";

  var element = document.getElementById("location-united-states");
  element.classList.remove("show");
  var element = document.getElementById("location-canada");
  element.classList.remove("show");
  var element = document.getElementById("location-united-kingdom");
  element.classList.add("show");
  var element = document.getElementById("location-sri-lanka");
  element.classList.remove("show");
  var element = document.getElementById("location-australia");
  element.classList.remove("show");
}

function SriLanka() {
  document.getElementById("location-united-states").style.display = "none";
  document.getElementById("location-canada").style.display = "none";
  document.getElementById("location-united-kingdom").style.display = "none";
  document.getElementById("location-sri-lanka").style.display = "block";
  document.getElementById("location-australia").style.display = "none";

  var element = document.getElementById("location-united-states");
  element.classList.remove("show");
  var element = document.getElementById("location-canada");
  element.classList.remove("show");
  var element = document.getElementById("location-united-kingdom");
  element.classList.remove("show");
  var element = document.getElementById("location-sri-lanka");
  element.classList.add("show");
  var element = document.getElementById("location-australia");
  element.classList.remove("show");
}

function Australia() {
  document.getElementById("location-united-states").style.display = "none";
  document.getElementById("location-canada").style.display = "none";
  document.getElementById("location-united-kingdom").style.display = "none";
  document.getElementById("location-sri-lanka").style.display = "none";
  document.getElementById("location-australia").style.display = "block";

  var element = document.getElementById("location-united-states");
  element.classList.remove("show");
  var element = document.getElementById("location-canada");
  element.classList.remove("show");
  var element = document.getElementById("location-united-kingdom");
  element.classList.remove("show");
  var element = document.getElementById("location-sri-lanka");
  element.classList.remove("show");
  var element = document.getElementById("location-australia");
  element.classList.add("show");
}
//Contact Us Image Function End
