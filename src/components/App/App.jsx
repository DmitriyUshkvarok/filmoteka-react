import { lazy, Suspense } from 'react';
import { Route, Routes } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Header from 'components/Header/Header';
import { Loader, StyledScrollToTop } from './App.styled';

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
  return (
    <>
      <ToastContainer />
      <Header />
      <StyledScrollToTop smooth />
      <Suspense fallback={<Loader>Loading...</Loader>}>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="movies" element={<MoviesPage />} />
          <Route path="registration" element={<RegistrationPage />} />
          <Route path="login" element={<LoginPage />} />
          <Route path="library" element={<LibraryPage />} />
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
