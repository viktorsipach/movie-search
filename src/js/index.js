import '../css/reset.css';
import '../scss/style.scss';

import cardsData from '../assets/cards'

const bgTrain = 'linear-gradient(0deg, rgba(9,210,90,1) 0%, rgba(9,233,236,1) 84%)'
const bgPlay = 'linear-gradient(0deg, rgba(245, 175, 25, 1) 0%,  rgba(241, 49, 17, 1) 50%)'
const audioCorrect = 'https://raw.githubusercontent.com/rolling-scopes-school/tasks/master/tasks/rslang/english-for.kids.data/audio/correct.mp3'
const audioError = 'https://raw.githubusercontent.com/rolling-scopes-school/tasks/master/tasks/rslang/english-for.kids.data/audio/error.mp3'

const audioSuccess = 'https://raw.githubusercontent.com/rolling-scopes-school/tasks/master/tasks/rslang/english-for.kids.data/audio/success.mp3'
const audioFailure = 'https://raw.githubusercontent.com/rolling-scopes-school/tasks/master/tasks/rslang/english-for.kids.data/audio/failure.mp3'

const arrWords = [];

let modeTrain = true;
let modePlay = false;
let hiddenWord = null;
let error = 0;

const addDomElements = () => {

    const container = document.createElement('div');
    container.classList = 'cards__container';
    container.innerHTML = `<div class="stars"><img src="../assets/img/star.svg" class="star hidden-star"></div>
            <div class="card" id="0">
                <div class="card__img"></div>
                <p class="card__word"></p>
                <p class="card__translate"></p>
                <svg class="card__rotate hidden" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="40" height="40" viewBox="0, 0, 400,400"><g id="svgg"><path id="path0" d="M149.333 106.849 C -33.313 127.384,-41.223 252.474,138.667 275.531 C 146.978 276.596,157.155 277.883,161.284 278.391 L 168.790 279.314 169.284 303.117 L 169.778 326.920 214.222 292.359 C 238.667 273.351,258.667 256.989,258.667 256.000 C 258.667 255.011,238.667 238.649,214.222 219.641 L 169.778 185.080 169.280 208.294 L 168.783 231.508 158.614 230.340 C 114.170 225.237,73.024 211.579,59.659 197.495 L 54.430 191.983 60.245 185.983 C 103.148 141.719,300.841 141.956,339.792 186.318 L 345.150 192.421 340.131 197.714 C 334.182 203.985,316.718 213.058,300.000 218.562 L 288.000 222.512 288.000 246.565 L 288.000 270.618 294.624 269.375 C 380.118 253.336,418.057 192.558,369.823 148.909 C 332.872 115.470,236.377 97.063,149.333 106.849 " stroke="none" fill="#d1c7d7" fill-rule="evenodd"></path></g></svg>
            </div>
            <div class="card" id="1">
                <div class="card__img"></div>
                <p class="card__word"></p>
                <p class="card__translate"></p>
                <svg class="card__rotate hidden" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="40" height="40" viewBox="0, 0, 400,400"><g id="svgg"><path id="path0" d="M149.333 106.849 C -33.313 127.384,-41.223 252.474,138.667 275.531 C 146.978 276.596,157.155 277.883,161.284 278.391 L 168.790 279.314 169.284 303.117 L 169.778 326.920 214.222 292.359 C 238.667 273.351,258.667 256.989,258.667 256.000 C 258.667 255.011,238.667 238.649,214.222 219.641 L 169.778 185.080 169.280 208.294 L 168.783 231.508 158.614 230.340 C 114.170 225.237,73.024 211.579,59.659 197.495 L 54.430 191.983 60.245 185.983 C 103.148 141.719,300.841 141.956,339.792 186.318 L 345.150 192.421 340.131 197.714 C 334.182 203.985,316.718 213.058,300.000 218.562 L 288.000 222.512 288.000 246.565 L 288.000 270.618 294.624 269.375 C 380.118 253.336,418.057 192.558,369.823 148.909 C 332.872 115.470,236.377 97.063,149.333 106.849 " stroke="none" fill="#d1c7d7" fill-rule="evenodd"></path></g></svg>
            </div>
            <div class="card" id="2">
                <div class="card__img"></div>
                <p class="card__word"></p>
                <p class="card__translate"></p>
                <svg class="card__rotate hidden" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="40" height="40" viewBox="0, 0, 400,400"><g id="svgg"><path id="path0" d="M149.333 106.849 C -33.313 127.384,-41.223 252.474,138.667 275.531 C 146.978 276.596,157.155 277.883,161.284 278.391 L 168.790 279.314 169.284 303.117 L 169.778 326.920 214.222 292.359 C 238.667 273.351,258.667 256.989,258.667 256.000 C 258.667 255.011,238.667 238.649,214.222 219.641 L 169.778 185.080 169.280 208.294 L 168.783 231.508 158.614 230.340 C 114.170 225.237,73.024 211.579,59.659 197.495 L 54.430 191.983 60.245 185.983 C 103.148 141.719,300.841 141.956,339.792 186.318 L 345.150 192.421 340.131 197.714 C 334.182 203.985,316.718 213.058,300.000 218.562 L 288.000 222.512 288.000 246.565 L 288.000 270.618 294.624 269.375 C 380.118 253.336,418.057 192.558,369.823 148.909 C 332.872 115.470,236.377 97.063,149.333 106.849 " stroke="none" fill="#d1c7d7" fill-rule="evenodd"></path></g></svg>
            </div>
            <div class="card" id="3">
                <div class="card__img"></div>
                <p class="card__word"></p>
                <p class="card__translate"></p>
                <svg class="card__rotate hidden" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="40" height="40" viewBox="0, 0, 400,400"><g id="svgg"><path id="path0" d="M149.333 106.849 C -33.313 127.384,-41.223 252.474,138.667 275.531 C 146.978 276.596,157.155 277.883,161.284 278.391 L 168.790 279.314 169.284 303.117 L 169.778 326.920 214.222 292.359 C 238.667 273.351,258.667 256.989,258.667 256.000 C 258.667 255.011,238.667 238.649,214.222 219.641 L 169.778 185.080 169.280 208.294 L 168.783 231.508 158.614 230.340 C 114.170 225.237,73.024 211.579,59.659 197.495 L 54.430 191.983 60.245 185.983 C 103.148 141.719,300.841 141.956,339.792 186.318 L 345.150 192.421 340.131 197.714 C 334.182 203.985,316.718 213.058,300.000 218.562 L 288.000 222.512 288.000 246.565 L 288.000 270.618 294.624 269.375 C 380.118 253.336,418.057 192.558,369.823 148.909 C 332.872 115.470,236.377 97.063,149.333 106.849 " stroke="none" fill="#d1c7d7" fill-rule="evenodd"></path></g></svg>
            </div>
            <div class="card" id="4">
                <div class="card__img"></div>
                <p class="card__word"></p>
                <p class="card__translate"></p>
                <svg class="card__rotate hidden" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="40" height="40" viewBox="0, 0, 400,400"><g id="svgg"><path id="path0" d="M149.333 106.849 C -33.313 127.384,-41.223 252.474,138.667 275.531 C 146.978 276.596,157.155 277.883,161.284 278.391 L 168.790 279.314 169.284 303.117 L 169.778 326.920 214.222 292.359 C 238.667 273.351,258.667 256.989,258.667 256.000 C 258.667 255.011,238.667 238.649,214.222 219.641 L 169.778 185.080 169.280 208.294 L 168.783 231.508 158.614 230.340 C 114.170 225.237,73.024 211.579,59.659 197.495 L 54.430 191.983 60.245 185.983 C 103.148 141.719,300.841 141.956,339.792 186.318 L 345.150 192.421 340.131 197.714 C 334.182 203.985,316.718 213.058,300.000 218.562 L 288.000 222.512 288.000 246.565 L 288.000 270.618 294.624 269.375 C 380.118 253.336,418.057 192.558,369.823 148.909 C 332.872 115.470,236.377 97.063,149.333 106.849 " stroke="none" fill="#d1c7d7" fill-rule="evenodd"></path></g></svg>
            </div>
            <div class="card" id="5">
                <div class="card__img"></div>
                <p class="card__word"></p>
                <p class="card__translate"></p>
                <svg class="card__rotate hidden" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="40" height="40" viewBox="0, 0, 400,400"><g id="svgg"><path id="path0" d="M149.333 106.849 C -33.313 127.384,-41.223 252.474,138.667 275.531 C 146.978 276.596,157.155 277.883,161.284 278.391 L 168.790 279.314 169.284 303.117 L 169.778 326.920 214.222 292.359 C 238.667 273.351,258.667 256.989,258.667 256.000 C 258.667 255.011,238.667 238.649,214.222 219.641 L 169.778 185.080 169.280 208.294 L 168.783 231.508 158.614 230.340 C 114.170 225.237,73.024 211.579,59.659 197.495 L 54.430 191.983 60.245 185.983 C 103.148 141.719,300.841 141.956,339.792 186.318 L 345.150 192.421 340.131 197.714 C 334.182 203.985,316.718 213.058,300.000 218.562 L 288.000 222.512 288.000 246.565 L 288.000 270.618 294.624 269.375 C 380.118 253.336,418.057 192.558,369.823 148.909 C 332.872 115.470,236.377 97.063,149.333 106.849 " stroke="none" fill="#d1c7d7" fill-rule="evenodd"></path></g></svg>
            </div>
            <div class="card" id="6">
                <div class="card__img"></div>
                <p class="card__word"></p>
                <p class="card__translate"></p>
                <svg class="card__rotate hidden" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="40" height="40" viewBox="0, 0, 400,400"><g id="svgg"><path id="path0" d="M149.333 106.849 C -33.313 127.384,-41.223 252.474,138.667 275.531 C 146.978 276.596,157.155 277.883,161.284 278.391 L 168.790 279.314 169.284 303.117 L 169.778 326.920 214.222 292.359 C 238.667 273.351,258.667 256.989,258.667 256.000 C 258.667 255.011,238.667 238.649,214.222 219.641 L 169.778 185.080 169.280 208.294 L 168.783 231.508 158.614 230.340 C 114.170 225.237,73.024 211.579,59.659 197.495 L 54.430 191.983 60.245 185.983 C 103.148 141.719,300.841 141.956,339.792 186.318 L 345.150 192.421 340.131 197.714 C 334.182 203.985,316.718 213.058,300.000 218.562 L 288.000 222.512 288.000 246.565 L 288.000 270.618 294.624 269.375 C 380.118 253.336,418.057 192.558,369.823 148.909 C 332.872 115.470,236.377 97.063,149.333 106.849 " stroke="none" fill="#d1c7d7" fill-rule="evenodd"></path></g></svg>
            </div>
            <div class="card" id="7">
                <div class="card__img"></div>
                <p class="card__word"></p>
                <p class="card__translate"></p>
                <svg class="card__rotate hidden" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="40" height="40" viewBox="0, 0, 400,400"><g id="svgg"><path id="path0" d="M149.333 106.849 C -33.313 127.384,-41.223 252.474,138.667 275.531 C 146.978 276.596,157.155 277.883,161.284 278.391 L 168.790 279.314 169.284 303.117 L 169.778 326.920 214.222 292.359 C 238.667 273.351,258.667 256.989,258.667 256.000 C 258.667 255.011,238.667 238.649,214.222 219.641 L 169.778 185.080 169.280 208.294 L 168.783 231.508 158.614 230.340 C 114.170 225.237,73.024 211.579,59.659 197.495 L 54.430 191.983 60.245 185.983 C 103.148 141.719,300.841 141.956,339.792 186.318 L 345.150 192.421 340.131 197.714 C 334.182 203.985,316.718 213.058,300.000 218.562 L 288.000 222.512 288.000 246.565 L 288.000 270.618 294.624 269.375 C 380.118 253.336,418.057 192.558,369.823 148.909 C 332.872 115.470,236.377 97.063,149.333 106.849 " stroke="none" fill="#d1c7d7" fill-rule="evenodd"></path></g></svg>
            </div>
        </div>`
    document.querySelector('.wrapper').append(container);
}

