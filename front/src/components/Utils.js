import { format, parseISO } from 'date-fns';
import PropTypes from 'prop-types';

export const formattedDate = (dateString) => {
  const parsedDate = parseISO(dateString);
  return format(parsedDate, 'dd MMM yyyy');
};

export const handleWatchList = (params, movies, list, updateList) => {
  const foundMovie = list?.find((movie) => movie.id === params);

  if (foundMovie) {
    return updateList(list.filter((movie) => movie.id !== params));
  }
  return updateList([...list, movies.find((movie) => movie.id === params)]);
};

export const moviePropTypes = PropTypes.shape({
  adult: PropTypes.bool,
  backdrop_path: PropTypes.string,
  genre_ids: PropTypes.arrayOf(PropTypes.number),
  id: PropTypes.number,
  original_language: PropTypes.string,
  original_title: PropTypes.string,
  overview: PropTypes.string,
  popularity: PropTypes.number,
  poster_path: PropTypes.string,
  release_date: PropTypes.string,
  title: PropTypes.string,
  video: PropTypes.bool,
  vote_average: PropTypes.number,
  vote_count: PropTypes.number,
});
