import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import Container from 'components/Container/Container';
import {
  LibrarryTitle,
  FavoritesList,
  FavoritesItem,
  ImgWrapper,
  MoviesImg,
  CardTitle,
  RatingStarsContainer,
  RatingNumber,
  MoviesYear,
} from './LybraryPage.styled';

const LibraryPage = () => {
  const [favoritesList, setFavoritesList] = useState([]);
  const location = useLocation();

  useEffect(() => {
    const favorites = JSON.parse(localStorage.getItem('favorites'));
    setFavoritesList(favorites || []);
  }, []);

  return (
    <>
      <Container>
        <LibrarryTitle>Favorites</LibrarryTitle>
        <FavoritesList>
          {favoritesList.map(
            ({ id, poster_path, title, vote_average, release_date }) => (
              <Link to={`/movies/${id}`} state={{ from: location }} key={id}>
                <FavoritesItem key={id}>
                  <ImgWrapper>
                    <MoviesImg
                      src={
                        poster_path
                          ? `https://image.tmdb.org/t/p/w500/${poster_path}`
                          : 'https://via.placeholder.com/300x400'
                      }
                      alt={title}
                      width={300}
                    />
                  </ImgWrapper>
                  <CardTitle>
                    {title ? title : 'Movie without a title'}
                  </CardTitle>
                  <RatingStarsContainer>
                    <RatingNumber>
                      {vote_average ? vote_average : 'N/A'}
                    </RatingNumber>
                    <MoviesYear>
                      {release_date ? release_date : 'N/A'}
                    </MoviesYear>
                  </RatingStarsContainer>
                </FavoritesItem>
              </Link>
            )
          )}
        </FavoritesList>
      </Container>
    </>
  );
};

export default LibraryPage;