const addMainPage = () => {
    const cards = document.querySelectorAll('.card');
    const images = document.querySelectorAll('.card__img');
    const words = document.querySelectorAll('.card__word');

    cards.forEach((el) => {
        const card = el
        if (modeTrain) {
            card.style.background = `${bgTrain}`
        } else {
            card.style.background = `${bgPlay}`
        }
    })
    images.forEach((el, idx) => {
        const img = cardsData[idx][idx].image
        const element = el
        element.style.backgroundImage = `url(./assets/${img})`
    })
    words.forEach((el, idx) => {
        const text = cardsData[cardsData.length - 1][idx]
        const element = el
        element.innerHTML = `${text}`
    })
}

const addClickToggleHandler = () => {
    const links = document.querySelectorAll('.menu__item')
    const toggle = document.querySelector('.toggle')
    const switcher = document.getElementById('switch')
    const text = document.querySelector('.toggle__text')
    const menu = document.querySelector('.menu')

    let curId = null;

    toggle.addEventListener('click', () => {
        const container = document.querySelector('.cards__container')
        links.forEach((el) => {
            if (el.classList.contains('active')) {
                curId = el.title
            }
        })

        if (!switcher.checked) {
            switcher.checked = true
            modePlay = true
            modeTrain = false
            text.classList.add('text__right')
            text.innerHTML = 'Play'
            menu.style.background = `${bgPlay}`
            if (curId === 'main') {
                container.remove()
                addDomElements()
                addMainPage()
                addClickCardHandler()
            } else {
                container.remove()
                addDomElements()
                addPlayPage(curId)
                addClickStartGameHandler()
            }
        } else {
            switcher.checked = false
            modePlay = false
            modeTrain = true
            text.classList.remove('text__right')
            text.innerHTML = 'Train'
            menu.style.background = `${bgTrain}`
            if (curId === 'main') {
                container.remove()
                addDomElements()
                addMainPage()
                addClickCardHandler()
            } else {
                container.remove()
                addDomElements()
                addTrainPage(curId)
                addClickTrainHandler()
                addClickRotateHandler()
            }
        }
    })
}

