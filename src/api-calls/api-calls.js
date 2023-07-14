// api-calls.js //

function getMovies() {
  return fetch(`https://rancid-tomatillos.herokuapp.com/api/v2/movies`)
  .then(response => {
    if(!response.ok) {
      throw new Error('done fucked up')
    }
    return response.json()
  })
};

function getMovie(id, setError, setSelectedMovie, setVideos) {
  const url1 = `https://rancid-tomatillos.herokuapp.com/api/v2/movies/${id}`;
  const url2 = `https://rancid-tomatillos.herokuapp.com/api/v2/movies/${id}/videos`;
  setError('');
  setSelectedMovie('');
  setVideos('');

  const response1 = 
  fetch(url1)
    .then(response => {
      if (!response.ok) {
        throw new Error('something went wrong')
      }
      return response.json();
    })

   const response2 = fetch(url2)
    .then(response => {
      if (!response.ok) {
        throw new Error('something went wrong')
      }
      return response.json();
  })
  return [response1, response2]
}

export { getMovies, getMovie }