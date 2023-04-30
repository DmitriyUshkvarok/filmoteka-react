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

export const BellWrapper = styled.div`
  cursor: pointer;
`;

export const BellList = styled.ul`
  position: absolute;
  top: 110px;
  z-index: 20;
  max-height: 500px;
  overflow-y: auto;
  box-sizing: border-box;
  border-radius: 20px;
  padding: 20px;
  display: flex;
  flex-direction: column;
  gap: 5px;
  margin-left: auto;
  margin-right: auto;
  max-width: 700px;
  background-image: var(--background-body);
`;

export const BellListItem = styled.li`
  display: flex;
  align-items: center;
  border: 1px solid var(--border-color);
  background-image: var(--background-body);
  cursor: pointer;
`;

export const BellImg = styled.img`
  margin-right: 10px;
`;

export const BellTitle = styled.h3`
  color: var(--color);
`;
