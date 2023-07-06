// Poster.js //

import './Poster.css';

function Poster({ title, description, id, deleteIdea}){
  return (
    <div className='poster'>
      <h3>{title}</h3>
    </div>
  )
}

export default Poster;