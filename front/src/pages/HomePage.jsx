import React, { useState } from 'react';
import { Button } from '@mui/material';
import PropTypes from 'prop-types';
import MovieList from '../components/MovieList';
import PaginationComponent from '../components/material/Pagination';
import { moviePropTypes } from '../components/Utils';

function HomePage({
  page, setPage, movies, setMovies, watchList, onWatchList, updateWatchList, totalPages,
}) {
  const [isSortedAscending, setIsSortedAscending] = useState(true);

  const handleSort = () => {
    const sortedMovies = [...movies];
    sortedMovies.sort((a, b) => {
      const dateA = new Date(a.release_date);
      const dateB = new Date(b.release_date);
      return dateA - dateB;
    });

    if (isSortedAscending) {
      setMovies(sortedMovies);
    } else {
      setMovies(sortedMovies.reverse());
    }

    setIsSortedAscending(!isSortedAscending);
  };

  const handlePageChange = (_event, value) => {
    setPage(value);
  };

  return (
    <div className="App">
      <Button onClick={handleSort}>Trier par date de sortie</Button>
      <MovieList
        movies={movies}
        onWatchList={onWatchList}
        watchList={watchList}
        updateWatchList={updateWatchList}
      />
      <PaginationComponent
        totalPages={totalPages}
        onPageChange={handlePageChange}
        page={page}
        setPage={setPage}
      />
    </div>
  );
}

HomePage.propTypes = {
  watchList: PropTypes.arrayOf(moviePropTypes).isRequired,
  updateWatchList: PropTypes.func.isRequired,
  setMovies: PropTypes.func.isRequired,
  setPage: PropTypes.func.isRequired,
  onWatchList: PropTypes.func.isRequired,
  page: PropTypes.number.isRequired,
  movies: PropTypes.arrayOf(moviePropTypes).isRequired,
  totalPages: PropTypes.number.isRequired,
};

export default HomePage;
