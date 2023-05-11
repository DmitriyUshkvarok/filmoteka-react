import { useParams } from 'react-router-dom';
import { useEffect, useState, useContext } from 'react';
import apiTheMovieDB from 'service/kino-api';
import { Link } from 'react-router-dom';
import { CastList, CastItem, CastName, CardsLoader } from './Cast.styled';
import { LanguageContext } from 'components/context/languageContext';

function CastMovie() {
  const { movieId } = useParams();
  const [cast, setCast] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const { selectedLanguage } = useContext(LanguageContext);

  useEffect(() => {
    setIsLoading(true);
    apiTheMovieDB
      .fetchMovieCredits(movieId, selectedLanguage.iso_639_1)
      .then(data => {
        setCast(data.cast);
        setIsLoading(false);
      })
      .catch(error => {
        setError(error);
        setIsLoading(false);
      });
  }, [movieId, selectedLanguage]);

  if (isLoading) {
    return <CardsLoader size={50} />;
  }

  if (error) {
    return <p>{error.message}</p>;
  }

  return (
    <>
      <CastList>
        {cast && cast.length > 0 ? (
          cast.map(({ profile_path, name, id }) => (
            <Link to={`/actors/movies/${id}/actors-info`} key={id}>
              <CastItem key={id}>
                <img
                  src={
                    profile_path
                      ? `https://image.tmdb.org/t/p/w500/${profile_path}`
                      : 'https://dummyimage.com/200x300/fff/aaa'
                  }
                  alt={name}
                  width={200}
                />
                <CastName>{name}</CastName>
              </CastItem>
            </Link>
          ))
        ) : (
          <p>No cast members found</p>
        )}
      </CastList>
    </>
  );
}

export default CastMovie;
