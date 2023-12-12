import { cardsLoadRandomly } from '@scripts/evilCode'

it('queries, actions, assertions', () => {

  cardsLoadRandomly(3000)

  cy.visit('/board/1')

  cy.get('[data-cy=card]') // query
    .last() // query
    .should('contain.text', 'Explain intercept') // assertion
    .click() // action

});

it('has no cards (network)', () => {

  cy.intercept(/cards/)
    .as('cards')

  cy.visit('/board/1')

  cy.wait('@cards')

  cy.get('[data-cy=card]')
    .should('not.exist')

});

it('has no cards (DOM)', () => {

  cy.visit('/board/1')

  cy.contains('Loading cards ...')
    .should('be.visible')
    .should('not.exist')

  cy.get('[data-cy=card]')
    .should('not.exist')

});

Cypress._.times(10, () => {

  it('flaky test', () => {

    let randomNumber = Cypress._.random(100)

    cy.wrap(randomNumber)
      .then(num => expect(num).gt(10))

  });

})

afterEach(function () {
  if (this.currentTest.state === 'failed') {
    let stopButton = window.top.document.body.querySelector('header button.stop') as HTMLElement

    stopButton.click()
  }
});