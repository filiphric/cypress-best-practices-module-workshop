import * as path from 'path';
import * as singleBoardTwoListsTwoCards from './fixtures/singleBoardTwoListsTwoCards.json'
import * as singleBoardTwoListsFiveCards from './fixtures/singleBoardTwoListsFiveCards.json'
import singleBoardSingleListThreeCardsSingleUser from '@scripts/fixtures/singleBoardSingleListThreeCardsSingleUser.json'
import singleBoardSingleListThreeCardsTwoUsers from '@scripts/fixtures/singleBoardSingleListThreeCardsTwoUsers.json'

const beforeEachTestSeeds = {
  'cypress/e2e/01_common_problems/demo_end.cy.ts': singleBoardTwoListsFiveCards,
  'cypress/e2e/01_common_problems/demo_start.cy.ts': singleBoardTwoListsFiveCards,
  'cypress/e2e/01_common_problems/challenge.cy.ts': singleBoardTwoListsFiveCards,
  'cypress/e2e/01_common_problems/challenge_solution.cy.ts': singleBoardTwoListsFiveCards,
  'cypress/e2e/02_debugging_stabilizing/demo_end.cy.ts': singleBoardTwoListsFiveCards,
  'cypress/e2e/02_debugging_stabilizing/demo_start.cy.ts': singleBoardTwoListsFiveCards,
  'cypress/e2e/02_debugging_stabilizing/challenge.cy.ts': singleBoardTwoListsFiveCards,
  'cypress/e2e/02_debugging_stabilizing/challenge_solution.cy.ts': singleBoardTwoListsFiveCards,
  'cypress/e2e/03_waiting/demo_start.cy.ts': singleBoardTwoListsFiveCards,
  'cypress/e2e/03_waiting/demo_end.cy.ts': singleBoardTwoListsFiveCards,
  'cypress/e2e/03_waiting/challenge.cy.ts': singleBoardTwoListsFiveCards,
  'cypress/e2e/03_waiting/challenge_solution.cy.ts': singleBoardTwoListsFiveCards,
  'cypress/e2e/04_patterns_antipatterns/demo_start.cy.ts': singleBoardSingleListThreeCardsSingleUser,
  'cypress/e2e/04_patterns_antipatterns/demo_end.cy.ts': singleBoardSingleListThreeCardsSingleUser,
  'cypress/e2e/04_patterns_antipatterns/challenge_solution.cy.ts': singleBoardSingleListThreeCardsTwoUsers
}

// @ts-ignore
const testPath = Cypress.platform.includes('win') ? Cypress.spec.relative.replaceAll('\\', '/') : Cypress.spec.relative

beforeEach(() => {

  const dbState = beforeEachTestSeeds[`${testPath}`]

  if (dbState) {
    cy.task('testSetupData', dbState, { log: false })
    cy.info('💡 Database was wiped and seeded before each test', dbState)
  }

})