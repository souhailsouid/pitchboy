import React from 'react';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import PropTypes from 'prop-types';
import SimpleBadge from './material/Badge';
import ComplexGrid from './material/MenuComponent';
import { moviePropTypes } from './Utils';

export default function BasicMenu({ watchList, setWatchList }) {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleWatchList = (params) => {
    setWatchList(watchList.filter((movie) => movie.id !== params));
  };

  return (
    <div>
      <Button
        id="basic-button"
        aria-controls={open ? 'basic-menu' : undefined}
        aria-haspopup="true"
        aria-expanded={open ? 'true' : undefined}
        onClick={handleClick}
        color="inherit"
      >
        <SimpleBadge badgeContent={watchList?.length} />
        &nbsp; Watch list
      </Button>
      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          'aria-labelledby': 'basic-button',
        }}
      >
        {watchList?.map((movie) => (
          <ComplexGrid key={movie?.id} movie={movie} handleWatchList={handleWatchList} />
        ))}

      </Menu>
    </div>
  );
}
BasicMenu.propTypes = {
  watchList: PropTypes.arrayOf(moviePropTypes).isRequired,
  setWatchList: PropTypes.func.isRequired,
};
