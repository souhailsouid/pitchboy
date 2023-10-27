import React from 'react';
import { Pagination, Stack } from '@mui/material';
import PropTypes from 'prop-types';

function PaginationComponent({ totalPages, onPageChange, page }) {
  return (
    <Stack spacing={2}>
      <Pagination
        sx={{ display: 'flex', justifyContent: 'center', padding: '3.125rem 0 0 0' }}
        count={totalPages}
        defaultPage={1}
        color="primary"
        page={page}
        onChange={onPageChange}
      />
    </Stack>
  );
}

export default PaginationComponent;

PaginationComponent.propTypes = {
  totalPages: PropTypes.number.isRequired,
  page: PropTypes.number.isRequired,
  onPageChange: PropTypes.func.isRequired,
};
