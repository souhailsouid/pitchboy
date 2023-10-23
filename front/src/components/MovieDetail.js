import React, { useEffect, useState } from 'react';

import { useParams } from 'react-router-dom';
import axios from 'axios'

import { Card, CardMedia } from '@mui/material';
import SuggestionMovie from './SuggestionMovie'
const MovieDetail = () => {

    const { id } = useParams();
    const [movie, setMovie] = useState(null);

    useEffect(() => {
        // Define the API endpoint for fetching movie details
        const apiKey = 'ad2c28e0345278f3c8b002efddadf28f';
        const apiUrl = `https://api.themoviedb.org/3/movie/${id}?api_key=${apiKey}`;

        // Make the API call
        axios.get(apiUrl)
            .then((response) => {
                setMovie(response.data);
            })
            .catch((error) => {
                console.error('Error fetching movie details:', error);
            });
    }, [id]);
    return (
        movie &&
        <Card key={movie.id}>
            <h1>{movie?.title}</h1>
            <CardMedia
                sx={{ height: 240 }}
                image={`https://image.tmdb.org/t/p/w500/${movie?.poster_path}`}
                title={movie.title}
            />
            <div>
                <strong>Genres:</strong>
                <ul>
                    {movie?.genres.map((genre) => (
                        <li key={genre.id}>{genre.name}</li>
                    ))}
                </ul>
            </div>
            <p>Langue original: {movie?.original_language}</p>
            <p>{movie?.status}</p>
            <p>Resume: {movie?.overview}</p>
            <p>Note moyenne: {movie?.vote_average}</p>
            <p>Total vote: {movie?.vote_count}</p>
            <h3>Suggestion films</h3>
            <br />
            <SuggestionMovie />
        </Card>
    );
};

export default MovieDetail;
