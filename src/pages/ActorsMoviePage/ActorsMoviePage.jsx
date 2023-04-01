import { useState, useEffect } from 'react';
import apiTheMovieDB from 'service/kino-api';
import ButtonBack from 'components/ButtonBack/ButtonBack';
import { BtnBackWrapper, ActorsMoviesTitle } from './ActorsMoviesPage.styled';
import { toast } from 'react-toastify';
import Container from 'components/Container/Container';
import MoviesList from 'components/MoviesList/MoviesList';
import { Link, useNavigate, useParams } from 'react-router-dom';

const ActorsMoviePage = () => {
  const { id } = useParams();
  const [movies, setMovies] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

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
