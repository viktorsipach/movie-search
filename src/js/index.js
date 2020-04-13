
import '../css/reset.css';
import '../scss/style.scss';

import cards from '../assets/cards.js'

const changeImageToMainPage = () => {
    const images = document.querySelectorAll('.card__img');
    images.forEach((el,idx) => {
        const img = cards[idx][idx].image
        el.style.backgroundImage = `url(./assets/${img})`
    })
}

changeImageToMainPage();
