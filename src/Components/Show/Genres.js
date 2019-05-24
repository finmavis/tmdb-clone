import React, { Fragment } from 'react';

const Genres = props => (
  <Fragment>
    <p>
      <strong>Genres</strong>
    </p>
    <div>
      {props.genres.length === 0 ? (
        <p>No genres have been added.</p>
      ) : (
        props.genres.map((genre, i) => <p key={i}>{genre.name}</p>)
      )}
    </div>
  </Fragment>
);

export default Genres;
