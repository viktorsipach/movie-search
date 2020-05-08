
import { hideSpinner  } from '../components/spinner/spinner.components';

const errorHandler = (error) => {
    const input = document.querySelector('.search-input')
    const { value } = document.querySelector('.search-input')
    const info = document.querySelector('.info')

    if (error === 'Movie not found!') {
        info.innerText = `No results for '${value}' !`;
    } else if (error === 'Something went wrong.') {
        input.focus();
        info.innerText = `Please enter a movie name!`;
    } else {
        info.innerText = error;
    }
  
}

export const getTranslation = async(word) => {
    const FIRST_ELEMENT = 0;
    const key = 'trnsl.1.1.20200423T163026Z.a63bf4146a5c5674.60216300ebdbdbbbc5172f0c4180563fd7a91840'
    const url = `https://translate.yandex.net/api/v1.5/tr.json/translate?key=${key}&text=${word}&lang=ru-en`;
    const response = await fetch(url);
    const data = await response.json();
    try {
        if (response.ok) {
            const translate = data.text[FIRST_ELEMENT];
            return translate;
        }
    } catch (error) {
        hideSpinner();
        errorHandler(data.Error)
        return null; 
    }
    return null; 
}

export const getReiting = async (imdbId) => {
    const key = '90c64df2'
    const url = `https://www.omdbapi.com/?i=${imdbId}&apikey=${key}`;

    const response = await fetch(url);
    const data = await response.json();

    try {
        if (response.ok) {
            return data.imdbRating;
        }
    } catch (error) {
        errorHandler(data.Error)
    } 
    return data.imdbRating;
};

export const getMoviesData = async(name, page = 1) => {
    const key = '90c64df2'
    const url = `https://www.omdbapi.com/?s=${name}&page=${page}&apikey=${key}`;

    const response = await fetch(url);
    const data = await response.json();
    try {
        if (response.ok) {
            data.Search.forEach( async (item) => {
                const movie = item;
                (movie.reiting =  await getReiting(movie.imdbID))}
            );
            await getReiting(data.Search);   
            return data;  
        }
    } catch (error) {
        hideSpinner();
        errorHandler(data.Error)
        return null; 
    }
    return null;   
};
