import Container from 'components/Container/Container';
import { toast } from 'react-toastify';
import { useState, useEffect } from 'react';
import apiTheMovieDB from 'service/kino-api';
import { useParams } from 'react-router-dom';
import {
  InfoActorContainer,
  ActorInfoMain,
  ActorsDetalis,
  ActorsInfoName,
  Biography,
  ActorInfoImg,
  ActorsInfoBirth,
  ActorsInfoDepartment,
  ActorsPlaceOfBirth,
  ActorsPopularity,
  BtnReadMore,
} from './ActorsInfo.styled';

const ActorsInfo = () => {
  const { id } = useParams();
  const [actorsInfo, setActorsInfo] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [showFullBio, setShowFullBio] = useState(false);
  const MAX_BIO_LENGTH = 300;

  useEffect(() => {
    apiTheMovieDB
      .fetchActorInfoAndMovies(id)
      .then(res => {
        setActorsInfo(res);
      })
      .catch(error => {
        setError(error);
        toast.error('sorry, hernya kakasja');
      })
      .finally(() => {
        setLoading(false);
      });
  }, [id]);

  if (error) {
    return <p>{error.message}</p>;
  }

  const toggleFullBio = () => {
    setShowFullBio(!showFullBio);
  };

  return (
    <Container>
      {loading ? (
        <p>Loading...</p>
      ) : (
        <div>
          {actorsInfo && (
            <InfoActorContainer key={actorsInfo.id}>
              <ActorInfoMain>
                <ActorInfoImg
                  src={
                    actorsInfo.profile_path
                      ? `https://image.tmdb.org/t/p/w500/${actorsInfo.profile_path}`
                      : 'https://via.placeholder.com/200x300'
                  }
                  alt={actorsInfo.name}
                  width={470}
                />
                <ActorsInfoBirth>
                  <span> Date of birth:</span>
                  {actorsInfo.birthday}
                </ActorsInfoBirth>
                <ActorsInfoDepartment>
                  {actorsInfo.known_for_department}
                </ActorsInfoDepartment>
                <ActorsPlaceOfBirth>
                  <span>Place of birth:</span>
                  {actorsInfo.place_of_birth}
                </ActorsPlaceOfBirth>
                <ActorsPopularity>
                  <span>Popularity:</span>
                  {actorsInfo.popularity.toFixed(1)}
                </ActorsPopularity>
              </ActorInfoMain>
              <ActorsDetalis>
                <ActorsInfoName>{actorsInfo.name}</ActorsInfoName>
                <Biography>
                  {showFullBio
                    ? actorsInfo.biography
                    : `${actorsInfo.biography.slice(0, MAX_BIO_LENGTH)}...`}
                  <BtnReadMore onClick={toggleFullBio}>
                    {showFullBio ? 'Hide' : 'Read more'}
                  </BtnReadMore>
                </Biography>
              </ActorsDetalis>
            </InfoActorContainer>
          )}
        </div>
      )}
    </Container>
  );
};

export default ActorsInfo;