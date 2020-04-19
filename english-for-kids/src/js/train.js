import { playWord } from './audioPlayer';
import { updateStatistics } from './statistics';

const addClickTrainHandler = () => {
    const cards = document.querySelector('.cards__container')
    cards.addEventListener('click', (e) => {
        if (e.target.classList.contains('card__img')) {
            const word = e.target.nextElementSibling.innerText
            playWord(word)
            updateStatistics(word,'train')
        }
    })
};

const rotateCard = (card) => {
    const ROTATE_DURATION = 400;
    const FIRST_CHILD = 1;
    const SECOND_CHILD = 2;

    const curCard = card
    const word = curCard.children[FIRST_CHILD]
    const translation = curCard.children[SECOND_CHILD]
    curCard.removeAttribute('style')
    curCard.classList.add('rotate')
    setTimeout(() => {
        translation.classList.remove('hidden')
        word.classList.add('hidden')
        curCard.style.transform = 'rotateY(0deg)'
        curCard.classList.remove('rotate')
    }, ROTATE_DURATION);

    curCard.addEventListener('mouseleave', () => {
        curCard.removeAttribute('style')
        curCard.classList.add('rotate')
        setTimeout(() => {
            translation.classList.add('hidden')
            word.classList.remove('hidden')
            curCard.style.transform = 'rotateY(0deg)'
            curCard.classList.remove('rotate')
        }, ROTATE_DURATION);
    }, { once: true })
}

const addClickRotateHandler = () => {
    const FIRST_CHILD = 1;
    const THIRD_CHILD = 3;
    const cardsContainer = document.querySelector('.cards__container')
    cardsContainer.addEventListener('click', (e) => {
        if (e.target.id === 'path0') {
            const curCard = e.path[THIRD_CHILD]
            rotateCard(curCard)
        } else if (e.target.classList.contains('card__rotate')) {
            const curCard = e.path[FIRST_CHILD]
            rotateCard(curCard)
        }
    })
};
export {
    addClickTrainHandler,
    addClickRotateHandler
};