// MovieDetails.js //

import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

export default function MovieDetails({ movieId, returnHome, videos }) {
  const [selectedMovie, setSelectedMovie] = useState(null);
  const [error, setError] = useState('');

  const findMovie = async (movieId) => {
    const url1 = `https://rancid-tomatillos.herokuapp.com/api/v2/movies/${movieId}`;
    // const url2 = `https://rancid-tomatillos.herokuapp.com/api/v2/movies/${movieId}/videos`;
    setError('');

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
  };

  useEffect(() => {
    findMovie(movieId);
  }, []);

  return (
    <div className="movie_details" style={{ backgroundImage: `url(${selectedMovie?.backdrop_path})` }}>
      <div className="btn_div">
        <Link to="/"><button className="btn_exit" onClick={() => returnHome(selectedMovie)}>X</button></Link>
      </div>
      <div className="movie_details_left">
        <h1>{selectedMovie?.title}</h1>
        <img alt="movie poster" src={selectedMovie?.poster_path} width="300px" />
        <p>{selectedMovie?.tagline}</p>
      </div>
      <div className="movie_details_middle">
        <p>Overview: {selectedMovie?.overview}</p>
      </div>
      <div className="movie_details_right">
        <p>Average Rating: {selectedMovie?.average_rating?.toFixed(2)}</p>
        <p>Release Date: {selectedMovie?.release_date}</p>
        <p>Budget: ${selectedMovie?.budget?.toLocaleString()}</p>
        <p>Revenue: ${selectedMovie?.revenue?.toLocaleString()}</p>
        <p>Profit: ${(selectedMovie?.revenue - selectedMovie?.budget)?.toLocaleString()}</p>
        {/* <VideoLinks videos={videos} /> */}
      </div>
    </div>
  );
}