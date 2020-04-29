export const getReiting = async (imdbId) => {
    const key = '90c64df2'
    const url = `https://www.omdbapi.com/?i=${imdbId}&apikey=${key}`;

    const res = await fetch(url);
    const data = await res.json();

    if (data.Response === 'True') {
        return data.imdbRating;
    } else {
        console.log(`Ошибка ${data.Error}`)
        return data.Error;
    }
};

export const getMoviesData = async(name, page = 1) => {
    const key = '90c64df2'
    const url = `https://www.omdbapi.com/?s=${name}&page=${page}&apikey=${key}`;

    const res = await fetch(url);
    const data = await res.json();

    if (data.Response === 'True') {
        data.Search.forEach(
            async (item) => (item.reiting = await getReiting(item.imdbID))
        );
        const reiting = await getReiting(data.Search[0])
    } else {
        console.log(`Ошибка ${data.Error}`)
        return data.Error;
    }

    return data;
};
