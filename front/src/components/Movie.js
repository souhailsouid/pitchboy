import React from 'react';
import { Card, CardMedia } from '@mui/material';
import { formattedDate } from './Utils'
import { Link } from 'react-router-dom';
const Movie = ({ movie }) => {

    return (
        <Card sx={{ maxWidth: 345 }} key={movie?.id}>
            <Link to={`/movies/${movie?.id}`}>
                <CardMedia
                    sx={{ height: 240 }}
                    image={`https://image.tmdb.org/t/p/w500/${movie?.poster_path}`}
                    title={movie?.title}
                />
                <h2>{movie.title}</h2>
                <p>{formattedDate(movie.release_date)}</p>
                <li key={movie.id}>

                    {movie?.title}
                </li>
            </Link>
        </Card>
    );
};

export default Movie;
