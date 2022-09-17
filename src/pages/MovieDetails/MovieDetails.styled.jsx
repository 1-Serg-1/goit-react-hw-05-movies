import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

export const LinkBack = styled(NavLink)`
  display: flex;
  gap: 5px;
  align-items: center;
  text-decoration: none;
  padding: 5px;
  color: ${p => p.theme.colors.black};
  font-size: ${p => p.theme.fontSizes.m};

  :hover,
  :focus {
    color: blue;
  }
`;
