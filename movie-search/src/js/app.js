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
        /* eslint-disable no-param-reassign */
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

const hideKeyboard = () => {
    const keyboard = document.querySelector('.keyboard')
    keyboard.classList.toggle('hide-keyboard');
}

export const addClickKeyboardHandler = () => {
    const icon = document.querySelector('.search-tia')
    icon.addEventListener('click', hideKeyboard)
}


const resetProperties = () => {
    properties.nextPage = DEFAULT_NUMBER_PAGE;
    properties.prevLastSlide = DEFAULT_NUMBER_PREV_LAST_SLIDE;
}

export const searchMovie = (e) => {
    const { swiper } = document.querySelector('.swiper-container')   
    const { value } = document.querySelector('.search-input')
    const info = document.querySelector('.info')
    const keyboard = document.querySelector('.keyboard')

    if (!keyboard.classList.contains('hide-keyboard')) {
        hideKeyboard()
    }
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


const addMoreMovies = (movie) => {
    const { nextPage } = properties;
    getMoviesData(movie, nextPage).then(data => createCards(data))
    properties.nextPage += 1;
    properties.prevLastSlide += DEFAULT_NUMBER_SLIDES;
}

export const addMoreSlides = () => {
    const { swiper } = document.querySelector('.swiper-container')
    const input = document.querySelector('.search-input')
    swiper.on('slideChange', () => {
        const { value } = input;
        if (swiper.realIndex === properties.prevLastSlide && value !== '') {
            addMoreMovies(value)
        } else if (swiper.realIndex === properties.prevLastSlide && value === '') {
            addMoreMovies(DEFAULT_MOVIE)
        }
    });
    
}
