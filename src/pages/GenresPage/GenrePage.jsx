import { useEffect, useState, useCallback, useContext } from 'react';
import { useParams } from 'react-router-dom';
import apiTheMovieDB from 'service/kino-api';
import InfiniteScroll from 'react-infinite-scroll-component';
import MoviesList from 'components/MoviesList/MoviesList';
import { toast } from 'react-toastify';
import { GenreListMoviesContainer, GenreTitle } from './GenrePage.styled.js';
import { LanguageContext } from 'components/context/languageContext';

function GenrePage() {
  const { id } = useParams();
  const [movies, setMovies] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(0);
  const { selectedLanguage } = useContext(LanguageContext);

  const fetchMovies = useCallback(async () => {
    try {
      const data = await apiTheMovieDB.fetchByGenre(
        id,
        currentPage,
        selectedLanguage.iso_639_1
      );
      setMovies(prevMovies => [...prevMovies, ...data.results]);
    } catch (error) {
      toast.error('Failed to fetch movies.');
    }
  }, [id, currentPage, selectedLanguage]);

  useEffect(() => {
    const fetchMovies = async () => {
      const data = await apiTheMovieDB.fetchByGenre(
        id,
        1,
        selectedLanguage.iso_639_1
      );
      setMovies(data.results);
      setTotalPages(data.total_pages);
    };
    fetchMovies();
  }, [id, selectedLanguage]);

  useEffect(() => {
    if (currentPage > 1) {
      fetchMovies();
    }
  }, [fetchMovies, currentPage]);

  return (
    <GenreListMoviesContainer>
      <GenreTitle>Movies by genre</GenreTitle>
      <InfiniteScroll
        dataLength={movies.length}
        next={() => setCurrentPage(currentPage + 1)}
        hasMore={movies.length < totalPages}
        loader={<h4>Loading...</h4>}
      >
        <MoviesList movies={movies} />
      </InfiniteScroll>
    </GenreListMoviesContainer>
  );
}

export default GenrePage;
