
import {  hideSpinner  } from './spinner';

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
