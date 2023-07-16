// App.js //

// IMPORTS //

import './App.css';
import { Routes, Route, Navigate } from 'react-router-dom';
import Header from './components/Header/Header';
import Movies from './components/Movies/Movies';
import MovieDetails from './components/MovieDetails/MovieDetails';
import { useState, useEffect } from 'react';
import { getMovies, getMovie } from './api-calls/api-calls';
import Search from './components/Search/Search';

function App() {

  // DATA MODEL //

  const [movies, setMovies] = useState([]);
  const [selectedMovie, setSelectedMovie] = useState(null);
  const [error, setError] = useState('');
  const [videos, setVideos] = useState([]);
  const [filteredMovies, setFilteredMovies] = useState([]);

  // API CALLS //

  useEffect(() => {
    getMovies()
      .then(data => {
        setMovies(data.movies)
      })
      .catch(error => {
        setError(`Something went wrong: ${error.message}`)
      })
  }, []);

  function findMovie(id) {
   const [response1, response2] = getMovie(id, setError, setSelectedMovie, setVideos)
    response1.then(data => {
      setSelectedMovie(data.movie)
    })
    .catch(error => {
      console.log(error)
      setError(error.message)
    })

    response2.then(data => {
      setVideos(data.videos)
    })
    .catch(error => {
      setError(error.message)
    })
  }


  

  // RENDER //

  return (
      <main className="App">      
        <Header />
        <Search setFilteredMovies={setFilteredMovies} movies={movies} filteredMovies={filteredMovies} />
        <p>{error}</p>
        <Routes>
          <Route path="/" element = {<Movies movies={movies} />}></Route>
          <Route path="/search/:searchTerm" element={<Movies movies={filteredMovies} />}></Route>
          <Route path="/search" element={<Navigate to ="/" />}></Route>
          <Route path="/:id" element={<MovieDetails selectedMovie={selectedMovie} findMovie={findMovie} videos={videos}/>}></Route>
        </Routes>
      </main>
  )
};

export default App;


// filterMovies function in App
  // pass filterMovies into Search component
 // filterMovies filters movies and sets filteredMovies state