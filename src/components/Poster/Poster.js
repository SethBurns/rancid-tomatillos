// Poster.js //

import './Poster.css';

function Poster({ title, poster_path, id, deleteIdea}){
  return (
    <div className='poster' style={{backgroundImage: `url(${poster_path})`}}>
      <h3>{title}</h3>
    </div>
  )
}

export default Poster;