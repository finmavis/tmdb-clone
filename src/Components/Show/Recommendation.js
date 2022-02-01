import React from 'react';
import { Link } from 'react-router-dom';
import Heading from '../UI/Heading';

import './Recommendation.css';

const Recommendation = props => {
  const { recommendations, title, url } = props;
  const baseURL = 'https://image.tmdb.org/t/p/original';
  return (
    <section className='recommendation'>
      <Heading type='h3'>Recommendation</Heading>
      {recommendations.length !== 0 ? (
        <div className='recommendation-scroll'>
          {recommendations.map(item => (
            <div className='recommendation-item' key={item.id}>
              <div className='recommendation-image'>
                <Link to={`/${url}/${item.id}`}>
                  <img
                    src={baseURL + item.backdrop_path}
                    alt={item.title || item.name}
                    className='recommendation-images'
                  />
                </Link>
              </div>
              <div className='recommendation-info'>
                <Link to={`/${url}/${item.id}`} className='recommendation-link'>
                  {item.title || item.name}
                </Link>
                <span className='vote-rating'>
                  {item.vote_average.toFixed(1)}/10
                </span>
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

export default Recommendation;
