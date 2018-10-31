import React, { Fragment } from 'react';

const FactItem = props => (
  <Fragment>
    <p><strong>{props.name}</strong></p>
    <p className="mb-2">{props.children}</p>
  </Fragment>
);

export default FactItem;