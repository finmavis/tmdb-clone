import React from 'react';
import styled from 'styled-components';

import NavigationItem from './NavigationItem';
import { navList } from '../../shared/List';

const NavItems = styled.ul`
  display: flex;
`;

const NavigationList = props => (
  <NavItems>
    { navList.map((navItem, i) => <NavigationItem key={i} {...navItem} />) }
  </NavItems>
);

export default NavigationList;