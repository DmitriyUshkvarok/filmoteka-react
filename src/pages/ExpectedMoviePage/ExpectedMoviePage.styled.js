import styled from 'styled-components';
import { FaReact } from 'react-icons/fa';

export const CardsLoader = styled(FaReact)`
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--color);
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

export const ExpectedTitle = styled.h1`
  text-transform: uppercase;
  display: flex;
  justify-content: center;
  color: var(--color);
  font-size: 21px;
  margin-top: 30px;
  margin-bottom: 30px;
`;

export const BtnBackExpectedWrapper = styled.h1`
  font-size: 21px;
  margin-top: 150px;
  margin-bottom: 30px;
`;
