import axios from "axios";

    const url = 'https://yts.mx/api/v2/list_movies.json?limit=12'
    const movieData = []
    
    axios(url)
        .then( res => {
            console.log(res.data.data.movies)
            return res.data.data.movies;
        })
        .then((res) => {
            const moviesData = res
        })

export default movieData;