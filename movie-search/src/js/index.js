import '../css/reset.css';
import '../scss/style.scss';
import { DEFAULT_MOVIE } from './constants/constants';
import { showSpinner } from './components/spinner/spinner.components';
import { getMoviesData } from './data/api.data'
import { Keyboard } from './components/keyboard/keyboard.components';
import { addClickMicHandler } from './components/mic/mic.components'

import { createCards, 
  addClickSearchHandler, 
  addClickClearHandler, 
  addClickKeyboardHandler, 
  addMoreSlides 
} from './components/app/app.components'


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
