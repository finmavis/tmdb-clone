import React from 'react';
import { Link } from 'react-router-dom';
import Heading from '../UI/Heading';

import './Recomendation.css';

const Recomendation = props => {
  const { recommendations, title, url } = props;
  const baseURL = 'https://image.tmdb.org/t/p/original';
  return (
    <section className='recomendation'>
      <Heading type='h3'>Recomendation</Heading>
      {recommendations.length !== 0 ? (
        <div className='recomendation-scroll'>
          {recommendations.map(item => (
            <div className='recomendation-item' key={item.id}>
              <div className='recomendation-image'>
                <Link to={`/${url}/${item.id}`}>
                  <img
                    src={baseURL + item.backdrop_path}
                    alt={item.title || item.name}
                    className='recomendation-images'
                  />
                </Link>
              </div>
              <div className='recomendation-info'>
                <Link to={`/${url}/${item.id}`} className='recomendation-link'>
                  {item.title || item.name}
                </Link>
                <span className='vote-rating'>{item.vote_average}/10</span>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <p>We don't have enough data to suggest any movies based on {title}.</p>
      )}
    </section>
  );
};

export default Recomendation;
