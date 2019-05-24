import React from 'react';
import PropTypes from 'prop-types';

import Heading from '../UI/Heading';
import Card from '../UI/Card';
import ImagePlaceholder from '../UI/ImagePlaceholder';

import './Cast.css';

const Cast = props => {
  const { casts } = props;
  const baseUrl = 'https://image.tmdb.org/t/p/w185';
  return (
    <section className='casts'>
      <Heading type='h3'>Top Billed Cast</Heading>
      {casts.length === 0 ? (
        <p>We don't have any cast added to this movie.</p>
      ) : (
        <ul className='cast'>
          {casts.map(cast => (
            <li className='cast-item' key={cast.id}>
              <Card>
                {cast.profile_path ? (
                  <img
                    src={baseUrl + cast.profile_path}
                    className='cast-images'
                    alt={cast.name}
                  />
                ) : (
                  <ImagePlaceholder />
                )}
                <p className='cast-name'>
                  {cast.name} <span>{cast.character}</span>
                </p>
              </Card>
            </li>
          ))}
        </ul>
      )}
    </section>
  );
};

Cast.propTypes = {
  casts: PropTypes.array,
};

export default Cast;
