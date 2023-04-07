import styled from 'styled-components';

export const BtnBack = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 10px;
  border: 1px solid var(--border-color);
  width: 200px;
  height: 50px;
  background: var(--background-header);
  color: var(--color);
  -webkit-border-radius: 10px;
  -moz-border-radius: 10px;
  -ms-border-radius: 10px;
  -o-border-radius: 10px;
  margin-left: auto;
  margin-right: auto;
  transition: color 0.4s;
  -webkit-transition: color 0.4s;
  -moz-transition: color 0.4s;
  -ms-transition: color 0.4s;
  -o-transition: color 0.4s;
  cursor: pointer;

  &:hover {
    background: var(--background-body);
  }

  @media screen and (max-width: 768px) {
    width: 150px;
    height: 50px;
  }
`;
