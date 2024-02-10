import { aliasQuery, aliasMutation } from "../utils/graphql-test-utils";

context('Functional Tests', () => {
  beforeEach(() => {
    cy.intercept('POST', 'https://tavern-keeper-be.onrender.com/graphql/', (req) => {
      // Queries
      aliasQuery(req, 'getEncounters')
      aliasQuery(req, 'getEncounter')
      aliasQuery(req, 'getMonsters')
      aliasQuery(req, 'getMonster')

      // Mutations
      aliasMutation(req, 'createEncounter')
    });
  });

  it('should render elements correctly on login page', () => {
    cy.visit('/login');
    cy.get('.app-title').contains('Tavern Keeper');
    cy.get('.greeting').contains('Welcome Traveler...');
    cy.get('.login-container').children().should('have.length', 3);
    cy.get('.login-button').first().contains('DEMO - No Encounters');
    cy.get('.login-button').eq(1).contains('DEMO - One Encounter');
    cy.get('.login-button').last().contains('DEMO - Many Encounters');
  });
});