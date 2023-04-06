import { useState, useEffect, Suspense } from 'react';
import apiTheMovieDB from 'service/kino-api';
import ButtonBack from 'components/ButtonBack/ButtonBack';
import {
  BtnBackWrapper,
  ActorsMoviesTitle,
  ActorsMoreInfo,
} from './ActorsMoviesPage.styled';
import { toast } from 'react-toastify';
import Container from 'components/Container/Container';
import MoviesList from 'components/MoviesList/MoviesList';
import {
  Link,
  useNavigate,
  useParams,
  useLocation,
  Outlet,
} from 'react-router-dom';

const ActorsMoviePage = () => {
  const { id } = useParams();
  const [movies, setMovies] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  const location = useLocation();
  const navigate = useNavigate();
  // eslint-disable-next-line no-unused-vars
  const handleGoBack = () => {
    navigate('/movie/actors/');
  };

  useEffect(() => {
    apiTheMovieDB
      .fetchMoviesbyActors(id)
      .then(movies => {
        setMovies(movies);
        if (movies.length === 0) {
          toast.error("sorry, that's all the actors we could find");
        }
      })
      .catch(error => {
        setError(error);
      })
      .finally(() => setLoading(false));
  }, [id]);

  if (error) {
    return <p>{error.message}</p>;
  }

  return (
    <>
      <Container>
        <BtnBackWrapper>
          <Link to={'/movie/actors/'}>
            <ButtonBack />
          </Link>
        </BtnBackWrapper>
        <ActorsMoviesTitle>Actors info and movies</ActorsMoviesTitle>
        <Link to={`/actors/movies/${id}/actors-info`} state={location.state}>
          <ActorsMoreInfo>
            See more information about the actor...
          </ActorsMoreInfo>
        </Link>
        <Suspense>
          <Outlet />
        </Suspense>
        {loading ? (
          <p>Loading...</p>
        ) : (
          <>
            <MoviesList movies={movies} />
          </>
        )}
      </Container>
      ;
    </>
  );
};

export default ActorsMoviePage;
