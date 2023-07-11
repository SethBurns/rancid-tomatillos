// MovieDetails.js //

import './MovieDetails.css'
import VideoLinks from '../VideoLinks/VideoLinks'

export default function MovieDetails ({ movie, returnHome, videos } ) {
  return (
    <div className="movie_details" style={{backgroundImage: `url(${movie.backdrop_path})`}}>
      <div className="btn_div">
        <button className="btn_exit" onClick={() => returnHome(movie)}>X</button>
      </div>
      <div className="movie_details_left">
        <h1>{movie.title}</h1>
        <img alt="movie poster" src={movie.poster_path} width="300px"/>
        <p>{movie.tagline}</p>
      </div>
      <div className="movie_details_middle">
        <p>Overview: {movie.overview}</p>
      </div>
      <div className="movie_details_right">
        <p>Average Rating: {movie.average_rating.toFixed(2)}</p>
        <p>Release Date: {movie.release_date}</p>
        <p>Budget: ${movie.budget.toLocaleString()}</p>
        <p>Revenue: ${movie.revenue.toLocaleString()}</p>
        <p>Profit: ${(movie.revenue - movie.budget).toLocaleString()}</p>
        <VideoLinks videos={videos} />
      </div>
    </div>
  )
}
