// Poster.js //

import './Poster.css';
import { Link } from 'react-router-dom';

export default function Poster({ title, poster_path, id, findMovie}){
  return (
    <div className='movie-card'>
      <Link to={`/${id}`}><img className='poster' alt={title + "movie poster"} src={poster_path}/></Link>
      <h3>{title}</h3>
    </div>
  )
};

