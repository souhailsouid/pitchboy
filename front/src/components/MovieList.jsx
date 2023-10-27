import React from 'react';
import Grid from '@mui/material/Grid';
import PropTypes from 'prop-types';
import Movie from './Movie';
import { handleWatchList, moviePropTypes } from './Utils';

function MovieList({ movies, watchList, updateWatchList }) {
  return (
    <Grid container spacing={2}>
      {movies?.map((movie) => (
        <Grid item xs={6} md={3} lg={2} key={movie.id}>
          <Movie
            key={movie.id}
            movie={movie}
            onWatchList={() => handleWatchList(movie.id, movies, watchList, updateWatchList)}
            watchList={watchList}
          />
        </Grid>
      ))}
    </Grid>
  );
}
MovieList.propTypes = {
  movies: PropTypes.arrayOf(moviePropTypes).isRequired,
  watchList: PropTypes.arrayOf(moviePropTypes).isRequired,
  updateWatchList: PropTypes.func.isRequired,
};

export default MovieList;
