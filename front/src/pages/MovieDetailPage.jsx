import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';

import { useParams } from 'react-router-dom';
import { Card } from '@mui/material';

import fetchMovieDetails from '../services/movieDetailService';

import SuggestionMovie from '../components/SuggestionMovie';

import { moviePropTypes } from '../components/Utils';

import MovieDetail from '../components/MovieDetail';

function MovieDetailPage({ watchList, updateWatchList }) {
  const { id } = useParams();
  const [movie, setMovie] = useState(null);
  const [voteCount, setVoteCount] = useState(undefined);

  useEffect(() => {
    fetchMovieDetails(id)
      .then((response) => {
        setMovie(response.data);
        !voteCount && setVoteCount(movie?.vote_count);
      })
      .catch((error) => {
        console.error('Error fetching movie details:', error);
      });
  }, [id, voteCount, movie?.vote_count]);

  return (
    movie
        && (
        <Card key={movie.id}>
          {voteCount && (
          <MovieDetail
            movie={movie}
            setVoteCount={setVoteCount}
            voteCount={voteCount}
          />
          )}
          <SuggestionMovie watchList={watchList} updateWatchList={updateWatchList} />
        </Card>
        )
  );
}

MovieDetailPage.propTypes = {
  watchList: PropTypes.arrayOf(moviePropTypes).isRequired,
  updateWatchList: PropTypes.func.isRequired,
};

export default MovieDetailPage;
