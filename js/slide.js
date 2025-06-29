let swiper = new Swiper(".swiper", {
  slidesPerView: 4,
  grid: {
    rows: 2,
    fill: "row",
  },
  spaceBetween: 20,

  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },

  /* pagination: {
    el: ".swiper-pagination",
    clickable: true,
    mousewheel: true,
    keyboard: true,
  }, */
});
