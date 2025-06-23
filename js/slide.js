let swiper = new Swiper('.swiper', {
  slidesPerView: 4,
  grid: {
    rows: 2,
  },
  spaceBetween: 20,

  pagination: {
    el: '.swiper-pagination',
    mousewheel: true,
    keyboard: true,
  },
});
