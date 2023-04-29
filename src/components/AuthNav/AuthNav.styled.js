import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const NavigationLink = styled(NavLink)`
  color: var(--color);
  text-transform: uppercase;

  &:hover {
    color: var(--hover-color-text);
  }
`;

export const AuthNavWrapper = styled.div`
  display: flex;
  gap: 20px;
`;
