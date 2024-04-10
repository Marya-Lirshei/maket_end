import '../scss/style.scss'
import Swiper, { Navigation, Pagination } from 'swiper'
import { doc } from 'prettier'
Swiper.use([Navigation, Pagination])


const brandswiper = new Swiper('.swiper', {
  pagination: {
    el: '.swiper-pagination'
  },

  slidesPerView: 'auto',

  spaceBetween: 16,
  loop: true,
  direction: 'horizontal'
})