it.only('Targetting improper element', { baseUrl: null }, () => {

  cy.visit('../../../mini-apps/button.html')

  // cy.get('button')
  //   .click()

});

it('Writing negative tests', () => {

  cy.visit('/board/1')

  cy.get('[data-cy=card]')
    .should('not.exist')

});

it('long command chains', () => {

  cy.visit('/board/1')

  cy.get('[data-cy=card]')
    .eq(2)
    .should('be.visible')
    .get('[data-cy=card-text]')
    .should('have.text', 'Juice')

});


it('Ignoring readability in your tests', () => {

  cy.visit('/')

  cy.get('[data-cy=create-board]')
    .click()

  cy.get('[data-cy=new-board-input]')
    .type('new board{enter}')

  cy.get('[data-cy="add-list-input"]')
    .type('Groceries{enter}')

  cy.get('[data-cy="new-card"]')
    .click()

  cy.get('[data-cy="new-card-input"]')
    .type('milk{enter}')

  cy.get('[data-cy=card]')
    .click()

  cy.get('[data-cy=card-detail]')
    .should('not.be.visible')

});