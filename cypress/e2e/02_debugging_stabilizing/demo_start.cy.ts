import { cardsLoadRandomly } from '@scripts/evilCode'

it('queries, actions, assertions', () => {

  cardsLoadRandomly(3000)

  cy.visit('/board/1')

  cy.get('[data-cy=card]')
    .last()
    .should('contain.text', 'Explain intercept')
    .click()

});

it('has no cards (network)', () => {

  cy.visit('/board/1')

  cy.get('[data-cy=card]')
    .should('not.exist')

});

it('has no cards (DOM)', () => {

  cy.visit('/board/1')

  cy.get('[data-cy=card]')
    .should('not.exist')

});

it('flaky test', () => {

  let randomNumber = Cypress._.random(100)

  cy.wrap(randomNumber)
    .then(num => expect(num).gt(10))

});