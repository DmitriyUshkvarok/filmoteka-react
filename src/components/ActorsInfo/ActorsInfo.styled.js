import styled from 'styled-components';

export const InfoActorContainer = styled.div`
  display: flex;
  padding: 20px;
  margin-bottom: 20px;
`;

export const ActorInfoMain = styled.div`
  padding: 10px;
  border: 1px solid var(--border-color);
  border-radius: 5px;
  background: var(--background-header);
`;

export const ActorInfoImg = styled.img`
  border-radius: 5px;
  margin-bottom: 10px;
`;

export const ActorsDetalis = styled.div`
  padding: 10px;
  /* border: 1px solid var(--border-color); */
  border-radius: 5px;
  /* background: var(--background-header); */
`;

export const ActorsInfoName = styled.h3`
  color: var(--border-color);
  font-size: 37px;
  margin-bottom: 20px;
`;

export const ActorsInfoBirth = styled.p`
  color: var(--color);
  margin-bottom: 15px;
  font-size: 21px;

  & > span {
    margin-right: 5px;
    color: var(--border-color);
    margin-bottom: 15px;
  }
`;

export const ActorsInfoDepartment = styled.p`
  font-size: 21px;
  margin-bottom: 15px;
  color: var(--color);
`;

export const ActorsPlaceOfBirth = styled.p`
  color: var(--color);
  margin-bottom: 15px;
  font-size: 21px;

  & > span {
    margin-right: 5px;
    color: var(--border-color);
    margin-bottom: 15px;
  }
`;

export const ActorsPopularity = styled.div`
  color: var(--color);
  margin-bottom: 15px;
  font-size: 21px;

  & > span {
    margin-right: 5px;
    color: var(--border-color);
    margin-bottom: 15px;
  }
`;

export const Biography = styled.p`
  color: var(--color);
  font-size: 21px;
  line-height: 25px;
`;

export const BtnReadMore = styled.button`
  color: var(--border-color);
  font-size: 21px;
  background-color: transparent;
  outline: none;
  border: none;
  cursor: pointer;
`;
