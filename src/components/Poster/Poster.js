// Poster.js //

import './Poster.css';
import { Link } from 'react-router-dom';

export default function Poster({ title, poster_path, id, setMovieId}){
  return (
    <div>
      <Link to={`/${id}`}><img className='poster' alt="movie poster" onClick={() => setMovieId(id)} src={poster_path}/></Link>
      <h3>{title}</h3>
    </div>
  )
};

