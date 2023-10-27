import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import HomeIcon from '@mui/icons-material/Home';
import { Link, useLocation } from 'react-router-dom';
import PropTypes from 'prop-types';
import BasicMenu from '../List';
import { moviePropTypes } from '../Utils';

export default function NavBar({ movies, watchList, setWatchList }) {
  const location = useLocation();
  const isHomePage = ['/'].includes(location?.pathname);

  const styles = {
    link: {
      display: 'flex',
      alignItems: 'center',
      cursor: 'pointer',
      textDecoration: 'none',
      color: 'inherit', // Set the color you want
      '&:hover': {
        color: '#1976D2', // Set the color for hover

      },
    },
  };

  return (
    <Box sx={{ flexGrow: 1, margin: '0 0 100px 0' }}>
      <AppBar position="fixed" color="inherit">
        <Toolbar sx={{ marginLeft: 'auto' }}>

          <Typography variant="h6" component="div" sx={{ flexGrow: 1, display: isHomePage && 'none' }}>
            <Link to="/" style={styles.link}>
              <HomeIcon />
              {' '}
              &nbsp; Home
            </Link>
          </Typography>

          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            <BasicMenu movies={movies} watchList={watchList} setWatchList={setWatchList} />
          </Typography>

        </Toolbar>
      </AppBar>
    </Box>
  );
}

NavBar.propTypes = {
  movies: PropTypes.arrayOf(moviePropTypes).isRequired,
  watchList: PropTypes.arrayOf(moviePropTypes).isRequired,
  setWatchList: PropTypes.func.isRequired,
};
