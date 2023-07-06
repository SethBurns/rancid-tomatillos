// App.js //

import './App.css';
import movieData from './Data';
import Movies from './components/Movies/Movies';
import { useState } from 'react';

function App() {

  const [movies, setMovies] = useState(movieData.movies);

  return (
    <main className='App'>
      <h1>Rancid Tomatillos</h1>
      <Movies movies={movies} />
    </main>
  );
}

export default App;
