function initReviewsSwiper() {
  let reviewsSwiper = new Swiper('.swiper-reviews', {
    // Стрелки переключения слайдов
    navigation: {
      nextEl: '.reviews__button-next',
      prevEl: '.reviews__button-prev',
    },

    direction: 'horizontal',
    slidesPerView: 1,
    loop: false,
  });
  return reviewsSwiper;
}

export {initReviewsSwiper};
