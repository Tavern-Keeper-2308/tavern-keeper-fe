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
});