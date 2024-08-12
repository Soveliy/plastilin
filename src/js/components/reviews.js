import Swiper from 'swiper';
import { Navigation, Pagination } from 'swiper/modules';
Swiper.use([Navigation, Pagination]);
const swiper = new Swiper('.reviews__slider', {
  slidesPerView: 3,
});


