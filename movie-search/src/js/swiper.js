import Swiper from 'swiper';

export const mySwiper = new Swiper('.swiper-container', { 
      direction: 'horizontal',
      loop: true,
      spaceBetween: 80,
      slidesPerView: 'auto',
      loopedSlides: 10,
      
      pagination: {
        el: '.swiper-pagination',
        clickable: true,
      },
  
      navigation: {
        nextEl: '#js-prev1',
        prevEl: '#js-next1',
      },
     
      scrollbar: {
        el: '.swiper-scrollbar',
 },});