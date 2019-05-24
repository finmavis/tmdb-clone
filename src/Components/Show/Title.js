import React from 'react';

import './Title.css';

const Title = props => {
  const { name, year } = props;
  const [singleYear] = year.split('-');
  return (
    <h2 className='show-title'>
      {name}{' '}
      {year ? <span className='show-title-muted'>({singleYear})</span> : ''}
    </h2>
  );
};

export default Title;
