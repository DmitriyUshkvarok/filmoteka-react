import { useEffect, useState, useCallback } from 'react';
import { useParams } from 'react-router-dom';
import apiTheMovieDB from 'service/kino-api';
import InfiniteScroll from 'react-infinite-scroll-component';
import MoviesList from 'components/MoviesList/MoviesList';
import { toast } from 'react-toastify';
import { GenreListMoviesContainer, GenreTitle } from './GenrePage.styled.js';

function GenrePage() {
  const { id } = useParams();
  const [movies, setMovies] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(0);

  const fetchMovies = useCallback(async () => {
    try {
      const data = await apiTheMovieDB.fetchByGenre(id, currentPage);
      setMovies(prevMovies => [...prevMovies, ...data.results]);
    } catch (error) {
      toast.error('Failed to fetch movies.');
    }
  }, [id, currentPage]);

  useEffect(() => {
    const fetchMovies = async () => {
      const data = await apiTheMovieDB.fetchByGenre(id, 1);
      setMovies(data.results);
      setTotalPages(data.total_pages);
    };
    fetchMovies();
  }, [id]);

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
