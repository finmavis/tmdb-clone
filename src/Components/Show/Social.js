import React from 'react';
import { ReactComponent as Facebook } from '../../assets/images/facebook.svg';
import { ReactComponent as Twitter } from '../../assets/images/twitter.svg';
import { ReactComponent as Instagram } from '../../assets/images/instagram.svg';
import { ReactComponent as IconLink } from '../../assets/images/link.svg';

import './Social.css';

const Social = props => {
  const { facebook_id, twitter_id, instagram_id, homepage } = props.social;
  return (
    <div className="social">
      {facebook_id && <div className="social-item">
        <a href={`https://www.facebook.com/${facebook_id}`}>
          <Facebook />
        </a>
      </div>}
      {twitter_id && <div className="social-item">
        <a href={`https://www.twitter.com/${twitter_id}`}>
          <Twitter />
        </a>
      </div>}
      {instagram_id && <div className="social-item">
        <a href={`https://www.instagram.com/${instagram_id}`}>
          <Instagram />
        </a>
      </div>}
      {homepage && <div className="social-item">
        <a href={homepage}>
          <IconLink />
        </a>
      </div>}
    </div>
  );
};

export default Social;
