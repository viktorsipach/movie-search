import '../css/reset.css';
import '../scss/style.scss';

import { addDomElements } from './dom';
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
};