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

const repairswiper = new Swiper('.repair--swiper', {
    pagination: {
      el: '.swiper-pagination',
      clickable: true
    },
  
    slidesPerView: 'auto',
  
    spaceBetween: 16
  })
  
  const priceswiper = new Swiper('.price--swiper', {
    pagination: {
      el: '.swiper-pagination',
      clickable: true
    },
  
    slidesPerView: 'auto',
  
    spaceBetween: 16
  })








const textHidable = document.querySelector('.about__text--hidable');
const readMore = document.querySelectorAll('.read-more');
const readMoreText = document.querySelectorAll('read-more__text'); 

const desctop = document.querySelector('.desctop__content');
const desctopRepair = document.querySelector('.desctop__content--repair');

readMore[0].addEventListener('click', function () {
    if (textHidable.classList.contains('about__text--hidable')) {
      textHidable.classList.remove('about__text--hidable')
      readMore[0].getElementsByClassName('read-more__text')[0].innerHTML = 'Скрыть'
    } else {
      textHidable.classList.add('about__text--hidable')
      readMore[0].getElementsByClassName('read-more__text')[0].innerHTML = 'Читать все';
    }
  })
  
  
  
  readMore[1].addEventListener('click',function(){
    desctop.classList.toggle('desctop__content--click');
   
    if(desctop.classList.contains('desctop__content--click')){
      readMore[1].getElementsByClassName('read-more__text')[0].innerHTML = 'Скрыть все';
    } else{
      readMore[1].getElementsByClassName('read-more__text')[0].innerHTML = 'Показать все';
    }
  
  })

  readMore[2].addEventListener('click',function(){
    desctopRepair.classList.toggle('desctop__content--click');
   
    if(desctopRepair.classList.contains('desctop__content--click')){
      readMore[2].getElementsByClassName('read-more__text')[0].innerHTML = 'Скрыть все';
    } else{
      readMore[2].getElementsByClassName('read-more__text')[0].innerHTML = 'Показать все';
    }
  })