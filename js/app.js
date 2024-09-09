// PHD studen carousel 
$(document).ready(function () {
  $(".phd_student_carousel").owlCarousel({
    items: 4,
    loop: true,
    dots: false,
    nav: true,
    margin: 35,
    navText: [
      '<i class="fa-solid fa-chevron-left"></i>',
      '<i class="fa-solid fa-chevron-right"></i>',
    ],
    responsive: {
      0: {
        items: 1,
      },

      575: {
        items: 2,
      },

      991: {
        items: 3,
      },

      1025: {
        items: 4,
      },
    },
  });
});


// Recent publication carousel
$(document).ready(function () {
  $(".recent_carousel").owlCarousel({
    items: 1,
    loop: true,
    dots: false,
    nav: true,
    margin:10,
    navText: [
      '<i class="fa-solid fa-chevron-left"></i>',
      '<i class="fa-solid fa-chevron-right"></i>',
    ],
  });
});
