// App.js //

import './App.css';
import { Routes, Route } from 'react-router-dom';
// import movieData from './Data';
import Header from './components/Header/Header';
import Movies from './components/Movies/Movies';
import MovieDetails from './components/MovieDetails/MovieDetails';
import { useState, useEffect } from 'react';

function App() {

  // DATA MODEL //

  const [movies, setMovies] = useState([]);
  const [selectedMovie, setSelectedMovie] = useState(null);
  const [error, setError] = useState('');
  const [videos, setVideos] = useState([]);



  // API CALLS //

  useEffect(() => {
    getMovies();
  }, []);

  const getMovies = async () => {
    const url = `https://rancid-tomatillos.herokuapp.com/api/v2/movies`;
    setError('');

    try {
      const response = await fetch(url);
      if (response.ok) {
        const movieResponse = await response.json();
        setMovies(movieResponse.movies);
      } else {
        console.log(response)
        setError(`${response.status} ${response.statusText}`);
      }
      } catch (error) {
      setError(error.message);
    }
  }

  useEffect(() => {
    getMovies();
  }, []);

  const findMovie = async (id) => {
    const url1 = `https://rancid-tomatillos.herokuapp.com/api/v2/movies/${id}`;
    const url2 = `https://rancid-tomatillos.herokuapp.com/api/v2/movies/${id}/videos`;
    setError('');
    setSelectedMovie('');

    try {
      const response1 = await fetch(url1);
      if (response1.ok) {
        const movieResponse = await response1.json();
        setSelectedMovie(movieResponse.movie);
        console.log(selectedMovie);
      } else {
        console.log(response1);
        setError(`${response1.status} ${response1.statusText}`);
      }
    } catch (error) {
      setError(error.message);
    }
    try {
      const response2 = await fetch(url2);
      if (response2.ok) {
      const videosResponse = await response2.json();
      setVideos(videosResponse.videos)
      } else {
        console.log(response2)
        setError(`${response2.status} ${response2.statusText}`)
      }
    } catch (error) {
      setError(error.message);
    }
  };

  return (
      <main className="App">      
        <Header/>
        <p>{error}</p>
        <Routes>
          <Route path="/" element = {<Movies movies={movies} findMovie={findMovie} />}></Route>
          {/* <Route path="/:id" element={<MovieDetails movie={selectedMovie} returnHome={returnHome}/>}></Route> */}
          <Route path="/:id" element={<MovieDetails selectedMovie={selectedMovie} findMovie={findMovie} videos={videos}/>}></Route>
        </Routes>
      </main>
  )
};

export default App;
