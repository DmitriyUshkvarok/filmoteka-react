import { lazy, Suspense, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import authSelector from 'redux/auth/auth-selector';
import authOperation from 'redux/auth/auth-operation';
import { Route, Routes } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Header from 'components/Header/Header';
import { LoaderWraper, StyledScrollToTop, MainLoader } from './App.styled';
import PrivateRoute from 'components/PrivateRoute';
import RestictedRoute from 'components/RestictedRoute';

const HomePage = lazy(() => import('../../pages/HomePage/HomePage'));
const MoviesPage = lazy(() => import('../../pages/MoviesPage/MoviePage'));
const MoviesDetalis = lazy(() =>
  import('../../pages/MovieDetalisPage/MovieDetalisPage')
);
const CastMovie = lazy(() => import('../Cast/Cast'));
const Reviews = lazy(() => import('../Reviews/Reviews'));
const GenresPage = lazy(() => import('../../pages/GenresPage/GenrePage'));
const ActorsPage = lazy(() => import('../../pages/ActorsPage/ActorsPage'));
const RegistrationPage = lazy(() =>
  import('../../pages/RegistrationPage/RegistrationPage')
);

const LoginPage = lazy(() => import('../../pages/LoginPage/LoginPage'));

const ActorsMoviePage = lazy(() =>
  import('../../pages/ActorsMoviePage/ActorsMoviePage')
);

const ActorsInfo = lazy(() => import('../ActorsInfo/ActorsInfo'));

const LibraryPage = lazy(() =>
  import('../../pages/LibraryPage/LibraryPage.jsx')
);

const TopRatedPage = lazy(() =>
  import('../../pages/TopRatedPage/TopRatedPage')
);

const ExpectedMoviesPage = lazy(() =>
  import('../../pages/ExpectedMoviePage/ExpectedMoviePage')
);

function App() {
  const dispatch = useDispatch();
  const isRefreshing = useSelector(authSelector.getIsRefreshing);

  useEffect(() => {
    dispatch(authOperation.refreshCurrentUser());
  }, [dispatch]);

  return isRefreshing ? (
    <LoaderWraper>
      <MainLoader size={350} color="aqua" />
    </LoaderWraper>
  ) : (
    <>
      <ToastContainer />
      <Header />
      <StyledScrollToTop smooth />
      <Suspense
        fallback={
          <LoaderWraper>
            <MainLoader size={350} color="aqua" />
          </LoaderWraper>
        }
      >
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="movies" element={<MoviesPage />} />
          <Route
            path="registration"
            element={
              <RestictedRoute redirectTo="/" component={<RegistrationPage />} />
            }
          />
          <Route
            path="login"
            element={
              <RestictedRoute redirectTo="/" component={<LoginPage />} />
            }
          />

          <Route
            path="library"
            element={
              <PrivateRoute redirectTo="/login" component={<LibraryPage />} />
            }
          ></Route>
          <Route path="movie/actors/" element={<ActorsPage />} />
          <Route path="/actors/movies/:id" element={<ActorsMoviePage />}>
            <Route path="actors-info" element={<ActorsInfo />} />
          </Route>
          <Route path="movie/top-rated/" element={<TopRatedPage />} />
          <Route
            path="movie/expected-movies/"
            element={<ExpectedMoviesPage />}
          />
          <Route path="/movies/:movieId" element={<MoviesDetalis />}>
            <Route path="cast" element={<CastMovie />} />
            <Route path="review" element={<Reviews />} />
          </Route>
          <Route path="/genre/:id" element={<GenresPage />} />
          <Route path="*" element={<HomePage />} />
        </Routes>
      </Suspense>
    </>
  );
}

export default App;
