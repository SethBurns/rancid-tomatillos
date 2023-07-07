// App.js //

import './App.css';
// import movieData from './Data';
import Movies from './components/Movies/Movies';
import MovieDetails from './components/MovieDetails/MovieDetails';
import { useState, useEffect } from 'react';

function App() {
  // console.log('render')

  const [movies, setMovies] = useState([]);
  const [selectedMovie, setSelectedMovie] = useState(null);
  // const [show, setShow] = useState(true);
  const [error, setError] = useState('');

  const getMovies = async () => {
    const url = `https://rancid-tomatillos.herokuapp.com/api/v2/movies`;
    setError('');

    try {
      const response = await fetch(url);
      const movies = await response.json();
      setMovies(movies.movies);
    } catch (error) {
      setError(error.message);
    }
  };

  useEffect(() => {
    getMovies();
  }, []);

  // useEffect(() => {
  //   findMovie();
  // }, [show]);

  const findMovie = async (id) => {
    console.log('id', id)
    // setShow(false);

    const url = `https://rancid-tomatillos.herokuapp.com/api/v2/movies/${id}`;
    setError('');

    try {
      const response = await fetch(url);
      const movie = await response.json();
      console.log('movie', movie)
      setSelectedMovie(movie.movie);
      console.log('selectedMovie', selectedMovie);
    } catch (error) {
      setError(error.message);
    }
  };

  function returnHome() {
    setSelectedMovie(null);
  }

  return (
    <main className="App">
      <h1>Rancid Tomatillos</h1>
      {!selectedMovie && <Movies movies={movies} findMovie={findMovie} />}
      {selectedMovie && <MovieDetails movie={selectedMovie} returnHome={returnHome} />}
    </main>
  );
}

export default App;
