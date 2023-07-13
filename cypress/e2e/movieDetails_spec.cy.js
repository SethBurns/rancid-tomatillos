describe('template spec', () => {
  it('shows additional details about a movie when the movie is clicked', () => {
    cy.visit('localhost:3000/1013860')
    .get(".movie_details_left").contains("h1", "R.I.P.D. 2: Rise of the Damned")
  })
})