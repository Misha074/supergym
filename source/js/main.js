import {iosVhFix} from './utils/ios-vh-fix';
import './modules/scroll/scroll';
import './modules/youtube-video/youtube-video';
import {initTabs} from './modules/tabs/init-tabs';
import {initCoachesSwiper} from './modules/swiper-coaches/swiper-coaches';
import {initAccordions} from './modules/accordion/init-accordion';
import {initReviewsSwiper} from './modules/swiper-reviews/swiper-reviews';
// ---------------------------------

window.addEventListener('DOMContentLoaded', () => {

  // Utils
  // ---------------------------------

  iosVhFix();

  // Modules
  // ---------------------------------

  // все скрипты должны быть в обработчике 'DOMContentLoaded', но не все в 'load'
  // в load следует добавить скрипты, не участвующие в работе первого экрана
  window.addEventListener('load', () => {
    initTabs();
    initCoachesSwiper();
    initAccordions();
    initReviewsSwiper();
  });
});
