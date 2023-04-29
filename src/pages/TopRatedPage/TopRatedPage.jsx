import Container from 'components/Container/Container';
import MoviesList from 'components/MoviesList/MoviesList';
import css from '../ActorsPage/ActorsPage.module.css';
import {
  TitleTopRating,
  CardsLoader,
  BtnWrapperTop,
} from './TopRatedPage.styled';
import { Link, useLocation } from 'react-router-dom';
import { toast } from 'react-toastify';
import apiTheMovieDB from '../../service/kino-api';
import { useState, useEffect } from 'react';
import ReactPaginate from 'react-paginate';
import ButtonBack from 'components/ButtonBack/ButtonBack';

const TopRatedPage = () => {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [totalPages, setTotalPages] = useState(0);
  const [currentPage, setCurrentPage] = useState(1);
  const location = useLocation();
  const backLink = location.state?.from ?? '/';

  useEffect(() => {
    apiTheMovieDB
      .fetchFilmsByRating(currentPage)
      .then(({ results, total_pages }) => {
        setMovies(results);
        setTotalPages(Math.min(total_pages, 500));

        if (results.length === 0) {
          toast.error("sorry, that's all the actors we could find");
        }
      })
      .catch(error => {
        setError(error);
      })
      .finally(() => setLoading(false));
  }, [currentPage]);

  if (error) {
    return <p>{error.message}</p>;
  }

  const handlePageChange = ({ selected }) => {
    if (selected + 1 > totalPages) {
      return;
    }
    setCurrentPage(selected + 1);
  };

  return (
    <>
      <Container>
        <BtnWrapperTop>
          <Link to={backLink}>
            <ButtonBack />
          </Link>
        </BtnWrapperTop>
        <TitleTopRating>Top rating movies</TitleTopRating>
        {loading ? (
          <CardsLoader size={50} />
        ) : (
          <>
            <MoviesList movies={movies} />
          </>
        )}
        <ReactPaginate
          pageCount={totalPages}
          pageRangeDisplayed={2}
          marginPagesDisplayed={1}
          onPageChange={handlePageChange}
          containerClassName={css.pagination}
          pageClassName={css.page}
          activeClassName={css.active}
          previousClassName={css.previous}
          nextClassName={css.next}
          disabledClassName={css.disabled}
          breakClassName={css.break}
          previousLabel={'previous'}
          nextLabel={'next'}
          breakLabel={'...'}
        />
      </Container>
    </>
  );
};

export default TopRatedPage;
