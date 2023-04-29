import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 10px;
`;

export const WelcomeMessage = styled.p`
  font-size: 18px;
  color: var(--border-color);
  text-transform: uppercase;
`;

export const Email = styled.p`
  font-size: 18px;
  opacity: 0.6;
  color: var(--border-color);
`;

export const LogoutButton = styled.button`
  background-color: transparent;
  border: none;
  color: var(--color);
  font-size: 18px;
  cursor: pointer;
  transition: color var(--transition);

  &:hover {
    text-decoration: underline;
    color: var(--border-color);
  }
`;
