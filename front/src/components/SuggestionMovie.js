import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios'
import Movie from './Movie';
import Grid from '@mui/material/Grid';

const SuggestionMovie = () => {
    const { id } = useParams()
    const [movie, setMovie] = useState(null);
    useEffect(() => {
        // Define the API endpoint for fetching movie details
        const apiKey = 'ad2c28e0345278f3c8b002efddadf28f';

        const apiUrl = `https://api.themoviedb.org/3/movie/${id}similar?api_key=${apiKey}`;

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
        <Grid container spacing={2}>
            {movie && <Movie key={movie?.id} movie={movie} />}
        </Grid>
    );
};

export default SuggestionMovie;
