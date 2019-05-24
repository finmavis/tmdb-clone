import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const NavItem = styled.li`
  margin-left: 1.5rem;
  margin-right: 1.5rem;
  list-style: none;
  position: relative;
  color: var(--color-white);

  .nav-link:link,
  .nav-link:hover,
  .nav-link:focus,
  .nav-link:visited {
    color: currentColor;
    text-transform: capitalize;
    cursor: pointer;
  }
`;

const NavigationItem = ({ name, path }) => (
  <NavItem>
    <Link to={`${path}`} className='nav-link'>
      {name}
    </Link>
  </NavItem>
);

NavigationItem.propTypes = {
  name: PropTypes.string.isRequired,
  path: PropTypes.string.isRequired,
};

export default NavigationItem;
