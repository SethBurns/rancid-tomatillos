// MovieDetails.js //

import { useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import './MovieDetails.css'
import VideoLinks from '../VideoLinks/VideoLinks'

export default function MovieDetails({ findMovie, selectedMovie, videos }) {
  const {id} = useParams()

  useEffect(() => {
    findMovie(id);
  }, []);

  if (selectedMovie) {
    return (
      <div className="movie_details" style={{ backgroundImage: `url(${selectedMovie?.backdrop_path})` }}>
        <div className="btn_div">
          <Link to="/"><button className="btn_exit">X</button></Link>
        </div>
        <div className="movie_details_left">
          <h1>{selectedMovie.title}</h1>
          <img alt="movie poster" src={selectedMovie.poster_path} width="300px" />
          <p>{selectedMovie.tagline}</p>
        </div>
        <div className="movie_details_middle">
          <p>Overview: {selectedMovie.overview}</p>
        </div>
        <div className="movie_details_right">
          <p>Average Rating: {selectedMovie.average_rating.toFixed(2)}</p>
          <p>Release Date: {selectedMovie.release_date}</p>
          <p>Budget: ${selectedMovie.budget.toLocaleString()}</p>
          <p>Revenue: ${selectedMovie.revenue.toLocaleString()}</p>
          <p>Profit: ${(selectedMovie.revenue - selectedMovie.budget).toLocaleString()}</p>
          <VideoLinks videos={videos} />
        </div>
      </div>
    );
  }
}