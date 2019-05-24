import React, { Fragment } from 'react';
import PropTypes from 'prop-types';

const Overview = ({ currentPage, totalPages, totalResults }) => (
  <Fragment>
    Currently on page: {currentPage} of {totalPages}
    <span className='result-search'>
      ({totalResults.toLocaleString()} results)
    </span>
  </Fragment>
);

Overview.propTypes = {
  currentPage: PropTypes.number.isRequired,
  totalPages: PropTypes.number.isRequired,
  totalResults: PropTypes.number.isRequired,
};

export default Overview;
