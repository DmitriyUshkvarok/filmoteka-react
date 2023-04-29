import styled from 'styled-components';
import ScrollToTop from 'react-scroll-to-top';
import { FaReact } from 'react-icons/fa';

export const LoaderWraper = styled.div`
  background: var(--background-body);
`;

export const MainLoader = styled(FaReact)`
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-left: auto;
  margin-right: auto;
  animation: rotate 5s infinite linear;
  -webkit-animation: rotate 5s infinite linear;
  @keyframes rotate {
    from {
      transform: rotate(0deg);
    }
    to {
      transform: rotate(360deg);
    }
  }
`;

export const StyledScrollToTop = styled(ScrollToTop)`
  width: 50px;
  height: 50px;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  background: var(--background-movies-item);
  -webkit-border-radius: 50%;
  -moz-border-radius: 50%;
  -ms-border-radius: 50%;
  -o-border-radius: 50%;

  svg {
    fill: var(--color);
  }

  &:hover {
    background: var(--background-body);
  }
`;
