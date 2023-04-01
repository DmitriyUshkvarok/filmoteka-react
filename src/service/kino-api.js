import axios from 'axios';
const URL = `https://api.themoviedb.org/3/`;
const key = 'f27eea818d2010463700365b0c06a16e';

function fetchTrending(page = 1) {
  return axios
    .get(`${URL}trending/all/day?api_key=${key}&page=${page}`)
    .then(response => response.data.results);
}

function fetchSearchMovie(query, page = 1) {
  return axios
    .get(`${URL}search/movie?query=${query}&api_key=${key}&page=${page}`)
    .then(response => response.data.results);
}

function fetchMovieDetalis(id) {
  return axios
    .get(`${URL}movie/${id}?api_key=${key}`)
    .then(response => response.data);
}

function fetchMovieCredits(id) {
  return axios
    .get(`${URL}movie/${id}/credits?api_key=${key}`)
    .then(response => response.data);
}

function fetchMovieReview(id) {
  return axios
    .get(`${URL}movie/${id}/reviews?api_key=${key}`)
    .then(response => response.data.results);
}

function fetchTrailerMovies(movieId) {
  return axios
    .get(`${URL}movie/${movieId}/videos?api_key=${key}`)
    .then(response => response.data.results);
}

function fetchAllgenres() {
  return axios
    .get(`${URL}/genre/movie/list?api_key=${key}`)
    .then(response => response.data.genres);
}

function fetchByGenre(id, page = 1) {
  return axios
    .get(`${URL}/discover/movie?api_key=${key}&with_genres=${id}&page=${page}`)
    .then(response => response.data);
}

function fetchActors(page = 1, query = '') {
  const url = query
    ? `${URL}search/person?api_key=${key}&page=${page}&query=${query}`
    : `${URL}person/popular?api_key=${key}&page=${page}`;
  return axios.get(url).then(response => response.data);
}

function fetchMoviesbyActors(id, page = 1) {
  return axios
    .get(`${URL}person/${id}/movie_credits?api_key=${key}&page=${page}`)
    .then(response => response.data.cast);
}

// function fetchActorInfoAndMovies(id, page = 1) {
//   const actorInfo = axios
//     .get(`${URL}person/${id}?api_key=${key}&language=ru-RU`)
//     .then(response => response.data);
//   const actorMovies = axios
//     .get(
//       `${URL}person/${id}/movie_credits?api_key=${key}&language=ru-RU&page=${page}`
//     )
//     .then(response => response.data.cast);

//   return Promise.all([actorInfo, actorMovies]).then(results => {
//     const [info, movies] = results;
//     return {
//       actorInfo: info,
//       actorMovies: movies,
//     };
//   });
// }

function fetchByYear(page = 1, selectedYear) {
  return axios
    .get(
      `${URL}discover/movie?api_key=${key}&sort_by=popularity.desc&page=${page}&primary_release_year=${selectedYear}`
    )
    .then(response => response.data.results);
}

function fetchExpectedMovies() {
  return axios
    .get(`${URL}/movie/upcoming?api_key=${key}`)
    .then(response => response.data.results);
}

function fetchFilmsByRating(currentPage = 1) {
  return axios
    .get(`${URL}/movie/top_rated?api_key=${key}&page=${currentPage}`)
    .then(response => response.data);
}

function fetchWaitingForTheMovies(currentPage = 1) {
  return axios
    .get(
      `${URL}/movie/upcoming?api_key=${key}&primary_release_date.gte=${new Date()
        .toISOString()
        .slice(0, 10)}&page=${currentPage}`
    )
    .then(response => response.data);
}

const apiTheMovieDB = {
  fetchMoviesbyActors,
  // fetchActorInfoAndMovies,
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
};

export default apiTheMovieDB;