const addTrainPage = (id) => {
    const cardsRotate = document.querySelectorAll('.card__rotate');
    const images = document.querySelectorAll('.card__img');
    const words = document.querySelectorAll('.card__word');
    const translations = document.querySelectorAll('.card__translate');
    images.forEach((el, idx) => {
        const img = cardsData[id][idx].image
        const element = el
        element.style.backgroundImage = `url(./assets/${img})`
        element.classList.add('card__img_train')
    })
    words.forEach((el, idx) => {
        const { word } = cardsData[id][idx]
        const element = el
        element.innerHTML = `${word}`
        element.classList.add('card__word_train')
    })
    translations.forEach((el, idx) => {
        const { translation } = cardsData[id][idx]
        const element = el
        element.innerHTML = `${translation}`
        element.classList.add('hidden')
    })
    cardsRotate.forEach((el) => {
        const element = el
        element.classList.remove('hidden')
    })
}

const addPlayPage = (id) => {
    const container = document.querySelector('.cards__container');
    const cards = document.querySelectorAll('.card');
    const images = document.querySelectorAll('.card__img');
    const words = document.querySelectorAll('.card__word');
    const translations = document.querySelectorAll('.card__translate');
    const btnWrapper = document.createElement('div');
    btnWrapper.classList = 'wrapper__btn'
    btnWrapper.innerHTML = `<button class='btn__start'>Start game</button>`
    container.append(btnWrapper);

    images.forEach((el, idx) => {
        const img = cardsData[id][idx].image;
        const element = el;
        element.style.backgroundImage = `url(./assets/${ img })`;
        element.classList.add('card__img_play');
    })
    words.forEach((el, idx) => {
        const { word } = cardsData[id][idx];
        const element = el;
        element.innerHTML = `${ word }`;
        element.classList.add('hidden');
    })
    translations.forEach((el) => {
        const element = el
        element.style.margin = '0'
    })
    cards.forEach((el) => {
        const element = el
        element.style.height = '240px'
        element.style.background = 'none'
    })
}

