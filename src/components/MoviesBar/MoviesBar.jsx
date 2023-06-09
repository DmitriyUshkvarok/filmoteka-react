import css from './MoviesBar.module.css';
import { Link, useLocation } from 'react-router-dom';
import SearchByYears from 'components/SearchByYear/SearchByYear';

function MoviesBar() {
  const location = useLocation();

  return (
    <div className={css.movieBarWrapper}>
      <ul className={css.movieBarList}>
        <li className={css.movieBarListItem}>
          <Link to={`/movie/actors/`} state={{ from: location }}>
            Actors
          </Link>
        </li>
        <li className={css.movieBarListItem}>
          <Link to={`/movie/top-rated/`} state={{ from: location }}>
            Top Rated
          </Link>
        </li>
        <li className={css.movieBarListItem}>
          <Link to={`/movie/expected-movies/`} state={{ from: location }}>
            Expected Movies
          </Link>
        </li>
      </ul>
      <div>
        <SearchByYears />
      </div>
    </div>
  );
}
export default MoviesBar;
