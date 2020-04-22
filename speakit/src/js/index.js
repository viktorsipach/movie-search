import '../css/reset.css';
import '../scss/style.scss';

const addStartPageHandler = () => {
    const startBtn = document.querySelector('.start-page__btn');
    const startPage = document.querySelector('.start-page');
    startBtn.addEventListener('click', () => {
        startPage.classList.add('hidden')
    })
}

const addCard = (word, transcription, img) => {
    const wrapper = document.querySelector('.wrapper__cards')
    const card = document.createElement('div')
    card.classList = 'card'
    card.innerHTML = `<img src="./assets/img/icon-audio.png" class="icon" alt="icon">
    <div card__img>${img}</div>
    <div class="wrapper-text ">
        <p class="card__word ">${word}</p>
        <p class="card__transcription ">${transcription}</p>
    </div>`
    wrapper.append(card)
}

window.onload = () => {
    addStartPageHandler()
};