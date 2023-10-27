import * as React from 'react';
import Badge from '@mui/material/Badge';
import LocalMoviesIcon from '@mui/icons-material/LocalMovies';
import PropTypes from 'prop-types';

export default function SimpleBadge({ badgeContent }) {
  return (
    <Badge badgeContent={badgeContent} color="primary">
      <LocalMoviesIcon color="action" />
    </Badge>
  );
}

SimpleBadge.propTypes = {
  badgeContent: PropTypes.number.isRequired,
};
