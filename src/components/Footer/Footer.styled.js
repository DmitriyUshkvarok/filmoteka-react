import styled from 'styled-components';

export const StyleFooter = styled.footer`
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  width: 100%;
  padding-top: 30px;
  padding-bottom: 30px;
  background: var(--background-header);
`;

export const FooterList = styled.ul`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  gap: 10px;
`;

export const FooterItem = styled.li`
  width: 30px;
`;

export const FooterLink = styled.a`
  color: var(--color);
  fill: currentcolor;

  &:hover {
    color: var(--hover-color-text);
    fill: currentColor;
  }
`;
