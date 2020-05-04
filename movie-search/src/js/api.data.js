import { showSwiper, hideSwiper } from './swiper';
import { showSpinner, hideSpinner  } from './spinner';

const errorHandler = (error) => {
    const info = document.querySelector('.info')
    info.innerText = error;
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
        console.log(`Error: ${data.Error}`)
    } 
};

export const getMoviesData = async(name, page = 1) => {
    const key = '90c64df2'
    const url = `https://www.omdbapi.com/?s=${name}&page=${page}&apikey=${key}`;
    const info = document.querySelector('.info')
   
    const response = await fetch(url);
    const data = await response.json();
    showSpinner();
    hideSwiper();

    try {
        if (response.ok) {
            info.innerText = '';
            data.Search.forEach(
                async (item) => (item.reiting = await getReiting(item.imdbID))
            );
            const reiting = await getReiting(data.Search[0]);  
            return data;   
        }
    } catch (error) {
        hideSpinner();
        errorHandler(data.Error)
        console.log(error)
    }
   
};
