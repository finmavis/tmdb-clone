import React from 'react';

import './Loader.css';

export default props => {
  const { type } = props;
  switch (type) {
    case 'card':
      return (
        <div className='placeholder'>
          <div className='placeholder-animate'>
            <div className='placeholder-item' />
            <div className='placeholder-item' />
            <div className='placeholder-item' />
            <div className='placeholder-item' />
            <div className='placeholder-item' />
            <div className='placeholder-item' />
            <div className='placeholder-item' />
          </div>
        </div>
      );
    case 'show':
      return (
        <div className='placeholder-show'>
          <div className='placeholder-animate'>
            <div className='placeholder-show-item' />
            <div className='placeholder-show-item' />
            <div className='placeholder-show-item' />
            <div className='placeholder-show-item' />
            <div className='placeholder-show-item' />
            <div className='placeholder-show-item' />
            <div className='placeholder-show-item' />
            <div className='placeholder-show-item' />
            <div className='placeholder-show-item' />
            <div className='placeholder-show-item' />
            <div className='placeholder-show-item' />
          </div>
        </div>
      );
    default:
      return (
        <div className='placeholder'>
          <div className='placeholder-animate'>
            <div className='placeholder-item' />
            <div className='placeholder-item' />
            <div className='placeholder-item' />
            <div className='placeholder-item' />
            <div className='placeholder-item' />
            <div className='placeholder-item' />
            <div className='placeholder-item' />
          </div>
        </div>
      );
  }
};