const playWord = (word) => {
    const audio = new Audio(`https://wooordhunt.ru/data/sound/word/us/mp3/${word}.mp3`);
    audio.play()
}

const playAudio = (audioLink) => {
    const audio = new Audio(audioLink);
    audio.play()
}

const addClickTrainHandler = () => {
    const cards = document.querySelector('.cards__container')
    cards.addEventListener('click', (e) => {
        if (e.target.classList.contains('card__img')) {
            const word = e.target.nextElementSibling.innerText
            playWord(word)
        }
    })
}

const getWordsForGame = () => {
    const wordsNodeList = document.querySelectorAll('.card__word');
    arrWords.length = 0;
    wordsNodeList.forEach((el => {
        const word = el.innerText
        arrWords.push(word)
    }))
    arrWords.sort(() => { return Math.random() - 0.5 })
}

const finishGame = () => {
    if (error === 0) {
        const showEmoji = 2000;
        const container = document.querySelector('.cards__container')
        const emoji = document.createElement('div');
        emoji.classList = 'emoji'
        emoji.innerHTML = `<p class='emoji__text'>You Win!</p><p>&#129321</p>`
        container.remove()
        document.querySelector('.wrapper').append(emoji)
        playAudio(audioSuccess)
        setTimeout(() => {
            error = 0;
            container.remove()
            emoji.remove()
            addDomElements()
            addMainPage()
            addClickToggleHandler()
            addClickCardHandler()
            addClickMenuHandler()
            menuHidden()
        }, showEmoji);
    } else {
        const showEmoji = 2000;
        const container = document.querySelector('.cards__container')
        const emoji = document.createElement('div');
        emoji.classList = 'emoji'
        emoji.innerHTML = `<p class='emoji__text'>Error ${error}!</p><p>&#128532</p>`
        container.remove()
        document.querySelector('.wrapper').append(emoji)
        playAudio(audioFailure)
        setTimeout(() => {
            error = 0;
            container.remove();
            emoji.remove();
            addDomElements();
            addMainPage();
            addClickToggleHandler();
            addClickCardHandler();
            addClickMenuHandler();
            menuHidden();
        }, showEmoji);
    }
}

