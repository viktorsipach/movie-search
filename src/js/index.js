import '../css/reset.css';
import '../scss/style.scss';

import cardsData from '../assets/cards'

const modeMain = true
let modeTrain = true
let modePlay = false

const addDomElements = () => {
    const container = document.createElement('div')
    container.classList = "cards__container"
    container.innerHTML = `
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

const makeMainPage = () => {
    const images = document.querySelectorAll('.card__img');
    const words = document.querySelectorAll('.card__word');
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
    const bgTrain = 'linear-gradient(0deg, rgba(9,210,90,1) 0%, rgba(9,233,236,1) 84%)'
    const bgPlay = 'linear-gradient(0deg, rgba(231,236,9,1) 0%, rgba(241,40,5,1) 84%)'
    const toggle = document.querySelector('.toggle')
    const switcher = document.getElementById('switch')
    const text = document.querySelector('.toggle__text')
    const menu = document.querySelector('.menu')
    const cards = document.querySelectorAll('.card');
    // const words = document.querySelectorAll('.card__word');
    // const images = document.querySelectorAll('.card__img');
    toggle.addEventListener('click', () => {
        if (!switcher.checked) {
            switcher.checked = true
            text.classList.add('text__right')
            text.innerHTML = 'Play'
            menu.style.background = `${bgPlay}`
            modePlay = true
            modeTrain = false
            cards.forEach((el) => {
                const card = el
                card.style.background = `${bgPlay}`
            })
        } else {
            switcher.checked = false
            text.classList.remove('text__right')
            text.innerHTML = 'Train'
            menu.style.background = `${bgTrain}`
            modePlay = false
            modeTrain = true
            cards.forEach((el) => {
                const card = el
                card.style.background = `${bgTrain}`
            })
        }
    })
}

const addTrainPage = (target) => {
    const { id } = target
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

const addPlayPage = (target) => {
    const { id } = target
    const cards = document.querySelectorAll('.card');
    const images = document.querySelectorAll('.card__img');
    const words = document.querySelectorAll('.card__word');
    const translations = document.querySelectorAll('.card__translate');
    images.forEach((el, idx) => {
        const img = cardsData[id][idx].image
        const element = el
        element.style.backgroundImage = `url(./assets/${img})`
        element.classList.add('card__img_play')
    })
    words.forEach((el, idx) => {
        const { word } = cardsData[id][idx]
        const element = el
        element.innerHTML = `${word}`
        element.classList.add('hidden')
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

const play = (word) => {
    const audio = new Audio(`https://wooordhunt.ru/data/sound/word/us/mp3/${word}.mp3`)
    audio.play()
}

const addClickTrainHandler = () => {
    const cards = document.querySelector('.cards__container')
    cards.addEventListener('click', (e) => {
        if (e.target.classList.contains('card__img')) {
            const word = e.target.nextElementSibling.innerText
            play(word)
        }
    })
}

const addClickRotateHandler = () => {
    const cardFlipDuration = 400;
    const cardsContainer = document.querySelector('.cards__container')
    cardsContainer.addEventListener('click', (e) => {
        if (e.target.id === 'path0') {
            const curCard = e.path[3]
            const word = curCard.children[1]
            const translation = curCard.children[2]
            curCard.removeAttribute('style')
            curCard.classList.add('rotate')
            setTimeout(() => {
                translation.classList.remove('hidden')
                word.classList.add('hidden')
                curCard.style.transform = 'rotateY(0deg)'
                curCard.classList.remove('rotate')
            }, cardFlipDuration );
            curCard.addEventListener('mouseleave', (e) => {
                curCard.removeAttribute('style')
                curCard.classList.add('rotate')
                setTimeout(() => {
                    translation.classList.add('hidden')
                    word.classList.remove('hidden')
                    curCard.style.transform = 'rotateY(0deg)'
                    curCard.classList.remove('rotate')
            }, cardFlipDuration );
            },{once: true})
              
        }
    })
}

const addClickCardHandler = () => {
    const cards = document.querySelector('.cards__container')
        // const img = document.querySelector('.card__img')
    cards.addEventListener('click', (e) => {
        if (e.target.classList.contains('card')) {
            const card = e.target
            if (modeTrain) {
                addTrainPage(card)
                addClickTrainHandler()
                addClickRotateHandler()
                modeTrain = false
            } else if (modePlay) {
                addPlayPage(card)
                modePlay = false
            }
        }
    })
}



window.onload = () => {
    addDomElements()
    makeMainPage()
    addClickToggleHandler()
    addClickCardHandler()
};