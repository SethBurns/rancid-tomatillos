// App.js //

import './App.css';
// import movieData from './Data';
import Header from './components/Header/Header';
import Movies from './components/Movies/Movies';
import MovieDetails from './components/MovieDetails/MovieDetails';
import { useState, useEffect } from 'react';

function App() {

  const [movies, setMovies] = useState([]);
  const [selectedMovie, setSelectedMovie] = useState(null);
  const [error, setError] = useState('');
  const [videos, setVideos] = useState([]);

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

  const findMovie = async (id) => {
    const url1 = `https://rancid-tomatillos.herokuapp.com/api/v2/movies/${id}`;
    const url2 = `https://rancid-tomatillos.herokuapp.com/api/v2/movies/${id}/videos`;
    setError('');

    try {
      const response1 = await fetch(url1);
      const movieResponse = await response1.json();
      setSelectedMovie(movieResponse.movie);
      console.log('selectedMovie', selectedMovie);

      const response2 = await fetch(url2);
      const videosResponse = await response2.json();
      setVideos(videosResponse.videos)
    } catch (error) {
      setError(error.message);
    }
  };

  function returnHome() {
    setSelectedMovie(null);
  };

  return (
    <main className="App">
      <Header/>
      {!selectedMovie && <Movies movies={movies} findMovie={findMovie} />}
      {selectedMovie && <MovieDetails movie={selectedMovie} returnHome={returnHome} videos={videos} />}
    </main>
  );
};

export default App;
