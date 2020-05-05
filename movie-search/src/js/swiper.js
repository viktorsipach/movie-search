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
        dynamicBullets: true,
        dynamicMainBullets: 10,
      },
  
      navigation: {
        nextEl: '#js-prev1',
        prevEl: '#js-next1',
      },

      keyboard: {
        enabled: true,
        onlyInViewport: false,
      },
     
      scrollbar: {
        el: '.swiper-scrollbar',
 },});

 export const showSwiper = () => {
   const swiper = document.querySelector('.swiper-outer')
   swiper.classList.remove('hidden')
 } 

 export const hideSwiper = () => {
   const swiper = document.querySelector('.swiper-outer')
   swiper.classList.add('hidden')
 } 
 