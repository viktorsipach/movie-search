import { showSwiper, hideSwiper } from './swiper';
import { showSpinner, hideSpinner  } from './spinner';
import { getMoviesData } from './api.data'
import { properties,  
    DEFAULT_NUMBER_SLIDES, 
    DEFAULT_NUMBER_PREV_LAST_SLIDE, 
    DEFAULT_NUMBER_PAGE, 
    POSTER_DEFAULT_URL,
    DEFAULT_MOVIE
} from './constants'

const createCard = ({ movie }, reiting) => {
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
        arrMovies.forEach((item) => {
            const movie = item;
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

const resetProperties = () => {
    properties.nextPage = DEFAULT_NUMBER_PAGE;
    properties.prevLastSlide = DEFAULT_NUMBER_PREV_LAST_SLIDE;
}

export const searchMovie = (e) => {
    const { swiper } = document.querySelector('.swiper-container')   
    const { value } = document.querySelector('.search-input')
    const info = document.querySelector('.info')

    info.innerText = '';
    e.preventDefault();
    resetProperties();
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

export const addMoreSlides = () => {
    const { swiper } = document.querySelector('.swiper-container')
    const input = document.querySelector('.search-input')
    swiper.on('slideChange', () => {
        const { value } = input;
        if (swiper.realIndex === properties.prevLastSlide && value !== '') {
            const { nextPage } = properties;
            getMoviesData(value,nextPage).then(data => createCards(data))
            properties.nextPage += 1;
            properties.prevLastSlide += DEFAULT_NUMBER_SLIDES;
        } else if (swiper.realIndex === properties.prevLastSlide && value === '') {
            const { nextPage } = properties;
            getMoviesData(DEFAULT_MOVIE, nextPage).then(data => createCards(data))
            properties.nextPage += 1;
            properties.prevLastSlide += DEFAULT_NUMBER_SLIDES;
        }
    });
    
}
