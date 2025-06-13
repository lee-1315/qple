let swiper2 = new Swiper('.swiper2', {
  cssMode: true, //옵션
  slidesPerView: 4, //한 번에 보여질 슬라이드 개수
  spaceBetween: 20,
  rows: 2,
  slidesPerGroup: 8, //한 번에 슬라이드 될 슬라이드 갯수
  navigation: {
    //양쪽 화살표
    nextEl: '.swiper2-button-next',
    prevEl: '.swiper2-button-prev',
  },
  pagination: {
    //슬라이드 페이지 도트
    el: '.swiper-pagination',
    type: 'bullets',
  },
  /* autoplay: {
                delay: 2500, // 시간 설정
                disableOnInteraction: false, // false-스와이프 후 자동 재생
                loop: true,
              }, */
  mousewheel: true,
  keyboard: true,
});
