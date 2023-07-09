// Movies.js //

import './Movies.css'
import Poster from '../Poster/Poster';

function Movies({movies, findMovie}) {

  const moviePosters = movies.map(movie => {
    return (
      <Poster
        title={movie.title}
        backdrop_path={movie.backdrop_path}
        average_rating={movie.average_rating}
        release_date={movie.release_date}
        poster_path={movie.poster_path}
        id={movie.id}
        key={movie.id}
        findMovie={findMovie}
      />  
    )
  })

  return (
    <div className='movies-container'>
      {moviePosters}
    </div>
  )
}

export default Movies;