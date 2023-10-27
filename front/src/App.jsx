import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Box } from '@mui/material';
import HomePage from './pages/HomePage';
import MovieDetailPage from './pages/MovieDetailPage';
import fetchMovies from './services/movieService';

import NavBar from './components/material/NavBar';
import { handleWatchList } from './components/Utils';

function App() {
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [watchList, setWatchList] = useState([]);
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    fetchMovies(page)
      .then((response) => {
        setMovies(response.data.results);
        setTotalPages(response?.data?.total_pages);
      })
      .catch((error) => {
        console.error('Error fetching movie data:', error);
      });
  }, [page, watchList]);

  return (
    <Router>
      <Box sx={{ flexGrow: 1, margin: '0 20px 100px 20px' }}>
        <NavBar movies={movies} watchList={watchList} setWatchList={setWatchList} />
        <Routes>
          <Route
            path="/"
            element={(
              <HomePage
                onWatchList={(params) => handleWatchList(params, movies, watchList, setWatchList)}
                watchList={watchList}
                movies={movies}
                page={page}
                setPage={setPage}
                setMovies={setMovies}
                updateWatchList={setWatchList}
                totalPages={totalPages}
              />
          )}
          />
          <Route path="/movie/:id" element={<MovieDetailPage watchList={watchList} updateWatchList={setWatchList} movies={movies} />} />
        </Routes>
      </Box>
    </Router>
  );
}

export default App;
