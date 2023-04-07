import styled from 'styled-components';

export const StyledSkeletLoader = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 10;
  height: 100vh;
  width: 100%;

  & svg {
    background-color: #242b34;
    color: #343d4c;
  }
`;
