import React, { useState } from 'react';
import { Rating, Typography, Grid } from '@mui/material';
import PropTypes from 'prop-types';

import CustomizedSnackbars from './SnackBar';

function RatingComponent({ setVoteCount, voteCount }) {
  const [vote, setVote] = useState(null);
  const [openSnackBar, setOpen] = useState(false);
  const [voteCountForbidden, setVoteCountForbidden] = useState(false);
  return (
    <Grid item xs={8} style={{ display: 'flex', justifyContent: 'space-evenly' }}>
      <Rating
        name="simple-controlled"
        value={vote}
        onChange={(_event, newValue) => {
          setVote(newValue);
          !voteCountForbidden && setVoteCount(voteCount + 1);
          setVoteCountForbidden(true);
          setOpen(true);
        }}
      />
      <CustomizedSnackbars setOpen={setOpen} open={openSnackBar} />
      <Typography component="legend">{vote}</Typography>
    </Grid>
  );
}

export default RatingComponent;

RatingComponent.propTypes = {
  voteCount: PropTypes.number.isRequired,
  setVoteCount: PropTypes.func.isRequired,
};
