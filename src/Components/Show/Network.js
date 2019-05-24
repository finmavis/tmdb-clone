import React, { Fragment } from 'react';

const baseUrl = 'https://image.tmdb.org/t/p/w92';

const Network = ({ value }) => (
  <Fragment>
    <p>
      <strong>Network</strong>
    </p>
    {value.length !== 0 ? (
      value.map((network, i) => (
        <p key={i} className={i === value.length - 1 ? 'mb-2' : ''}>
          <img src={`${baseUrl}${network.logo_path}`} alt={network.name} />
        </p>
      ))
    ) : (
      <p className='mb-2'>-</p>
    )}
  </Fragment>
);

export default Network;
