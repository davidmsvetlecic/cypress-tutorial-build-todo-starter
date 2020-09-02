describe('List item', () => {
  beforeEach(() => {
    cy.seedAndVisit()
  })

  it.only('display completed items properly', () => {
    cy.get('.todo-list li')
      .filter('.completed')
      .should('have.length', 1)
      .and('contain', 'Eggs')
      .find('.toggle')
      .should('be.checked')
  })
})
