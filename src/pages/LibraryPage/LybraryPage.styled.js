import styled from 'styled-components';

export const LibrarryTitle = styled.h1`
  margin-top: 150px;
  margin-bottom: 50px;
  color: var(--color);
  display: flex;
  justify-content: center;
`;

export const FavoritesList = styled.ul`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 10px;
  margin-bottom: 50px;
  overflow: hidden;
`;

export const FavoritesItem = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  border: 1px solid var(--border-color);
  border-radius: 5px;
  max-width: 320px;
  padding: 10px;
  background: var(--background-movies-item);
  //   height: 100%;
`;

export const ImgWrapper = styled.div`
  overflow: hidden;
  margin-bottom: 5px;
`;

export const MoviesImg = styled.img`
  max-width: 100%;
  object-fit: cover;
  transition: transform 0.4s;
  -webkit-transition: transform 0.4s;
  -moz-transition: transform 0.4s;
  -ms-transition: transform 0.4s;
  -o-transition: transform 0.4s;

  &:hover {
    transform: scale(1.1);
    -webkit-transform: scale(1.1);
    -moz-transform: scale(1.1);
    -ms-transform: scale(1.1);
    -o-transform: scale(1.1);
  }
`;

export const CardTitle = styled.h3`
  max-width: 300px;
  color: var(--color);
  font-size: 14px;
  margin-bottom: 10px;
`;

export const RatingStarsContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const RatingNumber = styled.span`
  font-size: 8px;
  color: var(--color);
`;

export const MoviesYear = styled.p`
  color: red;
  font-weight: bold;
  font-size: 12px;
  margin-left: auto;
`;
