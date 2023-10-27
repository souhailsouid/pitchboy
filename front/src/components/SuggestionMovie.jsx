import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import PropTypes from 'prop-types';
import fetchMovieSuggestion from '../services/movieSuggestionService';
import MovieList from './MovieList';
import { moviePropTypes } from './Utils';

function SuggestionMovie({ watchList, updateWatchList }) {
  const { id } = useParams();
  const [movies, setMovie] = useState(null);

  useEffect(() => {
    fetchMovieSuggestion(id)
      .then((response) => {
        setMovie(response.data);
      })
      .catch((error) => {
        console.error('Error fetching movie details:', error);
      });
  }, [id]);

  return (
    <>
      <h3>Suggestion</h3>
      {movies && (
      <MovieList
        movies={movies?.results}
        watchList={watchList}
        updateWatchList={updateWatchList}
      />
      )}
    </>
  );
}

SuggestionMovie.propTypes = {
  watchList: PropTypes.arrayOf(moviePropTypes).isRequired,
  updateWatchList: PropTypes.func.isRequired,
};

export default SuggestionMovie;
