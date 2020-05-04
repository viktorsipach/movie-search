import { mySwiper, showSwiper, hideSwiper } from './swiper';
import { showSpinner, hideSpinner  } from './spinner';
import { getMoviesData } from './api.data'

export const createCard = ({ movie }, reiting) => {
    const { swiper } = document.querySelector('.swiper-container')
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
        const { swiper } = document.querySelector('.swiper-container')
        swiper.removeAllSlides()
    
        const arrMovies = data.Search;
        arrMovies.forEach((movie) => {
            let reiting  = null;
    
            if (movie.reiting === undefined) {
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
    e.preventDefault();
    const { value } = document.querySelector('.search-input')
    getMoviesData(value).then(data => createCards(data))
}

export const addClickSearchHandler = () => {
    const submit = document.querySelector('.search-btn')
    submit.addEventListener('click', searchMovie)
}