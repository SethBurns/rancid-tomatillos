// MovieDetails.js //

import './MovieDetails.css'

export default function MovieDetails ({ movie, returnHome } ) {
  
  return (
    <div className="movie_details" style={{backgroundImage: `url(${movie.backdrop_path})`}}>
      <button className="btn_exit" onClick={() => returnHome(movie)}>X</button>
      <h1>{movie.title}</h1>
      <img alt="movie poster" src={movie.poster_path} width="300px"/>
      <div className="details_container">
        <p>Average Rating: {movie.average_rating.toFixed(2)}</p>
        <p>Release Date: {movie.release_date}</p>
        <p>Overview: {movie.overview}</p>
      </div>
    </div>
  )
}
