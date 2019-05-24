import React from 'react';

import { ReactComponent as Icon } from '../../assets/images/image-icon.svg';
import './ImagePlaceholder.css';

const ImagePlaceholder = props => (
  <div className='image-placeholder'>
    <Icon alt='Poster' />
  </div>
);

export default ImagePlaceholder;
