// Movies.js //

import './Movies.css'
import Poster from '../Poster/Poster';
import PropTypes from 'prop-types'

function Movies({movies}) {

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
      />  
    )
  })

  return (
    <div className='movies-container'>
      {moviePosters}
    </div>
  )
}

Movies.propTypes = {
  movies: PropTypes.arrayOf(PropTypes.object).isRequired
}

export default Movies;