/* =========================================
                Preloader
============================================ */
$(window).on("load", function () {
  // makes sure that whole site is loaded
  $("#status").fadeOut();
  $("#preloader").delay(350).fadeOut("slow");
});

/* =========================================
                Team
============================================ */
$(function () {
  $("#team-members").owlCarousel({
    items: 2,
    autoplay: true,
    smartSpeed: 700,
    loop: true,
    autoplayHoverPause: true,
    nav: true,
    dots: false,
    navText: [
      '<i class="fa fa-angle-left"></i>',
      '<i class="fa fa-angle-right"></i>',
    ],
    responsive: {
      // breakpoint from 0 up
      0: {
        items: 1,
      },
      // breakpoint from 480 up
      480: {
        items: 2,
      },
    },
  });
});

/* =========================================
                Progress Bars
============================================ */
$(function () {
  $("#progress-elements").waypoint(
    function () {
      $(".progress-bar").each(function () {
        $(this).animate(
          {
            width: $(this).attr("aria-valuenow") + "%",
          },
          2000
        );
      });

      this.destroy();
    },
    {
      offset: "bottom-in-view",
    }
  );
});

/* =========================================
               Responsive Tabs
============================================ */
$(function () {
  $("#services-tabs").responsiveTabs({
    animation: "slide",
  });
});

/* =========================================
               Portfolio
============================================ */
$(window).on("load", function () {
  // Initialize Isotope
  $("#isotope-container").isotope({});

  // filter items on button click
  $("#isotope-filters").on("click", "button", function () {
    // get filter value
    var filterValue = $(this).attr("data-filter");

    // filter portfolio
    $("#isotope-container").isotope({
      filter: filterValue,
    });

    // active button
    $("#isotope-filters").find(".active").removeClass("active");
    $(this).addClass("active");
  });
});
/* =========================================
               Magnifier
============================================ */
$(function () {
  $("#portfolio-wrapper").magnificPopup({
    delegate: "a", // child items selector, by clicking on it popup will open
    type: "image",
    gallery: {
      enabled: true,
    },
  });
});

/* =========================================
               Testimonials
============================================ */
$(function () {
  $("#testimonial-slider").owlCarousel({
    items: 1,
    autoplay: false,
    smartSpeed: 700,
    loop: true,
    autoplayHoverPause: true,
    nav: true,
    dots: false,
    navText: [
      '<i class="fa fa-angle-left"></i>',
      '<i class="fa fa-angle-right"></i>',
    ],
  });
});

/* =========================================
              Stats
============================================ */
$(function () {
  $(".counter").counterUp({
    delay: 10,
    time: 2000,
  });
});

/* =========================================
              Clients
============================================ */
$(function () {
  $("#clients-list").owlCarousel({
    items: 6,
    autoplay: false,
    smartSpeed: 700,
    loop: true,
    autoplayHoverPause: true,
    nav: true,
    dots: false,
    navText: [
      '<i class="fa fa-angle-left"></i>',
      '<i class="fa fa-angle-right"></i>',
    ],
    responsive: {
      // breakpoint from 0 up
      0: {
        items: 2,
      },
      // breakpoint from 480 up
      480: {
        items: 3,
      },
      // breakpoint from 768 up
      768: {
        items: 6,
      },
    },
  });
});

/* =========================================
              Google Map
============================================ */
$(window).on("load", function () {
  // Map Variables
  var addressString = "230 Broadway, NY, New York 10007, USA";
  var myLatlng = {
    lat: 40.712685,
    lng: -74.00592,
  };

  // 1. Render Map
  var map = new google.maps.Map(document.getElementById("map"), {
    zoom: 11,
    center: myLatlng,
  });

  // 2. Add Marker
  var marker = new google.maps.Marker({
    position: myLatlng,
    map: map,
    title: "Click To See Address",
  });

  // 3. Add Info Window
  var infowindow = new google.maps.InfoWindow({
    content: addressString,
  });

  // Show info window when user clicks marker
  marker.addListener("click", function () {
    infowindow.open(map, marker);
  });

  // 4. Resize Function
  google.maps.event.addDomListener(window, "resize", function () {
    var center = map.getCenter();
    google.maps.event.trigger(map, "resize");
    map.setCenter(center);
  });
});

/* =========================================
              Navigation
============================================ */

/* Show & Hide White Navigation */
$(function () {
  // show/hide nav on page load
  showHideNav();

  $(window).scroll(function () {
    // show/hide nav on window's scroll
    showHideNav();
  });

  function showHideNav() {
    if ($(window).scrollTop() > 50) {
      // Show white nav
      $("nav").addClass("white-nav-top");

      // Show dark logo
      $(".navbar-brand img").attr("src", "img/logo/logo-dark.png");

      // Show back to top button
      $("#back-to-top").fadeIn();
    } else {
      // Hide white nav
      $("nav").removeClass("white-nav-top");

      // Show logo
      $(".navbar-brand img").attr("src", "img/logo/logo.png");

      // Hide back to top button
      $("#back-to-top").fadeOut();
    }
  }
});

// Smooth Scrolling
$(function () {
  $("a.smooth-scroll").click(function (event) {
    event.preventDefault();

    // get section id like #about, #servcies, #work, #team and etc.
    var section_id = $(this).attr("href");

    $("html, body").animate(
      {
        scrollTop: $(section_id).offset().top - 64,
      },
      1250,
      "easeInOutExpo"
    );
  });
});

