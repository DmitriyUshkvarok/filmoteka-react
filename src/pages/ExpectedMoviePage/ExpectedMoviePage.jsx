import Container from 'components/Container/Container';
import MoviesList from 'components/MoviesList/MoviesList';
import apiTheMovieDB from 'service/kino-api';
import ButtonBack from 'components/ButtonBack/ButtonBack';
import {
  CardsLoader,
  ExpectedTitle,
  BtnBackExpectedWrapper,
} from './ExpectedMoviePage.styled';
import css from '../ActorsPage/ActorsPage.module.css';
import { toast } from 'react-toastify';
import { useState, useEffect, useContext } from 'react';
import ReactPaginate from 'react-paginate';
import { Link, useLocation } from 'react-router-dom';
import { LanguageContext } from 'components/context/languageContext';

const ExpectedMoviePage = () => {
  const [movies, setMovie] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(0);
  const location = useLocation();
  const backLink = location.state?.from ?? '/';
  const { selectedLanguage } = useContext(LanguageContext);

  useEffect(() => {
    apiTheMovieDB
      .fetchWaitingForTheMovies(currentPage, selectedLanguage.iso_639_1)
      .then(({ results, total_pages }) => {
        setMovie(results);
        setTotalPages(Math.min(total_pages, 500));
        if (results.length === 0) {
          toast.error("sorry, that's all the actors we could find");
        }
      })
      .catch(error => {
        setError(error);
      })
      .finally(() => setLoading(false));
  }, [currentPage, selectedLanguage.iso_639_1]);

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
        <BtnBackExpectedWrapper>
          <Link to={backLink}>
            <ButtonBack />
          </Link>
        </BtnBackExpectedWrapper>
        <ExpectedTitle>Expected Movies </ExpectedTitle>
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

export default ExpectedMoviePage;
