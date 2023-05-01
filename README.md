Movie Collection App This is a simple web application for managing a movie
collection. It allows users to register and login, add movies to their
collection, and view their library.

Getting Started To use the application, you need to register an account on the
server at https://connections-api.herokuapp.com/. Once you have an account, you
can login to the app and start adding movies to your collection.

Adding Movies To add a movie to your collection, simply search for it by title,
select the result you want, and click the "Add to Collection" button. You will
receive a notification confirming that the movie has been added, and you will be
automatically redirected to your library page.

Viewing Your Library To view your library, click the "Library" link in the
navigation bar. You will see a list of all the movies in your collection, along
with their title, year of release, and poster image.

Technical Details The application is built using React.js for the front-end and
communicates with the server at https://connections-api.herokuapp.com/ for user
authentication and movie data. The app uses the TMDB API
(https://www.themoviedb.org/documentation/api) to search for movies and retrieve
their details. Notifications are implemented using the react-toastify library
(https://fkhadra.github.io/react-toastify/).

Filmoteka App Filmotheque is an 11-page application with extensive functionality
for movie enthusiasts. The main page has a fixed header with navigation, a
registration or login form, a user bar, an animated logo, a theme toggle button,
and a new movie notifications button. There is also a logout button available.
Upon registration, users gain the ability to add movies to their favorites
library and receive notifications about new movies.

The main page features a carousel of movies currently playing in theaters, a
movie genre menu, and a collection of movie cards with infinite scroll. Clicking
on a card opens a detailed movie page where users can watch the trailer, see
actors who starred in the movie, view the rating, genre, description, and add
the movie to their favorites library or leave a review.

On the movies page, there is a search form by movie title, a form to choose
movies by year, as well as the ability to navigate to the top-rated movies page
and the upcoming movies page.

On the actors page, there is digital pagination to navigate to the next page of
actor lists, as well as a dynamic search form by letters to find actors.
Clicking on an actor card takes the user to a page with information about the
actor and a list of all the movies they have starred in. In the actor
information section, there is a function to open and close text if there is a
lot of it.

The app features smooth scrolling to the top of the page, a back button to
return to the previous page, and a scroll-to-top button. Clicking on a movie
image on the movie details page opens a high-quality trailer of the movie.

Movie ratings are dynamically implemented as stars or numbers wrapped in
different colored wrappers depending on the height of the rating. Users can view
and delete movies they've added to their library on the library page. The
registration and login forms have character and type validation prompts, as well
as a show/hide password function.

The libraries used in the app include:

axios debounce formik notiflix prop-types react-icons
react-infinite-scroll-component react-loader-spinner react-paginate react-player
react-redux react-router-dom react-scroll react-scroll-to-top react-select
react-spinners

Issues and Contributing If you encounter any issues with the application or
would like to contribute to its development, please open an issue or pull
request on the GitHub repository
(https://github.com/DmitriyUshkvarok/filmoteka-react).
