import * as React from 'react';
import { styled } from '@mui/material/styles';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import ButtonBase from '@mui/material/ButtonBase';
import PropTypes from 'prop-types';
import { moviePropTypes } from '../Utils';

const Img = styled('img')({
  margin: 'auto',
  display: 'block',
  maxWidth: '100%',
  maxHeight: '100%',
});

export default function ComplexGrid({ movie, handleWatchList }) {
  return (
    <Paper
      sx={{
        p: 2,
        margin: 'auto',
        width: 340,
        height: 90,
        maxWidth: 500,
        flexGrow: 1,
        backgroundColor: (theme) => (theme.palette.mode === 'dark' ? '#1A2027' : '#fff'),
      }}
    >
      <Grid container spacing={2}>
        <Grid item>
          <ButtonBase sx={{ width: 88, height: 98 }}>
            <Img alt="complex" src={`https://image.tmdb.org/t/p/w500/${movie?.poster_path}`} />
          </ButtonBase>
        </Grid>
        <Grid item xs={8} sm container>
          <Grid item xs={8} lg={12} container direction="column" spacing={2}>
            <Grid item xs>
              <Typography gutterBottom variant="subtitle1" component="div">
                {movie?.title}
              </Typography>

              <Typography variant="body2" color="text.secondary">
                {movie?.release_date}
              </Typography>
            </Grid>
            <Grid item>
              <Typography sx={{ cursor: 'pointer' }} variant="body2" onClick={() => handleWatchList(movie?.id)}>
                Remove
              </Typography>
            </Grid>
          </Grid>

        </Grid>
      </Grid>
    </Paper>
  );
}

ComplexGrid.propTypes = {
  movie: moviePropTypes.isRequired,
  handleWatchList: PropTypes.func.isRequired,
};
