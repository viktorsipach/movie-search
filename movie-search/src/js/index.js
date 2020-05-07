import '../css/reset.css';
import '../scss/style.scss';
import { DEFAULT_MOVIE } from './constants';
import { showSpinner } from './spinner';
import { getMoviesData } from './api.data'
import { Keyboard } from './keyboard';
import { addClickMicHandler } from './mic'

import { createCards, 
  addClickSearchHandler, 
  addClickClearHandler, 
  addClickKeyboardHandler, 
  addMoreSlides 
} from './app'


window.onload = () => {
    Keyboard.addElements()
    if (localStorage.getItem('rusLang') === 'null') {
      Keyboard.createKeys(Keyboard.alphabet.eng)
    } else if (localStorage.getItem('rusLang') === 'false') {
      Keyboard.createKeys(Keyboard.alphabet.rus)
    } else {
      Keyboard.createKeys(Keyboard.alphabet.eng)
    }
    Keyboard.addClickKeyboardHandler()
    addClickSearchHandler();
    addClickClearHandler();
    addClickKeyboardHandler();
    addClickMicHandler();
    addMoreSlides();
    getMoviesData(DEFAULT_MOVIE).then(data => createCards(data));
    showSpinner();
}
