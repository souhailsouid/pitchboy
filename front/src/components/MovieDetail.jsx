import React from 'react';

import { CardMedia, Grid } from '@mui/material';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import RatingComponent from './material/RatingComponent';
import { formattedDate, moviePropTypes } from './Utils';
import CircularComponent from './material/Circular';

const PosterWrapper = styled.div`
    border-width: 0;
    min-width: 300px;
    width: 300px;
    height: 450px;
    overflow: hidden;
    border-radius: var(--imageBorderRadius);
    font-family: "Source Sans Pro",Arial,sans-serif;
    font-size: 1em;
    -webkit-font-smoothing: antialiased;
 `;

const Title = styled.h2`
    width: 100%;
    margin: 0;
    padding: 0;
    font-size: 2.2rem;
`;
const Gender = styled.span`
    font-family: "Source Sans Pro",Arial,sans-serif;
    font-size: 1em;
    -webkit-font-smoothing: antialiased;
`;

const SubTitle = styled.h3`
    font-weight: 600;
    font-size: 1.3em;
`;

const Description = styled.p`
    color: #000;
    font-family: "Source Sans Pro", Arial, sans-serif;
    font-size: 1em;
    -webkit-font-smoothing: antialiased;
    margin: ${(props) => props.margin}; 
`;

function SectionTitle({ movie }) {
  const {
    original_language, release_date, title, genres,
  } = movie;
  return (
    <>
      <Title>{title}</Title>
      {release_date && formattedDate(release_date)}
      ,
      (
      {original_language.toUpperCase()}
      )
      &nbsp;
      {genres.map((genre) => (
        <Gender key={genre.id}>
          {genre.name}
          ,&nbsp;
        </Gender>
      ))}
    </>
  );
}

function SectionVote({ voteCount, setVoteCount }) {
  return (
    <>
      <Grid
        item
        xs={2}
        style={{ display: 'flex', justifyContent: 'center' }}
      >
        <span>
          Total votes:
        </span>
        <span>
          {voteCount}
        </span>
      </Grid>
      <Grid
        item
        xs={2}
        style={{ display: 'flex', justifyContent: 'center', margin: 10 }}
      >
        {voteCount && <RatingComponent setVoteCount={setVoteCount} voteCount={voteCount} />}
      </Grid>
    </>
  );
}

function MovieDetail({ movie, voteCount, setVoteCount }) {
  return (
    <Grid container spacing={2}>

      <Grid item xs={12} md={4} lg={3}>
        <PosterWrapper>
          <CardMedia
            sx={{ height: 450 }}
            image={`https://image.tmdb.org/t/p/w500/${movie?.poster_path}`}
            title={movie.title}
          />
        </PosterWrapper>
      </Grid>

      <Grid item xs={10} md={6} lg={8}>
        <SectionTitle movie={movie} />
        <CircularComponent movie={movie} />
        {voteCount && <SectionVote voteCount={voteCount} setVoteCount={setVoteCount} />}
        <Description margin="30px 0 0 0">{movie?.tagline}</Description>
        <SubTitle>Overview</SubTitle>
        <Description>{movie?.overview}</Description>
      </Grid>

    </Grid>
  );
}
SectionTitle.propTypes = {
  movie: moviePropTypes.isRequired,
};

SectionVote.propTypes = {
  voteCount: PropTypes.number.isRequired,
  setVoteCount: PropTypes.func.isRequired,
};

MovieDetail.propTypes = {
  movie: moviePropTypes.isRequired,
  voteCount: PropTypes.number.isRequired,
  setVoteCount: PropTypes.func.isRequired,
};

export default MovieDetail;
