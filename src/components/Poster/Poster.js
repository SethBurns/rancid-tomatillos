// Poster.js //

import './Poster.css';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

export default function Poster({ title, poster_path, id }){
  return (
    <div className='movie-card'>
      <Link to={`/${id}`}><img className='poster' id={id} alt={title + "movie poster"} src={poster_path}/></Link>
      <h3>{title}</h3>
    </div>
  )
};

Poster.propTypes = {
  title: PropTypes.string.isRequired,
  poster_path: PropTypes.string.isRequired,
  id: PropTypes.number.isRequired
};

