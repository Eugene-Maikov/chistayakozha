document.addEventListener("DOMContentLoaded", () => {
  const trichologyServicesSlider = new Swiper('.trichology-services__slider', {
    slidesPerView: 4,
    spaceBetween: 30,
    resizeObserver: true,
    allowTouchMove: false,

    navigation: {
      nextEl: ".trichology-services__buttons .slider-btn-next",
      prevEl: ".trichology-services__buttons .slider-btn-prev",
    },

    breakpoints: {
      320: {
        slidesPerView: '1.5',
        allowTouchMove: true,
        spaceBetween: 21,
      },
      680: {
        slidesPerView: '2.5',
        spaceBetween: 30,
        allowTouchMove: true,
      },
      990: {
        slidesPerView: '4',
        spaceBetween: 31,
        allowTouchMove: false,
      }
    }
  })
})