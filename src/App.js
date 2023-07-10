// App.js //

import './App.css';
import { Link, Routes, Route } from 'react-router-dom';
// import movieData from './Data';
import Header from './components/Header/Header';
import Movies from './components/Movies/Movies';
import MovieDetails from './components/MovieDetails/MovieDetails';
import { useState, useEffect } from 'react';

function App() {

  const [movies, setMovies] = useState([]);
  const [selectedMovie, setSelectedMovie] = useState(null);
  const [error, setError] = useState('');
  const [movieId, setMovieId] = useState('');
  // const [videos, setVideos] = useState([]);

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

  // const findMovie = async (id) => {
  //   const url1 = `https://rancid-tomatillos.herokuapp.com/api/v2/movies/${id}`;
  //   // const url2 = `https://rancid-tomatillos.herokuapp.com/api/v2/movies/${id}/videos`;
  //   setError('');
  //   try {
  //     const response1 = await fetch(url1);
  //     if (response1.ok) {
  //       const movieResponse = await response1.json();
  //       setSelectedMovie(movieResponse.movie);
  //     } else {
  //       console.log(response1)
  //       setError(`${response1.status} ${response1.statusText}`);
  //     }
  //   } catch (error) {
  //     setError(error.message);
  //   }

    //   const response2 = await fetch(url2);
    //   const videosResponse = await response2.json();
    //   setVideos(videosResponse.videos)
    // } catch (error) {
    //   setError(error.message);
    // }


  function returnHome() {
    setSelectedMovie(null);
  };

  return (
      <main className="App">
        
        <Header/>
        <p>{error}</p>
        <Routes>
        <Route path="/" element = {<Movies movies={movies} setMovieId={setMovieId} />}></Route>
        {/* <Route path="/:id" element={<MovieDetails movie={selectedMovie} returnHome={returnHome}/>}></Route> */}
        <Route path="/:id" element={<MovieDetails movieId={movieId} returnHome={returnHome}/>}></Route>
        </Routes>
      </main>
  )
};

export default App;
