import React from 'react';
import ImagePlaceholder from '../UI/ImagePlaceholder';

import './Poster.css';

const baseURL = 'https://image.tmdb.org/t/p/w300';

const Poster = props => {
  const { imageUrl, title } = props;
  return (
    <div className='show-image-wrap'>
      {imageUrl ? (
        <img src={baseURL + imageUrl} alt={title} className='show-poster' />
      ) : (
        <ImagePlaceholder />
      )}
    </div>
  );
};

export default Poster;
