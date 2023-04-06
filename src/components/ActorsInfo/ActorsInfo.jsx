import Container from 'components/Container/Container';
import { toast } from 'react-toastify';
import { useState, useEffect } from 'react';
import apiTheMovieDB from 'service/kino-api';
import { useParams } from 'react-router-dom';

const ActorsInfo = () => {
  const { id } = useParams();
  const [actorsInfo, setActorsInfo] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

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

  return (
    <Container>
      {loading ? (
        <p>Loading...</p>
      ) : (
        <div>
          {actorsInfo && (
            <div key={actorsInfo.id}>
              <h3>{actorsInfo.name}</h3>
              <div className="actorInfoMain">
                <img
                  src={
                    actorsInfo.profile_path
                      ? `https://image.tmdb.org/t/p/w500/${actorsInfo.profile_path}`
                      : 'https://via.placeholder.com/200x300'
                  }
                  alt={actorsInfo.name}
                  width={200}
                />
                <p className="biography">{actorsInfo.biography}</p>
              </div>
              <div className="actorsDetalis">
                <p>{actorsInfo.birthday}</p>
                <p>{actorsInfo.known_for_department}</p>
                <p>{actorsInfo.place_of_birth}</p>
                <div>{actorsInfo.popularity}</div>
              </div>
            </div>
          )}
        </div>
      )}
    </Container>
  );
};

export default ActorsInfo;
