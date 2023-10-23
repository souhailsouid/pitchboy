import React, { useState, useEffect } from 'react';
import MovieList from './MovieList'

import axios from "axios"

const HomePage = () => {
  const [movies, setMovies] = useState([]);
  const [page, setPage] = useState(1);

  useEffect(() => {

    const apiKey = 'ad2c28e0345278f3c8b002efddadf28f';
    const apiUrl = `https://api.themoviedb.org/3/discover/movie?api_key=${apiKey}`;

    axios.get(apiUrl)
      .then((response) => {

        setMovies(response.data.results);
      })
      .catch((error) => {
        console.error('Error fetching movie data:', error);
      });
  }, []);

  return (
    <div className="App">
      <h1>Movie App</h1>
      <MovieList movies={movies} />
    </div>
  );
};

export default HomePage;
