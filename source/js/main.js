import {iosVhFix} from './utils/ios-vh-fix';
// import {Form} from './modules/form-validate/form';
import './modules/scroll/scroll';
import './modules/youtube-video/youtube-video';
import './modules/tabs/index';
import './modules/swiper-coaches/swiper-coaches';
import './modules/accordion/index';
import './modules/swiper-reviews/swiper-reviews';
// ---------------------------------

window.addEventListener('DOMContentLoaded', () => {

  // Utils
  // ---------------------------------

  iosVhFix();

  // Modules
  // ---------------------------------

  // все скрипты должны быть в обработчике 'DOMContentLoaded', но не все в 'load'
  // в load следует добавить скрипты, не участвующие в работе первого экрана
  // window.addEventListener('load', () => {
  //   const form = new Form();
  //   window.form = form;
  //   form.init();
  // });
});
