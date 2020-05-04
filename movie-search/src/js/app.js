import { mySwiper, showSwiper, hideSwiper } from './swiper';
import { showSpinner, hideSpinner  } from './spinner';
import { getMoviesData } from './api.data'
import { POSTER_DEFAULT_URL } from './constants'

export const createCard = ({ movie }, reiting) => {
    const { swiper } = document.querySelector('.swiper-container')
    if (movie.Poster === 'N/A') {
        movie.Poster = POSTER_DEFAULT_URL;
    }
    const card = `<div class="swiper-slide card">
    <a class="card-header" href="https://www.imdb.com/title/${movie.imdbID}/videogallery" target="_blank">${movie.Title}</a>
    <div class="card-body" style="background-image: url('${movie.Poster}');"></div>
    <div class="card-footer">${movie.Year}</div>
    <div class="card-imbd"><span>${reiting}</span></div>
    </div>`
    swiper.appendSlide(card)
};

export const createCards = (data) => {
    if (data) {
        const arrMovies = data.Search;
        arrMovies.forEach((movie) => {
            let reiting  = null;
    
            if (movie.reiting === undefined || movie.reiting === 'N/A') {
                reiting = '';
            } else {
                reiting = movie.reiting;
            }
            createCard({ movie }, reiting)
            showSwiper()
            hideSpinner()
        })
    }
}

export const searchMovie = (e) => {
    const { swiper } = document.querySelector('.swiper-container')   
    const { value } = document.querySelector('.search-input')
    const info = document.querySelector('.info')

    info.innerText = '';
    e.preventDefault();
    showSpinner();
    hideSwiper();
    swiper.removeAllSlides()
    getMoviesData(value).then(data => createCards(data))
}

export const addClickSearchHandler = () => {
    const submit = document.querySelector('.search-btn')
    submit.addEventListener('click', searchMovie)
}

export const addClickClearHandler = () => {
    const input = document.querySelector('.search-input')
    const clear = document.querySelector('.search-clear')
    clear.addEventListener('click', () => {
        input.value = '';
    })
}