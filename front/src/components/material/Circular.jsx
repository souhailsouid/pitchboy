import React from 'react';

import { Grid } from '@mui/material';

import CircularProgress from '@mui/material/CircularProgress';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';

import { moviePropTypes } from '../Utils';

function CircularComponent({ movie }) {
  const voteAverage = movie?.vote_average; // Check if movie?.vote_average exists

  const displayVoteAverage = voteAverage
    ? `${Math.round(voteAverage * 10)}%`
    : '0%';

  return (
    <Box sx={{ position: 'relative', display: 'flex', margin: 2 }}>
      <Box sx={{ position: 'relative', display: 'inline-flex' }}>
        <CircularProgress variant="determinate" value={movie?.vote_average ? movie.vote_average * 10 : 0} />
        <Box
          sx={{
            top: 0,
            left: 0,
            bottom: 0,
            right: 0,
            position: 'absolute',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          <Typography
            variant="caption"
            component="div"
            color="text.secondary"
          >
            {displayVoteAverage}
          </Typography>
        </Box>

      </Box>

      <Grid
        item
        style={{
          display: 'flex',
          justifyContent: 'center',
          flexDirection: 'column-reverse',
          alignItems: 'center',
        }}
      >
        <span style={{ fontSize: '0.8rem' }}>{movie?.vote_average}</span>
        <span>&nbsp; User score</span>
      </Grid>

    </Box>

  );
}

CircularComponent.propTypes = {
  movie: moviePropTypes.isRequired,
};

export default CircularComponent;
