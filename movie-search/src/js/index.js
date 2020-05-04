import '../css/reset.css';
import '../scss/style.scss';
import { mySwiper, showSwiper, hideSwiper } from './swiper';
import { showSpinner, hideSpinner  } from './spinner';
import { getMoviesData } from './api.data'
import { createCards, addClickSearchHandler } from './app'

window.onload = () => {
    addClickSearchHandler();
    getMoviesData('star').then(data => createCards(data));
}