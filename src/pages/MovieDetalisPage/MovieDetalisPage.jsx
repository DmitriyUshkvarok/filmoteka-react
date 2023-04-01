import { GiReturnArrow } from 'react-icons/gi';
import css from './MovieDetalis.module.css';
import { toast } from 'react-toastify';
import Container from 'components/Container/Container';
import {
  useParams,
  useLocation,
  Link,
  Outlet,
  useNavigate,
} from 'react-router-dom';
import { useState, useEffect, Suspense } from 'react';
import apiTheMovieDB from 'service/kino-api';
import posterimg from '../../images/poster.jpeg';
import YouTube from 'react-youtube';
import ButtonBack from 'components/ButtonBack/ButtonBack';

function MovieDetalis() {
  const { movieId } = useParams();
  const [movie, setMovie] = useState([]);
  const [favorites, setFavorites] = useState([]);
  const [isFavorite, setIsFavorite] = useState(false);
  const [trailerId, setTrailerId] = useState(null);
  const [urlModal, setUrlModal] = useState(false);
  const location = useLocation();

  const backLink = location.state?.from ?? '/';

  const navigate = useNavigate();
  // eslint-disable-next-line no-unused-vars
  const handleGoBack = () => {
    navigate('/movie/actors/');
  };

  function handleFetchTrailer() {
    apiTheMovieDB.fetchTrailerMovies(movieId).then(videos => {
      const trailer = videos.find(video => video.type === 'Trailer');
      if (trailer) {
        setTrailerId(trailer.key);
        setUrlModal(true);
        document.body.style.overflow = 'hidden';
      } else {
        setUrlModal(false);
        toast.error('No trailer available for this movie.');
      }
    });
  }

  useEffect(() => {
    const favoritesFromStorage = localStorage.getItem('favorites');
    if (favoritesFromStorage) {
      setFavorites(JSON.parse(favoritesFromStorage));
    }
  }, []);

  useEffect(() => {
    setIsFavorite(favorites.some(fav => fav.id === movie.id));
  }, [favorites, movie.id]);

  function toggleFavorites() {
    const movieToAdd = {
      id: movie.id,
      title: movie.title,
      poster_path: movie.poster_path,
      vote_average: movie.vote_average.toFixed(1),
      release_date: movie.release_date.slice(0, 4),
    };
    if (isFavorite) {
      const newFavorites = favorites.filter(fav => fav.id !== movie.id);
      setFavorites(newFavorites);
      localStorage.setItem('favorites', JSON.stringify(newFavorites));
      setIsFavorite(false);
      toast.success('Film removed from the library');
    } else {
      const newFavorites = [...favorites, movieToAdd];
      setFavorites(newFavorites);
      localStorage.setItem('favorites', JSON.stringify(newFavorites));
      setIsFavorite(true);
      toast.success('Film added to the library');
    }
  }

  useEffect(() => {
    apiTheMovieDB
      .fetchMovieDetalis(movieId)
      .then(data => {
        setMovie(data);
      })
      .catch('error');
  }, [movieId]);

  useEffect(() => {
    window.addEventListener('keydown', clickKeyDown);

    return () => {
      window.removeEventListener('keydown', clickKeyDown);
    };
  });

  function closeModal() {
    setUrlModal(false);
    setTrailerId(null);
    document.body.style.overflow = 'auto';
  }

  const clickBackdrop = e => {
    if (e.currentTarget === e.target) {
      closeModal();
    }
  };

  const clickKeyDown = e => {
    if (e.code === 'Escape') {
      closeModal();
    }
  };

  return (
    <>
      {movie && (
        <section className={css.detalis}>
          <Container>
            <div className={css.btnBackDetalisWrapper}>
              <Link to={backLink}>
                <ButtonBack />
              </Link>
            </div>
            <div className={css.detalisWrapper}>
              <img
                className={css.posterMovie}
                src={
                  movie.backdrop_path
                    ? `https://image.tmdb.org/t/p/w500/${movie.backdrop_path}`
                    : posterimg
                }
                alt={movie.title}
              />
              <div className={css.columnInfo}>
                <h2 className={css.infoTitle}>
                  {movie.title ? movie.title : 'Movie without a title'}
                </h2>
                <p className={css.scoreDetalis}>
                  User score: {(movie.vote_average * 10).toFixed(0)}%
                </p>
                <h3 className={css.overviewTitle}>Overview</h3>
                <p className={css.overview}>
                  {movie.overview ? movie.overview : 'Movie without a overview'}
                </p>
                <ul className={css.ganreListDetails}>
                  {movie.genres &&
                    movie.genres.map(({ name, id }) => (
                      <li key={id}>{name}</li>
                    ))}
                </ul>
                <ul className={css.reviewList}>
                  <li className={css.reviewiLstItem}>
                    <Link to="cast" state={location.state} className={css.cast}>
                      Cast
                    </Link>
                  </li>

                  <li className={css.reviewiLstItem}>
                    <Link
                      to="review"
                      state={location.state}
                      className={css.review}
                    >
                      Rewiew
                    </Link>
                  </li>
                  <li className={css.reviewiLstItem}>
                    <Link to={'/library'} onClick={toggleFavorites}>
                      <button
                        type="button"
                        className={css.addMoviesBtn}
                        // onClick={toggleFavorites}
                      >
                        {isFavorite
                          ? 'Remove from library'
                          : 'Add movie to library'}
                      </button>
                    </Link>
                  </li>
                </ul>
              </div>
              <div className={css.columnImg}>
                <img
                  src={
                    movie.poster_path
                      ? `https://image.tmdb.org/t/p/w500/${movie.poster_path}`
                      : posterimg
                  }
                  alt={movie.title ? movie.title : 'Movie without a title'}
                  width={300}
                  className={css.detalisImg}
                  style={{ cursor: 'pointer' }}
                  onClick={handleFetchTrailer}
                />
                {urlModal && (
                  <div className={css.videoBackdrop} onClick={clickBackdrop}>
                    <GiReturnArrow
                      className={css.iconBackModal}
                      onClick={closeModal}
                    />

                    <YouTube
                      className={css.videoModal}
                      videoId={trailerId}
                      opts={{
                        width: '100%',
                        height: '100%',
                        playerVars: {
                          autoplay: 1,
                          controls: 0,
                          cc_load_policy: 0,
                          fs: 0,
                          iv_load_policy: 0,
                          modestbranding: 0,
                          rel: 0,
                          showinfo: 0,
                        },
                        origin: 'http://localhost:3000',
                      }}
                    />
                  </div>
                )}
              </div>
            </div>

            <Suspense>
              <Outlet />
            </Suspense>
          </Container>
        </section>
      )}
    </>
  );
}

export default MovieDetalis;
