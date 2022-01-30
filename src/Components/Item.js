import React from 'react';
import { Link } from 'react-router-dom';

import ImagePlaceholder from './UI/ImagePlaceholder';

import './Item.css';

import formatDate from '../helpers/formatDate';

const baseURL = 'https://image.tmdb.org/t/p/original';

const Item = ({
  type,
  id,
  poster_path,
  title,
  vote_average,
  overview,
  release_date,
  first_air_date,
  original_name,
}) => (
  <div className='item'>
    <Link to={`/${type}/${id}`}>
      {poster_path && (
        <img
          src={baseURL + poster_path}
          alt={title || original_name}
          className='item-image'
        />
      )}
      {!poster_path && <ImagePlaceholder />}
    </Link>
    <div className='item-content'>
      <div className='item-header'>
        <div className='item-rating'>
          {vote_average} <span className='item-rating-muted'>/10</span>
        </div>
        <div className='item-title'>
          <h3 className='item-title-text'>
            <Link to={`/${type}/${id}`} className='btn'>
              {title || original_name}
            </Link>
          </h3>
          <span className='item-date'>
            {release_date && formatDate(release_date)}
            {first_air_date && formatDate(first_air_date)}
          </span>
        </div>
      </div>
      <p className='item-overview'>
        {overview && overview.substring(0, 150) + '...'}
        {!overview && `We don't have an overview yet...`}
      </p>
      <p className='item-view-more'>
        <Link to={`/${type}/${id}`} className='btn'>
          more info
        </Link>
      </p>
    </div>
  </div>
);

export default Item;
