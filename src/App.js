// App.js //

import './App.css';
import movieData from './Data';
import Movies from './components/Movies/Movies';
import MovieDetails from './components/MovieDetails/MovieDetails';
import { useState } from 'react';

function App() {

  const [movies, setMovies] = useState(movieData.movies);
  const [selectedMovie, setSelectedMovie] = useState(null);

  const findMovie =(id) => {
    const movie = movies.find(movie => movie.id === id)
    setSelectedMovie(movie)
    console.log(selectedMovie)
  }

  return (
    <main className='App'>
      <h1>Rancid Tomatillos</h1>
      <Movies movies={movies} findMovie={findMovie}/>
      {selectedMovie && <MovieDetails movie={selectedMovie} />}
    </main>
  );
}

export default App;
