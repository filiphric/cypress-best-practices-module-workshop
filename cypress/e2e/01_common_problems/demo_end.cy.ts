it('Targetting improper element', { baseUrl: null }, () => {

  cy.visit('../../../mini-apps/button.html')

  cy.get('button')
    .click()

  cy.get('span')
    .click()

  cy.contains('Click me!')
    .click()

});

it('writing negative tests', () => {

  cy.intercept('GET', /cards/g).as('cards')

  cy.visit('/board/1')

  cy.wait('@cards')

  cy.get('[data-cy=card]')
  // .should('not.exist')

});

it('long command chains', () => {

  cy.visit('/board/1') // action

  cy.get('[data-cy=card]') // query
    .eq(2) // query
    .should('be.visible') // assertion

  cy.get('[data-cy=card-text]') // new query
    .eq(2)
    .should('have.text', 'Juice') // assertion

});

it('Ignoring readability in your tests', () => {

  cy.visit('/')

  cy.step('create a board')
  cy.get('[data-cy=create-board]')
    .click()

  cy.get('[data-cy=new-board-input]')
    .type('new board{enter}')

  cy.step('add new list')
  cy.get('[data-cy="add-list-input"]')
    .type('Groceries{enter}')

  cy.step('add new card')
  cy.get('[data-cy="new-card"]')
    .click()

  cy.get('[data-cy="new-card-input"]')
    .type('milk{enter}')

  cy.step('open card detail')
  cy.get('[data-cy=card]')
    .click()

  cy.get('[data-cy=card-detail]')
    .should('be.visible')

});