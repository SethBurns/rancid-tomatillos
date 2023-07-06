// Movies.js //

import './Movies.css'
import Poster from '../Poster/Poster';

function Movies(props) {
  const [movies] = props.movies;

  const moviePosters = movies.map(movie => {
    console.log(movies)
    return (
      <Poster
        title={movies.title}
        poster_path={movies.poster_path}
        id={movies.id}
        key={movies.id}
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