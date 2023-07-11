// Poster.js //

import './Poster.css';

export default function Poster({ title, poster_path, id, findMovie}){
  return (
    <div>
      <img className='poster' alt={title + " movie poster"} onClick={() => findMovie(id)} src={poster_path}/>
      <h3>{title}</h3>
    </div>
  )
};

