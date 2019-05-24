import React from 'react';

const Heading = props => {
  const { type, children } = props;
  switch (type) {
    case 'h2':
      return <h2 className='heading-2'>{children}</h2>;
    case 'h3':
      return <h3 className='heading-3'>{children}</h3>;
    default:
      return <h1 className='heading-2'>{children}</h1>;
  }
};

export default Heading;
