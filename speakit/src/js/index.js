import '../css/reset.css';
import '../scss/style.scss';
import {LINKS, CARDS_ON_PAGE, CHILDREN,  properties} from './constants';
import { getWords, getTranslation } from './api';
import {playAudio} from './audioPlayer';


const addStartPageHandler = () => {
    const startBtn = document.querySelector('.start-page__btn');
    const startPage = document.querySelector('.start-page');
    const main = document.querySelector('.main');
    startBtn.addEventListener('click', () => {
        startPage.classList.add('hidden')
        main.classList.remove('hidden')
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
    arrWords.sort(() => { return Math.random() - 0.5});
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

const removeActiveToggler = () => {
    const togglers = document.querySelectorAll('.toggle__item');
    togglers.forEach((el) => {
        el.classList.remove('active-toggle')
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
            properties.level = Number(level) - 1
            removeActiveToggler()
            removeCards()
            restart()
            getWords(properties.level, properties.level).then(json => getDataCards(json))
            e.target.classList.add('active-toggle')
        }
    })
}

const startSpeak = () => {
    const cards = document.querySelectorAll('.card')
    const btn = document.querySelector('.btn-speak')
    const resultSpeaking = document.querySelector('.result')
    if(window.webkitSpeechRecognition) {
        const recognition = new webkitSpeechRecognition();
        recognition.lang = 'en-EN';
        recognition.interimResults = true;
        recognition.continuous = true;
        recognition.maxAlternatives = 1;
        if (btn.classList.contains('btn-active')) {  
            recognition.start();
            recognition.onresult = (event) => {
            const result = event.results[event.results.length - 1][0].transcript;
            resultSpeaking.innerText = result
            cards.forEach((el) => {
                const word = el.id
                const image = el.children[CHILDREN.THIRD].innerText
                if (word === resultSpeaking.innerText) {
                    const card = document.getElementById(`${word}`)
                    card.classList.add('active-card')
                    showImage(image)
                }
            })
            }
        }
    }
};

const addStartSpeakBtnHandler = () => {
    const container = document.querySelector('.wrapper__cards')
    const btn = document.querySelector('.btn-speak');
    const resultSpeaking = document.querySelector('.result')
    const translate = document.querySelector('.translate')
    btn.addEventListener('click', () => {
    if (!btn.classList.contains('btn-active')) {
        btn.classList.add('btn-active')
        resultSpeaking.classList.remove('hidden')
        resultSpeaking.innerText = ''
        btn.innerText = 'Stop'
        translate.innerText = ''
        container.removeEventListener('click', listenerCard)
        startSpeak()
        showImage(LINKS.LINK__URL_DEFAULT) 
    } else {
        btn.classList.remove('btn-active')
        resultSpeaking.classList.add('hidden')
        btn.innerText = 'Please speak'
        const recognition = new webkitSpeechRecognition();
        recognition.start()
        recognition.stop()
    }
    })  
}

const restart = () => {
    const translate = document.querySelector('.translate')
    const btnSpeak = document.querySelector('.btn-speak');
    const resultSpeaking = document.querySelector('.result')
    showImage(LINKS.LINK__URL_DEFAULT)
    removeActiveClassOfCard()
    addClickCardHandler()
    btnSpeak.classList.remove('btn-active')
    resultSpeaking.classList.add('hidden')
    btnSpeak.innerText = 'Please speak'
    translate.innerText = ''
    const recognition = new webkitSpeechRecognition();
    recognition.start()
    recognition.stop()
}

const addClickRestartBtnHandler = () => {
    const btnRestart = document.querySelector('.btn-restart');
    btnRestart.addEventListener('click', restart)
}

window.onload = () => {
    getWords(properties.level, properties.level).then(json => getDataCards(json))
    addStartPageHandler()
    addClickCardHandler()
    addStartSpeakBtnHandler()
    addClickRestartBtnHandler()
    changeLevel()
   
};
