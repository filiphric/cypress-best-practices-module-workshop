// ⚠️ database is filled with data before the test
beforeEach(() => {

  cy.visit('/board/1')

});
// challenge #1: this test is passing, but the command chain in this test 
// is way too long and confusing. it’s testing different items, although 
// it is not clear at first sight. run this test and split the command 
// chain in ways that’s easier to read
it('checks list name, card attributes and opens card detail', () => {

  cy.visit('/board/1')

  cy.contains('Bread')
    .get('[data-cy=list-name]')
    .first()
    .should('have.value', 'Groceries')
    .get('[data-cy=card]')
    .eq(2)
    .should('contain.text', 'Juice')
    .get('[data-cy=due-date]')
    .eq(1)
    .should('have.text', 'Feb 14 2022')
    .get('[data-cy=card]')
    .last()
    .click()

});