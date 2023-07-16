// Search.js //

import './Search.css';
import { useState } from 'react';
import { Link } from 'react-router-dom';

export default function Search({setFilteredMovies, movies}) {
   const [searchTerm, setSearchTerm] = useState('');

   function filterMovies(searchTerm, movies, setFilteredMovies) {
    const searchResults = movies.filter(movie => {
      return movie.title.toLowerCase() === searchTerm.toLowerCase()
    })
    setFilteredMovies(searchResults);
  }

   return (
    <div className='search'>
      <input 
        className="search_input" 
        type='text' placeholder='Search Movies' 
        onChange={(e) => setSearchTerm(e.target.value)} />
      <Link to={`./search/${searchTerm}`}><button onClick={() => {filterMovies(searchTerm, movies, setFilteredMovies)}} >Search</button></ Link>
    </div>
   )
}