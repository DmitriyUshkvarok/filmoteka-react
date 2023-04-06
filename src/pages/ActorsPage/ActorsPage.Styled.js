import styled from 'styled-components';
import DebounceInput from 'react-debounce-input';

export const Search = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 150px;
  margin-bottom: 20px;
`;

export const ActorList = styled.ul`
  margin-top: 90px;
  margin-bottom: 50px;
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
  justify-content: center;
`;

export const ActorListItem = styled.li`
  max-width: 220px;
  border: 1px solid gold;
  padding: 10px;
  background: var(--background-header);
`;

export const ActorsName = styled.p`
  max-width: 200px;
  color: var(--color);
  font-size: 16px;
  font-weight: bold;
`;

export const ActorsDepartment = styled.p`
  color: var(--color);
  font-size: 14px;
`;

export const ActorsRating = styled.p`
  color: green;
`;

export const StyleDebounceInput = styled(DebounceInput)`
  box-sizing: border-box;
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

  &:focus {
    outline: none;
  }

  &::placeholder {
    padding-left: 5px;
  }
`;