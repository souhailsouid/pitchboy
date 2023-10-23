import React from 'react';
import Movie from './Movie';
import Grid from '@mui/material/Grid';

const MovieList = ({ movies }) => {

    return (
        <Grid container spacing={2}>
            {movies?.map((movie) => {
                return (
                    <Grid item xs={3}>
                        <Movie key={movie.id} movie={movie} />
                    </Grid>
                )
            })}
        </Grid>
    );
};

export default MovieList;
