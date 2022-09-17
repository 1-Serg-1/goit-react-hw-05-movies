import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

export const NavItem = styled(NavLink)`
  font-size: ${p => p.theme.fontSizes.m};
  font-weight: ${p => p.theme.fontWeights.bold};
  text-decoration: none;
  cursor: pointer;
  color: ${p => p.theme.colors.black};

  &.active {
    color: red;
  }

  :hover:not(.active),
  :focus:not(.active) {
    text-decoration: underline;
  }
`;
