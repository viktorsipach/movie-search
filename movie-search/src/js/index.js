import '../css/reset.css';
import '../scss/style.scss';
import { mySwiper, showSwiper, hideSwiper } from './swiper';
import { mySpinner, showSpinner, hideSpinner  } from './spinner';
import { getMoviesData } from './api.data'
import { createCards, addClickSearchHandler, addClickClearHandler } from './app'

window.onload = () => {
    addClickSearchHandler();
    addClickClearHandler();
    getMoviesData('dream').then(data => createCards(data));
    showSpinner();
}