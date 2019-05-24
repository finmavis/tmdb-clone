import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const Next = ({ currentPage, to, lastPages }) => (
  <Fragment>
    {currentPage === lastPages ? null : (
      <Link to={to} className='btn btn-rounded'>
        &rarr;
      </Link>
    )}
  </Fragment>
);

Next.propTypes = {
  currentPage: PropTypes.number.isRequired,
  to: PropTypes.object.isRequired,
  lastPages: PropTypes.number.isRequired,
};

export default Next;
