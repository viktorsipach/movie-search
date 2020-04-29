import '../css/reset.css';
import '../scss/style.scss';
import mySwiper from './swiper';
import { getMoviesData } from './api'


const addCard = (Title, Poster, Year, imdbID, reiting) => {
    const { swiper } = document.querySelector('.swiper-container')
    const card = `<div class="swiper-slide card">
    <a class="card-header" href="https://www.imdb.com/title/${imdbID}/videogallery" target="_blank">${Title}</a>
    <div class="card-body" style="background-image: url('${Poster}');"></div>
    <div class="card-footer">${Year}</div>
    <div class="card-imbd"><span>${reiting}</span></div>
    </div>`
    swiper.appendSlide(card)
    swiper.updateSlides()
};

const addCards = (data) => {
    const { swiper } = document.querySelector('.swiper-container')
    swiper.removeAllSlides()
    swiper.updateSlides()

    const arrMovies = data.Search;
    arrMovies.forEach((item) => {
        const { Title } = item;
        const { Poster } = item;
        const { Year } = item;
        const { imdbID } = item;

        let reiting  = null;
        if (item.reiting === undefined) {
            reiting = '';
        } else {
           reiting = item.reiting;
        }
        addCard(Title, Poster, Year, imdbID, reiting)
    })

}




window.onload = () => {
    getMoviesData('dream').then(data => addCards(data))
}