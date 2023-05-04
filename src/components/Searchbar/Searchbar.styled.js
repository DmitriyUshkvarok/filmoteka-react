import styled from 'styled-components';

export const Form = styled.form`
  margin-top: 190px;
  margin-bottom: 10px;
  display: flex;
  justify-content: center;
  align-items: center;

  @media screen and (max-width: 705px) {
    margin-top: 230px;
  }

  @media screen and (max-width: 380px) {
    margin-top: 260px;
  }
`;

export const InputSearch = styled.input`
  box-sizing: border-box;
  width: 400px;
  height: 50px;
  margin-right: 10px;
  background-color: transparent;
  border: 1px solid gray;
  outline: none;
  color: var(--color);
  font-size: 18px;
  border-radius: 5px;
  -webkit-border-radius: 5px;
  -moz-border-radius: 5px;
  -ms-border-radius: 5px;
  -o-border-radius: 5px;
  padding: 10px;

  &:focus {
    border: 1px solid var(--border-color);
  }

  &::placeholder {
    color: var(--color);
    opacity: 0.3;
  }
`;

export const SerchBtn = styled.button`
  width: 100px;
  height: 50px;
  background: var(--background-header);
  border: var(--border-color);
  color: var(--color);
  border-radius: 5px;
  -webkit-border-radius: 5px;
  -moz-border-radius: 5px;
  -ms-border-radius: 5px;
  -o-border-radius: 5px;
  cursor: pointer;

  &:hover,
  &:focus {
    background: var(--background-body);
  }
`;