const getWord = () => {
    if (arrWords.length > 0) {
        hiddenWord = arrWords.pop()
        playWord(hiddenWord)
    } else {
        finishGame()
    }
}

const gameHandler = (clickedWord) => {
    const stars = document.querySelectorAll('.star')
    const FIRST_ELEMENT = 0;
   
    if (clickedWord === hiddenWord) {
        playAudio(audioCorrect);
        const stopAudio = 1000;
        setTimeout(getWord, stopAudio)
        const star = document.createElement('img');
        star.src = './assets/img/star-win.svg';
        star.classList = 'star';
        stars[FIRST_ELEMENT].before(star)
       
    } else {
        error += 1
        playAudio(audioError);
        const star = document.createElement('img');
        star.src = './assets/img/star.svg';
        star.classList = 'star';
        stars[FIRST_ELEMENT].before(star)
    }
}

const addClickPlayHandler = () => {
    const cards = document.querySelector('.cards__container')
    cards.addEventListener('click', (e) => {
        if (e.target.classList.contains('card__img') && !e.target.classList.contains('not-active')) {
            const clickedWord = e.target.nextElementSibling.innerText
            if (clickedWord === hiddenWord) {
                e.target.classList.add('not-active')
            }
            gameHandler(clickedWord)
        }
    })
}

