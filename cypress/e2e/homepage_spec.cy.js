describe('homepage spec', () => {
  it('should have a title when I load the home page', () => {
    cy.visit('localhost:3000')
    .get(".header_container").contains("h1", "RANCID TOMATILLOS")
  });
  it('should have a collection of movies when I load the homepage', () => {
    cy.visit('localhost:3000')
    .get(".movie-card").first().contains("h3", "Black Adam")
    .get(".movie-card").last().contains("h3", "X")
  })
})