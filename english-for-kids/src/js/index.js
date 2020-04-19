import '../css/reset.css';
import '../scss/style.scss';

import { addDomElements } from './dom';
import { 
    checkLocalStorage,
    saveStatistics,
    addClickResetHandler
} from './statistics';
import {
    addMainPage,
    addClickToggleHandler,
    addClickCardHandler,
    addClickMenuHandler,
    menuHidden
} from './game';




window.onload = () => {
    addDomElements()
    addMainPage()
    addClickToggleHandler()
    addClickCardHandler()
    addClickMenuHandler()
    menuHidden()
    checkLocalStorage()
    addClickResetHandler()
};

window.onbeforeunload = () => {
  localStorage.setItem('statistics', saveStatistics()); 
}