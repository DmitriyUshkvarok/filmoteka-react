import axios from 'axios';

const URL = `https://api.themoviedb.org/3/`;
const key = 'f27eea818d2010463700365b0c06a16e';

function fetchTrending(page = 1, selectedLanguage = 'en') {
  return axios
    .get(
      `${URL}trending/all/day?api_key=${key}&page=${page}&language=${selectedLanguage}`
    )
    .then(response => response.data.results);
}

function fetchSearchMovie(query, page = 1) {
  return axios
    .get(
      `${URL}search/movie?query=${query}&api_key=${key}&page=${page}&language=en-US`
    )
    .then(response => response.data.results);
}

function fetchMovieDetalis(id, selectedLanguage = 'en') {
  return axios
    .get(`${URL}movie/${id}?api_key=${key}&language=${selectedLanguage}`)
    .then(response => response.data);
}

function fetchMovieCredits(id, selectedLanguage = 'en') {
  return axios
    .get(
      `${URL}movie/${id}/credits?api_key=${key}&language=${selectedLanguage}`
    )
    .then(response => response.data);
}

function fetchMovieReview(id, selectedLanguage = 'en') {
  return axios
    .get(
      `${URL}movie/${id}/reviews?api_key=${key}&language=${selectedLanguage}`
    )
    .then(response => response.data.results);
}

function fetchTrailerMovies(movieId, selectedLanguage = 'en') {
  return axios
    .get(
      `${URL}movie/${movieId}/videos?api_key=${key}&language=${selectedLanguage}`
    )
    .then(response => response.data.results);
}

function fetchAllgenres(selectedLanguage = 'en') {
  return axios
    .get(`${URL}/genre/movie/list?api_key=${key}&language=${selectedLanguage}`)
    .then(response => response.data.genres);
}

function fetchByGenre(id, page = 1, selectedLanguage = 'en') {
  return axios
    .get(
      `${URL}/discover/movie?api_key=${key}&with_genres=${id}&page=${page}&language=${selectedLanguage}`
    )
    .then(response => response.data);
}

function fetchActors(page = 1, query = '', selectedLanguage = 'en') {
  const url = query
    ? `${URL}search/person?api_key=${key}&page=${page}&query=${query}&language=${selectedLanguage}`
    : `${URL}person/popular?api_key=${key}&page=${page}&language=${selectedLanguage}`;
  return axios.get(url).then(response => response.data);
}

function fetchMoviesbyActors(id, page = 1, selectedLanguage = 'en') {
  return axios
    .get(
      `${URL}person/${id}/movie_credits?api_key=${key}&page=${page}&language=${selectedLanguage}`
    )
    .then(response => response.data.cast);
}

function fetchActorInfoAndMovies(id, selectedLanguage = 'en') {
  return axios
    .get(`${URL}person/${id}?api_key=${key}&language=${selectedLanguage}`)
    .then(response => response.data);
}

function fetchByYear(page = 1, selectedYear, selectedLanguage = 'en') {
  return axios
    .get(
      `${URL}discover/movie?api_key=${key}&sort_by=popularity.desc&page=${page}&primary_release_year=${selectedYear}&language=${selectedLanguage}`
    )
    .then(response => response.data.results);
}

function fetchExpectedMovies(selectedLanguage = 'en') {
  return axios
    .get(`${URL}/movie/upcoming?api_key=${key}&language=${selectedLanguage}`)
    .then(response => response.data.results);
}

function fetchFilmsByRating(currentPage = 1, selectedLanguage = 'en') {
  return axios
    .get(
      `${URL}/movie/top_rated?api_key=${key}&page=${currentPage}&language=${selectedLanguage}`
    )
    .then(response => response.data);
}

function fetchWaitingForTheMovies(currentPage = 1, selectedLanguage = 'en') {
  return axios
    .get(
      `${URL}/movie/upcoming?api_key=${key}&primary_release_date.gte=${new Date()
        .toISOString()
        .slice(0, 10)}&page=${currentPage}&language=${selectedLanguage}`
    )
    .then(response => response.data);
}

function fetchNewMoviesNotification(page, selectedLanguage = 'en') {
  const today = new Date().toISOString().slice(0, 10);
  const url = `${URL}/discover/movie?api_key=${key}&primary_release_date.gte=${today}&sort_by=primary_release_date.asc&page=${page}&language=${selectedLanguage}`;

  return axios.get(url).then(response => response.data.results);
}

const apiTheMovieDB = {
  fetchMoviesbyActors,
  fetchActorInfoAndMovies,
  fetchTrending,
  fetchSearchMovie,
  fetchMovieDetalis,
  fetchMovieCredits,
  fetchMovieReview,
  fetchTrailerMovies,
  fetchAllgenres,
  fetchByGenre,
  fetchActors,
  fetchByYear,
  fetchExpectedMovies,
  fetchFilmsByRating,
  fetchWaitingForTheMovies,
  fetchNewMoviesNotification,
};

export default apiTheMovieDB;
