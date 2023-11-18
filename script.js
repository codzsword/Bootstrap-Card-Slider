$(document).ready(function () {
  $(".product-list").slick({
    arrows: true,
    dots: true,
    slidesToShow: 2,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
    nextArrow:
      '<div class="nextArrowBtn"><i class="icon lni lni-chevron-right"></i></div>',
    prevArrow:
      '<div class="prevArrowBtn"><i class="icon lni lni-chevron-left"></i></div>',
  });
});
