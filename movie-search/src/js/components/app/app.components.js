import { showSwiper, hideSwiper } from '../swiper/swiper.components';
import { showSpinner, hideSpinner  } from '../spinner/spinner.components';
import { getMoviesData, getTranslation } from '../../data/api.data'
import { properties,  
    DEFAULT_NUMBER_SHOW_SLIDE, 
    DEFAULT_NUMBER_PAGE, 
    POSTER_DEFAULT_URL,
    DEFAULT_MOVIE
} from '../../constants/constants'

const createCard = ({ movie }, reiting) => {
    const { swiper } = document.querySelector('.swiper-container');
    const card = `<div class="swiper-slide card">
    <a class="card-header" href="https://www.imdb.com/title/${movie.imdbID}/videogallery" target="_blank">${movie.Title}</a>
    <div class="card-body" style="background-image: url('${movie.Poster}'), url('${POSTER_DEFAULT_URL}');"></div>
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


export const resetPropNextPage = () => {
    properties.nextPage = DEFAULT_NUMBER_PAGE;
}

export const infoForRus = (value) => {
    const info = document.querySelector('.info')
    info.innerText = `Showing results for '${value}'`
}

export const searchMovie = () => {
    const { swiper } = document.querySelector('.swiper-container')   
    const { value } = document.querySelector('.search-input')
    const info = document.querySelector('.info')
    const keyboard = document.querySelector('.keyboard')
    const isRusReg = /(^[А-я\s]+)(?!.[A-z])$/;

    if (!keyboard.classList.contains('hide-keyboard')) {
        hideKeyboard()
    }

    if (isRusReg.test(value)) {
        getTranslation(value).then(translate => getMoviesData(translate)).then(movie => createCards(movie));
        getTranslation(value).then(translate => infoForRus(translate));
        info.innerText = '';
        resetPropNextPage();
        showSpinner();
        hideSwiper();
        swiper.removeAllSlides()
    } else {
        getMoviesData(value).then(data => createCards(data))
        info.innerText = '';
        resetPropNextPage();
        showSpinner();
        hideSwiper();
        swiper.removeAllSlides()
    }
   
}

export const addClickSearchHandler = () => {
    const submit = document.querySelector('.search-btn')
    submit.addEventListener('click', (e) => {
        e.preventDefault();
        searchMovie();
    })
}

export const addClickClearHandler = () => {
    const input = document.querySelector('.search-input')
    const clear = document.querySelector('.search-clear')
    clear.addEventListener('click', () => {
        input.value = '';
    })
}

const addMoreMovies = (value) => {
    const isRusReg = /(^[А-я0-9\s]+)(?!.[A-z])$/;
    const { nextPage } = properties;
    properties.nextPage += 1;
    if (isRusReg.test(value)) {
        getTranslation(value).then(translate => getMoviesData(translate, nextPage)).then(movie => createCards(movie));
    } else {
        getMoviesData(value, nextPage).then(data => createCards(data))
    }
   
}

export const addMoreSlides = () => {
    const { swiper } = document.querySelector('.swiper-container')
    const input = document.querySelector('.search-input')
   
    swiper.on('slideChange', () => {
        const { value } = input;
        if ((swiper.activeIndex === (swiper.slides.length - DEFAULT_NUMBER_SHOW_SLIDE)) && (value !== '')) {
            showSpinner()
            addMoreMovies(value)
        } else if ((swiper.activeIndex === (swiper.slides.length - DEFAULT_NUMBER_SHOW_SLIDE)) && (value === '')) {
            showSpinner()
            addMoreMovies(DEFAULT_MOVIE)
        }  
    });  
};
