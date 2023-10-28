import React, { useState, useEffect } from 'react';
import axios from 'axios';

function CarouselItem() {
    const [movieData, setMovieData] = useState(null);

    useEffect(() => {
        const apiKey = process.env.REACT_APP_API_BASE_URL;
        const movieId = '1';
        const apiUrl = `https://api.themoviedb.org/3/movie/${movieId}?api_key=${apiKey}&language=en-US`;

        axios
            .get(apiUrl)
            .then((response) => {
                setMovieData(response.data);
            })
            .catch((error) => {
                console.error('Error fetching movie data:', error);
            });
    }, []); // The empty dependency array ensures this effect runs only once.

    if (movieData === null) {
        return <div>Loading...</div>;
    }

    return (
        <div>
            <h2>{movieData.title}</h2>
            <p>{movieData.overview}</p>
            <img src={`https://image.tmdb.org/t/p/w500${movieData.poster_path}`} alt={movieData.title} />
            <p>Release Date: {movieData.release_date}</p>
        </div>
    );
}

export default CarouselItem;
