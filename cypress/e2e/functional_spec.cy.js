import { aliasQuery, aliasMutation, hasOperationName } from "../utils/graphql-test-utils";

context('Functional Tests', () => {
  beforeEach(() => {
    cy.intercept('POST', 'https://tavern-keeper-be.onrender.com/graphql/', (req) => {
      // Queries
      aliasQuery(req, 'getEncounters');
      aliasQuery(req, 'getEncounter');
      aliasQuery(req, 'getMonsters');
      aliasQuery(req, 'getMonster');

      // Mutations
      aliasMutation(req, 'createEncounter');

      // Check if it's a getEncounters query
      if (hasOperationName(req, 'getEncounters')) {
        req.alias = 'gqlGetEncountersQuery';
        req.reply({ fixture: 'mock_data_getEncounters_none.json' });
      }
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

  it('should render expected elements correctly on home page when logging in as DEMO - No Encounters', () => {
    cy.visit('/login');
    cy.get('.login-button').contains('DEMO - No Encounters').click();
    cy.wait('@gqlGetEncountersQuery')
      .its('response.body.data.encounters')
      .should((encounters) => {
        expect(encounters.length).to.equal(0);
      });

  });

  it.skip('should render expected elements correctly on home page when logging in as DEMO - One Encounter', () => {

  });

  it.skip('should render expected elements correctly on home page when logging in as DEMO - Many Encounters', () => {

  });

});