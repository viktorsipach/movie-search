import '../css/reset.css';
import '../scss/style.scss';
import {LINKS, CARDS_ON_PAGE, CHILDREN,  properties} from './constants';
import { getWords, getTranslation } from './api';
import {playAudio} from './audioPlayer';


const addStartPageHandler = () => {
    const startBtn = document.querySelector('.start-page__btn');
    const startPage = document.querySelector('.start-page');
    startBtn.addEventListener('click', () => {
        startPage.classList.add('hidden')
    })
};

const addCard = (word, transcription, img, audio) => {
    const wrapper = document.querySelector('.wrapper__cards')
    const card = document.createElement('div')
    card.classList = 'card'
    card.id = word
    card.innerHTML = ` <img src="./assets/img/icon-audio.png" class="icon" alt="icon">
    <div class='card__audio'>${LINKS.LINK__AUDIO}${audio}</div>
    <div class= 'card__img'>${LINKS.LINK__IMG}${img}</div>
    <div class="wrapper-text ">
        <p class="card__word ">${word}</p>
        <p class="card__transcription">${transcription}</p>
    </div>`
    wrapper.append(card)
};

const removeCards = () => {
    const cards = document.querySelectorAll('.card');
    cards.forEach((el) => {
        el.remove()
    })
};

const getDataCards = (json) => {
    const arrWords = json;
    for (let index = CARDS_ON_PAGE; index < arrWords.length; index++) {
        const el = arrWords[index];
        const { word } = el
        const { transcription } = el
        const { image } = el
        const { audio } = el
        addCard(word,transcription,image,audio)
    }
};

const showTranslate = (transWord) => {
    const translate = document.querySelector('.translate')
    translate.innerText = transWord
};

const showImage = (urlImage) => {
    const image = document.querySelector('.image__container')
    image.style.backgroundImage = `url(${urlImage})`
};

const removeActiveClassOfCard = () => {
    const cards = document.querySelectorAll('.card');
    cards.forEach((el) => {
        el.classList.remove('active-card')
    })
}

const listenerCard = (e) => {
    if (e.target.classList.contains('card')) {
        const word = e.target.id
        const audio = e.target.children[CHILDREN.SECOND].innerText
        const image = e.target.children[CHILDREN.THIRD].innerText
        getTranslation(word).then(translate => showTranslate(translate));
        playAudio(audio)
        showImage(image)
        removeActiveClassOfCard()
        e.target.classList.add('active-card')
    } else if (e.target.classList.contains('wrapper-text') || e.target.classList.contains('icon')) {
        const parent = e.path[CHILDREN.SECOND]
        const word = parent.id
        const audio = parent.children[CHILDREN.SECOND].innerText
        const image = parent.children[CHILDREN.THIRD].innerText
        getTranslation(word).then(translate => showTranslate(translate));
        playAudio(audio)
        showImage(image)
        removeActiveClassOfCard()
        parent.classList.add('active-card')
    } else if (e.target.classList.contains('card__word') || e.target.classList.contains('card__transcription')) {
        const parent = e.path[CHILDREN.THIRD]
        const word = parent.id
        const audio = parent.children[CHILDREN.SECOND].innerText
        const image = parent.children[CHILDREN.THIRD].innerText
        getTranslation(word).then(translate => showTranslate(translate));
        playAudio(audio)
        showImage(image)
        removeActiveClassOfCard()
        parent.classList.add('active-card')
    }
};

const addClickCardHandler = () => {
    const container = document.querySelector('.wrapper__cards')
    container.addEventListener('click', listenerCard)
}

const changeLevel = () => {
    const toggler = document.querySelector('.wrapper__toggle')
    toggler.addEventListener('click', (e) => {
        if (e.target.classList.contains('toggle__item')) {
            const level = e.target.innerText
            console.log(level)
            properties.level = Number(level) - 1
            removeCards()
            showTranslate('')
            showImage(LINKS.LINK__URL_DEFAULT)
            getWords(properties.level, properties.level).then(json => getDataCards(json))
        }
    })
}

window.onload = () => {
    getWords(properties.level, properties.level).then(json => getDataCards(json))
    addStartPageHandler()
    addClickCardHandler()
    changeLevel()
};