const addClickStartGameHandler = () => {
    const btn = document.querySelector('.btn__start')
    btn.addEventListener('click', (e) => {
        const textBtn = e.target.innerHTML
        if (textBtn === 'Start game') {
            const img = document.createElement('img')
            img.classList = 'repeat'
            img.src = './assets/img/repeat.svg'
            btn.innerHTML = ''
            btn.append(img)
            btn.classList.add('active__btn')
            getWordsForGame()
            addClickPlayHandler()
            getWord()
        } else {
            playWord(hiddenWord)
        }

    })
}

const rotateCard = (card) => {
    const curCard = card
    const cardRotateDuration = 400
    const word = curCard.children[1]
    const translation = curCard.children[2]
    curCard.removeAttribute('style')
    curCard.classList.add('rotate')
    setTimeout(() => {
        translation.classList.remove('hidden')
        word.classList.add('hidden')
        curCard.style.transform = 'rotateY(0deg)'
        curCard.classList.remove('rotate')
    }, cardRotateDuration);

    curCard.addEventListener('mouseleave', () => {
        curCard.removeAttribute('style')
        curCard.classList.add('rotate')
        setTimeout(() => {
            translation.classList.add('hidden')
            word.classList.remove('hidden')
            curCard.style.transform = 'rotateY(0deg)'
            curCard.classList.remove('rotate')
        }, cardRotateDuration);
    }, { once: true })
}

const addClickRotateHandler = () => {
    const cardsContainer = document.querySelector('.cards__container')
    cardsContainer.addEventListener('click', (e) => {
        if (e.target.id === 'path0') {
            const curCard = e.path[3]
            rotateCard(curCard)
        } else if (e.target.classList.contains('card__rotate')) {
            const curCard = e.path[1]
            rotateCard(curCard)
        }
    })
}

const addClickCardHandler = () => {
    const cards = document.querySelector('.cards__container')
    const links = document.querySelectorAll('.menu__item')
    cards.addEventListener('click', (e) => {
        if (e.target.classList.contains('card')) {
            const { id } = e.target
            links.forEach((el) => {
                el.classList.remove('active')
                if (el.title === id) {
                    el.classList.add('active')
                }
            })
            if (modeTrain) {
                addTrainPage(id)
                addClickTrainHandler()
                addClickRotateHandler()
            } else if (modePlay) {
                addPlayPage(id)
                addClickStartGameHandler()
            }
        }
    })
}

const menuHidden = () => {
    const switcher = document.querySelector('.menu__switcher')
    switcher.addEventListener('blur', () => {
        switcher.checked = false
    })
}

const addClickMenuHandler = () => {
    const menu = document.querySelector('.menu');
    const links = document.querySelectorAll('.menu__item')

    menu.addEventListener('click', (e) => {
        const container = document.querySelector('.cards__container')
        if (e.target.classList.contains('menu__item')) {
            e.preventDefault()
            const { title } = e.target
            links.forEach((link) => {
                if (link.classList.contains('active')) {
                    link.classList.remove('active')
                }
            })
            e.target.classList.add('active')
            if (title === 'main') {
                container.remove()
                addDomElements()
                addMainPage()
                addClickCardHandler()
            } else {
                container.remove()
                addDomElements()
                if (modeTrain) {
                    addTrainPage(title)
                    addClickTrainHandler()
                    addClickRotateHandler()
                } else if (modePlay) {
                    addPlayPage(title)
                    addClickStartGameHandler()
                }
            }
        }
    })
}


window.onload = () => {
    addDomElements()
    addMainPage()
    addClickToggleHandler()
    addClickCardHandler()
    addClickMenuHandler()
    menuHidden()
};