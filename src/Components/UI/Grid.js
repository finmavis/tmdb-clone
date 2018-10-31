import React from 'react';
import PropTypes from 'prop-types';

import './Grid.css';

export const Container = ({ children }) => <div className="container">{ children }</div>;

export const Row = ({ children }) => <div className="row">{ children }</div>;

export const Col = ({ children, column }) => <div className={ column }>{ children }</div>;

Col.propTypes = {
  column: PropTypes.string.isRequired
};
