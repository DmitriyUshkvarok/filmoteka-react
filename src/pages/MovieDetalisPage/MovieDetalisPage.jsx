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
import Footer from 'components/Footer/Footer';
import authSelector from 'redux/auth/auth-selector';
import {
  DetailsWrapper,
  ColumnInfo,
  PosterMovie,
  BtnBackDetailsWrapper,
  InfoTitle,
  ScoreDetails,
  OverviewTitle,
  Overview,
  GenreListDetails,
  ColumnImg,
  DetalisImg,
  ReviewList,
  VideoBackdrop,
  AddMoviesBtn,
  AuthBtnText,
} from './MoviesDetalisPage.styled';
import { useSelector } from 'react-redux';
import { animateScroll as scroll } from 'react-scroll';

function MovieDetalis() {
  const [movie, setMovie] = useState([]);
  const [favorites, setFavorites] = useState([]);
  const [isFavorite, setIsFavorite] = useState(false);
  const [trailerId, setTrailerId] = useState(null);
  const [urlModal, setUrlModal] = useState(false);
  const [isClicked, setIsClicked] = useState(false);

  const { movieId } = useParams();
  const location = useLocation();
  const backLink = location.state?.from ?? '/';

  const navigate = useNavigate();

  const isLoggedIn = useSelector(authSelector.getIsLoggedIn);

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
      vote_average: movie.vote_average,
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

  const henndleCastAndReviewSmooth = () => {
    if (!isClicked) {
      scroll.scrollToBottom({
        duration: 2000,
        smooth: 'easeInOutQuad',
        offset: 0.2,
      });
      setIsClicked(true);
    }
  };

  return (
    <>
      {movie && (
        <section className={css.detalis}>
          <Container>
            <BtnBackDetailsWrapper>
              <Link to={backLink}>
                <ButtonBack />
              </Link>
            </BtnBackDetailsWrapper>
            <DetailsWrapper>
              <PosterMovie
                src={
                  movie.backdrop_path
                    ? `https://image.tmdb.org/t/p/w500/${movie.backdrop_path}`
                    : posterimg
                }
                alt={movie.title}
              />
              <ColumnInfo>
                <InfoTitle>
                  {movie.title ? movie.title : 'Movie without a title'}
                </InfoTitle>
                <ScoreDetails>
                  User score: {(movie.vote_average * 10).toFixed(0)}%
                </ScoreDetails>
                <OverviewTitle>Overview</OverviewTitle>
                <Overview>
                  {movie.overview ? movie.overview : 'Movie without a overview'}
                </Overview>
                <GenreListDetails>
                  {movie.genres &&
                    movie.genres.map(({ name, id }) => (
                      <li key={id}>{name}</li>
                    ))}
                </GenreListDetails>
                <ReviewList>
                  <li className={css.reviewiLstItem}>
                    <Link
                      to="cast"
                      state={location.state}
                      className={css.cast}
                      onClick={henndleCastAndReviewSmooth}
                    >
                      Cast
                    </Link>
                  </li>

                  <li className={css.reviewiLstItem}>
                    <Link
                      to="review"
                      state={location.state}
                      className={css.review}
                      onClick={henndleCastAndReviewSmooth}
                    >
                      Rewiew
                    </Link>
                  </li>
                  <li className={css.reviewiLstItem}>
                    <Link to={'/library'} onClick={toggleFavorites}>
                      <AddMoviesBtn disabled={!isLoggedIn} type="button">
                        {isFavorite
                          ? 'Remove from library'
                          : 'Add movie to library'}
                      </AddMoviesBtn>
                    </Link>
                    {!isLoggedIn && (
                      <AuthBtnText>
                        Register or log in to be able to add a movie to your
                        library
                      </AuthBtnText>
                    )}
                  </li>
                </ReviewList>
              </ColumnInfo>
              <ColumnImg>
                <DetalisImg
                  src={
                    movie.poster_path
                      ? `https://image.tmdb.org/t/p/w500/${movie.poster_path}`
                      : posterimg
                  }
                  alt={movie.title ? movie.title : 'Movie without a title'}
                  width={300}
                  style={{ cursor: 'pointer' }}
                  onClick={handleFetchTrailer}
                />
                {urlModal && (
                  <VideoBackdrop onClick={clickBackdrop}>
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
                  </VideoBackdrop>
                )}
              </ColumnImg>
            </DetailsWrapper>

            <Suspense>
              <Outlet />
            </Suspense>
          </Container>
          <Footer />
        </section>
      )}
    </>
  );
}

export default MovieDetalis;
