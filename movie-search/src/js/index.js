import '../css/reset.css';
import '../scss/style.scss';
import { DEFAULT_MOVIE } from './constants';
import { showSpinner } from './spinner';
import { getMoviesData } from './api.data'
import { createCards, addClickSearchHandler, addClickClearHandler, addMoreSlides } from './app'


window.onload = () => {
    addClickSearchHandler();
    addClickClearHandler();
    addMoreSlides();
    getMoviesData(DEFAULT_MOVIE).then(data => createCards(data));
    showSpinner();
}