describe('search spec', () => {
  it('returns Wakanda Forever when wakanda is searched', () => {
    cy.visit('localhost:3000')
      .get('.search_input')
      .type('wakanda')
      .get('.search_button')
      .click()
      .get('.movies_container')
      .children()
      .should('have.length', 1);
  });
  it('returns 4 movies when of is searched', () => {
    cy.visit('localhost:3000')
      .get('.search_input')
      .type('of')
      .get('.search_button')
      .click()
      .get('.movies_container')
      .children()
      .should('have.length', 4);
  });
  it('should return users back to the main page when an empty search is made', () => {
    cy.visit('localhost:3000')
      .get('.search_input')
      .clear()
      .get('.search_button')
      .click()
      .get('.movies_container')
      .children()
      .should('have.length', 40);
  });
  it('should return an apology if no movies are found in search', () => {
    cy.visit('localhost:3000')
      .get('.search_input')
      .type('test')
      .get('.search_button')
      .click()
      .get('.movies_container')
      .contains('p', 'We are so sorry, no movies match your search!');
  });
});
