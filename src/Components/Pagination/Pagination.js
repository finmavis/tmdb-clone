import React from 'react';
import PropTypes from 'prop-types';

import Overview from './Overview';

const Pagination = ({ currentPage, totalPages, totalResults, children }) => (
  <div className="pagination">
    <p className="left">
      <Overview currentPage={currentPage}
        totalPages={totalPages}
        totalResults={totalResults} />
    </p>
    <p className="right">
      { children }
    </p>
  </div>
);

Pagination.propTypes = {
  currentPage: PropTypes.number.isRequired,
  totalPages: PropTypes.number.isRequired,
  totalResults: PropTypes.number.isRequired,
};

export default Pagination;