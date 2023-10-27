import React from 'react';
import { Card, CardMedia } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { formattedDate, moviePropTypes } from './Utils';
import CustomizedMenus from './material/MenuList';

const Content = styled.div`
    width: 100%;
    padding: 26px 10px 12px;
    position: relative;
    white-space: normal;
    display: flex;
    align-content: flex-start;
    flex-wrap: wrap;
`;

const MovieTitle = styled.h2`
    font-size: 1em;
    margin: 20px 0 0 0;
    width: 100%;
    word-wrap: normal;
    overflow-wrap: break-word;
    font-weight: 600;
`;
const ReleaseDate = styled.p`
   font-size: 1em;
    margin: 0;
    padding: 0;
    color: rgba(0,0,0,.6);

`;
const Media = styled.div`
    position: absolute;
    top: 8px;
    right: 8px;
    z-index: 4;
    opacity: .6;
`;

function Movie({ movie, onWatchList, watchList }) {
  const navigate = useNavigate();

  const handleNavigation = () => {
    navigate(`/movie/${movie?.id}`);
  };
  const checkIfMovieIsInWatchList = (movieId) => watchList?.some((list) => list.id === movieId);
  return (
    <Card
      key={movie?.id}
      sx={{
        flexWrap: 'wrap',
        border: '1px solid #e3e3e3',
        overflow: 'hidden',
        height: '374.5px',
      }}
    >

      <CardMedia
        onClick={handleNavigation}
        sx={{ height: 240, cursor: 'pointer' }}
        image={`https://image.tmdb.org/t/p/w500/${movie?.poster_path}`}
        title={movie?.title}
      />

      <Content>
        <MovieTitle key={movie.id}>{movie.title}</MovieTitle>
        <ReleaseDate>{movie?.release_date && formattedDate(movie?.release_date)}</ReleaseDate>
        <Media>
          <CustomizedMenus
            onWatchList={onWatchList}
            isInWatchList={checkIfMovieIsInWatchList(movie?.id)}
          />
        </Media>
      </Content>

    </Card>
  );
}
Movie.propTypes = {
  movie: moviePropTypes.isRequired,
  watchList: PropTypes.arrayOf(moviePropTypes).isRequired,
  onWatchList: PropTypes.func.isRequired,
};

export default Movie;
