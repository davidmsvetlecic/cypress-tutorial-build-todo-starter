describe('List item', () => {
  beforeEach(() => {
    cy.seedAndVisit()
  })

  it('display completed items properly', () => {
    cy.get('.todo-list li')
      .filter('.completed')
      .should('have.length', 1)
      .and('contain', 'Eggs')
      .find('.toggle')
      .should('be.checked')
  })

  it.only('show remaining todos count in the footer', () => {
    cy.get('.todo-count')
      .should('contain', 3)
  })
})
