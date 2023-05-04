import styled from 'styled-components';

import { FaReact } from 'react-icons/fa';

export const CardsLoader = styled(FaReact)`
  display: flex;
  align-items: center;
  justify-content: center;
  fill: var(--color);
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

export const ReviewList = styled.ul`
  margin-bottom: 90px;
`;

export const ReviewListItem = styled.li``;

export const Author = styled.p`
  margin-bottom: 50px;
  font-size: 30px;
  color: var(--border-color);
`;

export const Content = styled.p`
  font-size: 20px;
  color: var(--color);
  margin-bottom: 30px;
  text-align: justify;
`;

export const InfoDiscription = styled.p`
  max-width: 300px;
  color: var(--color);
  font-size: 20px;
  margin-left: auto;
  margin-right: auto;
`;
