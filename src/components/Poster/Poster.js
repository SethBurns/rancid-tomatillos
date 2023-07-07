// Poster.js //

import './Poster.css';

function Poster({ title, poster_path, id, findMovie}){
  return (
    <div>
      <div className='poster' style={{backgroundImage: `url(${poster_path})`}}>
      </div>
      <h3>{title}</h3>
      <button onClick={() => findMovie(id)}>View Details</button>
    </div>
  )
}

export default Poster;