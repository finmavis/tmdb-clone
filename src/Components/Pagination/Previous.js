import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const Previous = ({ currentPage, to }) => (
  <Fragment>
    {currentPage === 1 ? null : (
      <Link to={to} className='btn btn-rounded'>
        &larr;
      </Link>
    )}
  </Fragment>
);

Previous.propTypes = {
  currentPage: PropTypes.number.isRequired,
  to: PropTypes.object.isRequired,
};

export default Previous;
