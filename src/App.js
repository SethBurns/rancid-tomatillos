// App.js //

import './App.css';
import movieData from './Data';
import { useState } from 'react';

function App() {

  const [movies, setMovies] = useState(movieData);

  return (
    <main className='App'>
      <h1>Rancid Tomatillos</h1>
      <Movies movies={movies} />
    </main>
  );
}

export default App;
