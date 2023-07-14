describe('movie details spec', () => {
  it('shows additional details about a movie when the movie is clicked', () => {
    cy.visit('localhost:3000/1013860')
    .get(".movie_details_left").contains("h1", "R.I.P.D. 2: Rise of the Damned")
    .get(".movie_details_middle").contains("p", "Overview: When Sheriff Roy Pulsipher finds himself in the afterlife, he joins a special police force and returns to Earth to save humanity from the undead.")
    .get(".movie_details_right").contains("p", "Average Rating: 7.00")
  })
  it('should not show budget, profit, or revenue if there are none', () => {
    cy.visit('localhost:3000/49046')
    .get(".budget").should('not.exist')
    .get(".revenue").should('not.exist')
    .get(".profit").should('not.exist')
  })
  it('should show an error if fetch fails', () => {
    cy.intercept('GET', 'https://rancid-tomatillos.herokuapp.com/api/v2/movies/1013860', (req) => {
      const newURL = 'https://www.example.com';
      req.url = newURL;
    }).as('modifiedRequest');
    cy.visit('localhost:3000/1013860')
    .get(".App").contains("p", "Something went wrong: Failed to Fetch")
  })
})