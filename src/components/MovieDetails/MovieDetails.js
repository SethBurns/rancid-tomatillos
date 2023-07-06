// MovieDetails.js //

import './MovieDetails.css'

export default function MovieDetails (props) {
  console.log(props)
  return (
    <div className="movie_details" style={{backgroundImage: `url(${props.movie.backdrop_path})`}}>
      <h1>{props.movie.title}</h1>
      <img src={props.movie.poster_path} width="300px" />
      <div className="details_container">
        <p>Average Rating: {props.movie.average_rating.toFixed(2)}</p>
        <p>Release Date: {props.movie.release_date}</p>
      </div>
    </div>
  )
}
