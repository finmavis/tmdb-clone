import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

import { Container } from '../UI/Grid';
import NavigationList from './NavigationList';

const Nav = styled.nav`
  position: relative;
  display: flex;
  align-items: center;
  font-family: inherit;
  font-size: 1.6rem;
  color: var(--color-white);
  background-color: var(--color-bg-2);
  height: 6.5rem;

  .container {
    display: flex;
    align-items: center;
  }
`;

const NavLogo = styled.div`
  font-family: inherit;
  font-size: 2rem;
  margin-right: 1.5rem;

  a:link,
  a:hover,
  a:focus,
  a:visited {
    color: var(--color-green);
    cursor: pointer;
  }
`;

const Navigation = props => (
  <Nav>
    <Container>
      <NavLogo>
        <Link to="/">TMDB Clone</Link>
      </NavLogo>
      <NavigationList />
    </Container>
  </Nav>
);

export default Navigation;

