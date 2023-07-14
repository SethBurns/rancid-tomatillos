// api-calls.js //

export default function getMovies() {
  return fetch(`https://rancid-tomatillos.herokuapp.com/api/v2/movies`)
  .then(response => {
    if(!response.ok) {
      throw new Error('done fucked up')
    }
    return response.json()
  })
}