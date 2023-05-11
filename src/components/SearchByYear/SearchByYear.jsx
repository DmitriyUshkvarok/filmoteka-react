import { useState, useEffect, useContext } from 'react';
import {
  CardsLoader,
  SelectWrapper,
  SelectedYear,
  SelectLabel,
  SearchText,
  StyleSelect,
} from './SearchByYear.styled';
import apiTheMovieDB from 'service/kino-api';
import { toast } from 'react-toastify';
import MoviesList from 'components/MoviesList/MoviesList';
import ButtonLoadMore from 'components/ButtonLoadMore/ButtonLoadMore';
import Container from 'components/Container/Container';
import { animateScroll as scroll } from 'react-scroll';
import { LanguageContext } from 'components/context/languageContext';

function SearchByYears() {
  const [selectedYear, setSelectedYear] = useState(0);
  const [movies, setMovies] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  const [page, setPage] = useState(1);
  const [showButton, setShowButton] = useState(false);
  const { selectedLanguage } = useContext(LanguageContext);

  useEffect(() => {
    if (selectedYear !== 0) {
      const fetchMovies = async () => {
        setLoading(true);
        try {
          const newMovies = await apiTheMovieDB.fetchByYear(
            page,
            selectedYear,
            selectedLanguage.iso_639_1
          );
          if (newMovies.length === 0) {
            setShowButton(false);
            if (page === 1) {
              setMovies([]);
              toast.error("Sorry, we couldn't find any movies for that year.");
            } else {
              toast.error("That's all the movies we could find for that year.");
            }
          } else {
            setShowButton(true);
            setMovies(prevMovies => [...prevMovies, ...newMovies]);
          }
        } catch (error) {
          setError(error);
        } finally {
          setLoading(false);
        }
      };

      fetchMovies();
    }
  }, [page, selectedLanguage, selectedYear]);

  if (error) {
    return <p>{error.message}</p>;
  }

  const yearOptions = [];
  const currentYear = new Date().getFullYear();
  for (let year = currentYear; year >= currentYear - 50; year--) {
    yearOptions.push(year);
  }

  const hendleIncrement = () => {
    setPage(page + 1);

    scroll.scrollToBottom({
      duration: 2000,
      smooth: 'easeInOutQuad',
      offset: 0.2,
    });
  };

  return (
    <>
      <Container>
        <SelectWrapper>
          <SelectedYear>
            <SelectLabel htmlFor="year-select">Select a year:</SelectLabel>
            <StyleSelect
              classNamePrefix="react-select"
              name="year-select"
              id="year-select"
              value={{ value: selectedYear, label: selectedYear }}
              onChange={selectedOption => setSelectedYear(selectedOption.value)}
              options={yearOptions.map(year => ({
                value: year,
                label: year,
              }))}
              placeholder="Select a year"
              menuPlacement="auto"
            />
          </SelectedYear>
        </SelectWrapper>
        {movies.length > 0 ? (
          <MoviesList movies={movies} />
        ) : loading ? (
          <CardsLoader size={50} />
        ) : (
          <SearchText>Please select a year to see movies.</SearchText>
        )}
        {showButton && <ButtonLoadMore hendleIncrement={hendleIncrement} />}
      </Container>
    </>
  );
}

export default SearchByYears;
