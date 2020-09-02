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

  it('show remaining todos count in the footer', () => {
    cy.get('.todo-count')
      .should('contain', 3)
  })

  it.only('remove a todo', () => {
    cy.route({
      url: '/api/todos/1',
      method: 'DELETE',
      status: 200,
      response: {}
    })

    cy.get('.todo-list li')
      .first()
      .find('.destroy')
      .click({force: true}) 
  })
})