/* =========================================
              Mobile Menu
============================================ */
$(function () {
  // Show mobile nav
  $("#mobile-nav-open-btn").click(function () {
    $("#mobile-nav").css("height", "100%");
  });

  // Hide mobile nav
  $("#mobile-nav-close-btn, #mobile-nav a").click(function () {
    $("#mobile-nav").css("height", "0%");
  });
});

/* =========================================
                Animation
============================================ */
// animate on scroll
$(function () {
  new WOW().init();
});

// home animation on page load
$(window).on("load", function () {
  $("#home-heading-1").addClass("animated fadeInDown");
  $("#home-heading-2").addClass("animated fadeInLeft");
  $("#home-text").addClass("animated zoomIn");
  $("#home-btn").addClass("animated zoomIn");
  $("#arrow-down i").addClass("animated fadeInDown infinite");
});


// const initSlider = () => {
//   const imageList = document.querySelector(".slider-wrapper .image-list");
//   const slideButtons = document.querySelectorAll(".slider-wrapper .slide-button");
//   const sliderScrollbar = document.querySelector(".container .slider-scrollbar");
//   const scrollbarThumb = sliderScrollbar.querySelector(".scrollbar-thumb");
//   const maxScrollLeft = imageList.scrollWidth - imageList.clientWidth;
  
//   // Handle scrollbar thumb drag
//   scrollbarThumb.addEventListener("mousedown", (e) => {
//       const startX = e.clientX;
//       const thumbPosition = scrollbarThumb.offsetLeft;
//       const maxThumbPosition = sliderScrollbar.getBoundingClientRect().width - scrollbarThumb.offsetWidth;
      
//       // Update thumb position on mouse move
//       const handleMouseMove = (e) => {
//           const deltaX = e.clientX - startX;
//           const newThumbPosition = thumbPosition + deltaX;

//           // Ensure the scrollbar thumb stays within bounds
//           const boundedPosition = Math.max(0, Math.min(maxThumbPosition, newThumbPosition));
//           const scrollPosition = (boundedPosition / maxThumbPosition) * maxScrollLeft;
          
//           scrollbarThumb.style.left = `${boundedPosition}px`;
//           imageList.scrollLeft = scrollPosition;
//       }

//       // Remove event listeners on mouse up
//       const handleMouseUp = () => {
//           document.removeEventListener("mousemove", handleMouseMove);
//           document.removeEventListener("mouseup", handleMouseUp);
//       }

//       // Add event listeners for drag interaction
//       document.addEventListener("mousemove", handleMouseMove);
//       document.addEventListener("mouseup", handleMouseUp);
//   });

//   // Slide images according to the slide button clicks
//   slideButtons.forEach(button => {
//       button.addEventListener("click", () => {
//           const direction = button.id === "prev-slide" ? -1 : 1;
//           const scrollAmount = imageList.clientWidth * direction;
//           imageList.scrollBy({ left: scrollAmount, behavior: "smooth" });
//       });
//   });

//    // Show or hide slide buttons based on scroll position
//   const handleSlideButtons = () => {
//       slideButtons[0].style.display = imageList.scrollLeft <= 0 ? "none" : "flex";
//       slideButtons[1].style.display = imageList.scrollLeft >= maxScrollLeft ? "none" : "flex";
//   }

//   // Update scrollbar thumb position based on image scroll
//   const updateScrollThumbPosition = () => {
//       const scrollPosition = imageList.scrollLeft;
//       const thumbPosition = (scrollPosition / maxScrollLeft) * (sliderScrollbar.clientWidth - scrollbarThumb.offsetWidth);
//       scrollbarThumb.style.left = `${thumbPosition}px`;
//   }

//   // Call these two functions when image list scrolls
//   imageList.addEventListener("scroll", () => {
//       updateScrollThumbPosition();
//       handleSlideButtons();
//   });
// }

// window.addEventListener("resize", initSlider);
// window.addEventListener("load", initSlider);






// document.addEventListener("DOMContentLoaded", function() {
// // تحديد مؤشر الصورة الحالية
// var currentIndex = 0;

// // احصل على جميع الصور
// var carouselItems = document.querySelectorAll(".carousel-item");

// // تحديد الزر "التالي" و "السابق"
// var nextButton = document.querySelector(".carousel-control-next");
// var prevButton = document.querySelector(".carousel-control-prev");

// // دالة لعرض الصورة التالية
// function showNextImage() {
//   // إخفاء الصورة الحالية
//   carouselItems[currentIndex].classList.remove("active");

//   // زيادة المؤشر بواحد والتحقق من الحد الأقصى
//   currentIndex = (currentIndex + 1) % carouselItems.length;

//   // عرض الصورة الجديدة
//   carouselItems[currentIndex].classList.add("active");
// }

// // دالة لعرض الصورة السابقة
// function showPrevImage() {
//   // إخفاء الصورة الحالية
//   carouselItems[currentIndex].classList.remove("active");

//   // تقليل المؤشر بواحد والتحقق من الحد الأدنى
//   currentIndex = (currentIndex - 1 + carouselItems.length) % carouselItems.length;

//   // عرض الصورة الجديدة
//   carouselItems[currentIndex].classList.add("active");
// }



// // تحديد وقت التأخير لتغيير الصور تلقائيًا (بالميلي ثانية)
// var interval = 3000;

// // التغيير التلقائي للصور بعد فترة زمنية محددة
// setInterval(showNextImage, interval);
// });



