import React from 'react';

import './Overview.css';

const Overview = props => {
  const { text } = props;
  return (
    <div className='show-overview'>
      <h3 className='header-preview'>Overview</h3>
      {text ? (
        <p className='overview-text'>{text}</p>
      ) : (
        <p className='overview-text'>
          We don't have any overview added to this movie.
        </p>
      )}
    </div>
  );
};

export default Overview;
