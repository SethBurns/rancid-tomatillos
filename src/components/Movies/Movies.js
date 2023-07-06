// Movies.js //

import './Movies.css'
import Poster from '../Poster/Poster';

function Movies(props) {

  const moviePosters = props.movies.map(movie => {
    return (
      <Poster
        title={movie.title}
        poster_path={movie.poster_path}
        id={movie.id}
        key={movie.id}
      />  
    )
  })
  
  return (
    <div className='ideas-container'>
      {moviePosters}
    </div>
  )
}

export default Movies;