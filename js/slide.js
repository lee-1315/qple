let swiper = new Swiper('.swiper', {
  slidesPerView: 4,
  slidesPerGroup: 4,
  grid: {
    rows: 2,
    fill: 'row',
  },
  spaceBetween: 20,

  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },

  pagination: {
    el: '.swiper-pagination',
    clickable: true,
    mousewheel: true,
    keyboard: true,
  },

  /* 반응형 설정 */
  breakpoints: {
    320: {
      slidesPerView: 1,
      slidesPerGroup: 1,
      grid: {
        rows: 1,
        fill: 'row',
      },
      navigation: false,
    },

    768: {
      slidesPerView: 2,
      slidesPerGroup: 2,
      grid: {
        rows: 2,
        fill: 'row',
      },
      spaceBetween: 15,
      navigation: false,
    },

    1024: {
      slidesPerView: 3,
      slidesPerGroup: 3,
      grid: {
        rows: 2,
        fill: 'row',
      },
      spaceBetween: 20,
    },

    1920: {
      slidesPerView: 4,
      slidesPerGroup: 4,
      grid: {
        rows: 2,
        fill: 'row',
      },
      spaceBetween: 20,
    },
  },
});
