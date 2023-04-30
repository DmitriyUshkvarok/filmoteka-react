import {
  BellWrapper,
  CardsLoader,
  BellList,
  BellListItem,
  BellImg,
  BellTitle,
} from './BellNotification.styled';
import { TbBellPlusFilled, TbBellMinusFilled } from 'react-icons/tb';
import apiTheMovieDB from 'service/kino-api';
import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';

const BellNotification = () => {
  const location = useLocation();

  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [showList, setShowList] = useState(false);
  const [viewed, setViewed] = useState(false);

  useEffect(() => {
    apiTheMovieDB
      .fetchNewMoviesNotification()
      .then(movies => {
        setMovies(movies);
      })
      .catch(error => {
        setError(error);
      })
      .finally(() => setLoading(false));
  }, []);

  if (error) {
    return <p>{error.message}</p>;
  }

  const handleClick = () => {
    setShowList(!showList);
    setViewed(!viewed);
  };

  const closeListNavigate = () => {
    setShowList(false);
    setViewed(!viewed);
  };

  return (
    <>
      <BellWrapper>
        {viewed ? (
          <TbBellMinusFilled
            onClick={handleClick}
            size={30}
            color={viewed ? 'gray' : 'green'}
          />
        ) : (
          <TbBellPlusFilled
            onClick={handleClick}
            size={30}
            color={viewed ? 'gray' : 'green'}
          />
        )}
      </BellWrapper>
      {showList && (
        <BellList>
          {loading ? (
            <CardsLoader size={50} />
          ) : (
            movies.map(({ poster_path, title, id }) => (
              <Link
                key={id}
                to={`/movies/${id}`}
                state={{ from: location }}
                onClick={closeListNavigate}
              >
                <BellListItem key={id}>
                  <BellImg
                    src={
                      poster_path
                        ? `https://image.tmdb.org/t/p/w500/${poster_path}`
                        : 'https://via.placeholder.com/200x300'
                    }
                    alt={title}
                    width={50}
                  />
                  <BellTitle>
                    {title ? title : 'Movie without a title'}
                  </BellTitle>
                </BellListItem>
              </Link>
            ))
          )}
        </BellList>
      )}
    </>
  );
};

export default BellNotification;
