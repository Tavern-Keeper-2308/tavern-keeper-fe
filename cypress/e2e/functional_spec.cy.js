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
        // Check scenario and set appropriate fixture
        if (req.body.variables.userName === 'demo-no-encounters') {
          req.alias = 'gqlGetEncountersQueryNoEncounters';
          req.reply({ fixture: 'mock_data_getEncounters_none.json' });
        } else if (req.body.variables.userName === 'demo-one-encounter') {
          req.alias = 'gqlGetEncountersQueryOneEncounter';
          req.reply({ fixture: 'mock_data_getEncounters_one.json' });
        } else {
          req.alias = 'gqlGetEncountersQueryManyEncounters';
          req.reply({ fixture: 'mock_data_getEncounters_many.json' });
        }
      }

      // Check if it's a getEncounter query
      if (hasOperationName(req, 'getEncounter')) {
        // Check scenario and set appropriate fixture
        if (req.body.variables.id === '13') {
          req.alias = 'gqlGetEncounterQuery';
          req.reply({ fixture: 'mock_data_getEncounter.json' });
        }
      }

      // Check if it's a getMonsters query
      if (hasOperationName(req, 'getMonsters')) {
        // Check scenario and set appropriate fixture
        if (req) {
          req.alias = 'gqlGetMonstersQuery';
          req.reply({ fixture: 'mock_data_getMonsters.json' });
        }
      }

      // Check if it's a getMonster query
      if (hasOperationName(req, 'getMonster')) {
        // Check scenario and set appropriate fixture
        if (req.body.variables.index === 'ancient-red-dragon') {
          req.alias = 'gqlGetMonsterQueryAncientRedDragon';
          req.reply({ fixture: 'mock_data_getMonster_ancient_red_dragon.json' });
        } else if (req.body.variables.index === 'kobold') {
          req.alias = 'gqlGetMonsterQueryKobold';
          req.reply({ fixture: 'mock_data_getMonster_kobold.json' });
        }
      }
    });
  });


  ///////* Login Page *///////
  it('should render elements correctly on login page', () => {
    cy.visit('/login');
    cy.get('.app-title').contains('Tavern Keeper');
    cy.get('.greeting').contains('Welcome Traveler...');
    cy.get('.login-container').children().should('have.length', 3);
    cy.get('.login-button').first().contains('DEMO - No Encounters');
    cy.get('.login-button').eq(1).contains('DEMO - One Encounter');
    cy.get('.login-button').last().contains('DEMO - Many Encounters');
  });


  ///////* Home Page *///////
  it('should render header elements correctly on home page when logging in', () => {
    cy.visit('/login');
    cy.get('.login-button').contains('DEMO - No Encounters').click();
    cy.wait('@gqlGetEncountersQueryNoEncounters')
      .its('response.body.data.encounters')
      .should((encounters) => {
        expect(encounters.length).to.equal(0);
      });
    cy.get('.app-title').contains('Tavern Keeper');
    cy.get('.home-button').should('have.attr', 'href', '/');
    cy.get('.EncounterBuilderButton').contains('Build New Encounter');
    cy.get('.build-new-encounter-link').should('have.attr', 'href', '/encounterbuilder');
    cy.get('.LogoutButton').contains('Logout');
    cy.get('.logout-link').should('have.attr', 'href', '/login');
  });

  it('should render expected elements correctly on home page when logging in as DEMO - No Encounters', () => {
    cy.visit('/login');
    cy.get('.login-button').contains('DEMO - No Encounters').click();
    cy.wait('@gqlGetEncountersQueryNoEncounters')
      .its('response.body.data.encounters')
      .should((encounters) => {
        expect(encounters.length).to.equal(0);
      });
  });

  it('should render expected elements correctly on home page when logging in as DEMO - One Encounter', () => {
    cy.visit('/login');
    cy.get('.login-button').contains('DEMO - One Encounter').click();
    cy.wait('@gqlGetEncountersQueryOneEncounter')
      .its('response.body.data.encounters')
      .should((encounters) => {
        expect(encounters.length).to.equal(1);
      });
    cy.get('.EncounterPreviewContainer').children().should('have.length', 1);
    cy.get('.EncounterPreviewCard').first().within(() => {
      cy.get('.preview-encounter-name').contains("We each need to find our own inspiration, Kiki. Sometimes it's not easy.");
      cy.get('.preview-section-title').contains('Encounter Summary');
      cy.get('.preview-encounter-summary').contains('The world was young, the mountains green');
      cy.get('.preview-section-title').contains('Monster(s)');
      cy.get('.preview-monster-list').children().should('have.length', 3);
      cy.get('.preview-monster-list').children().first().contains('Kobold');
      cy.get('.preview-monster-list').children().eq(1).contains('Kobold');
      cy.get('.preview-monster-list').children().last().contains('Ancient Red Dragon');
      cy.get('.preview-party-size').within(() => {
        cy.get('.preview-section-title').contains('Party Size');
        cy.get('.preview-party-size-value').contains('2');
      });
      cy.get('.preview-party-level').within(() => {
        cy.get('.preview-section-title').contains('Party Level');
        cy.get('.preview-party-level-value').contains('12');
      });
    });
    cy.get('.EncounterPreviewCard').last().within(() => {
      cy.get('.preview-encounter-name').contains("We each need to find our own inspiration, Kiki. Sometimes it's not easy.");
      cy.get('.preview-section-title').contains('Encounter Summary');
      cy.get('.preview-encounter-summary').contains('The world was young, the mountains green');
      cy.get('.preview-section-title').contains('Monster(s)');
      cy.get('.preview-monster-list').children().should('have.length', 3);
      cy.get('.preview-monster-list').children().first().contains('Kobold');
      cy.get('.preview-monster-list').children().eq(1).contains('Kobold');
      cy.get('.preview-monster-list').children().last().contains('Ancient Red Dragon');
      cy.get('.preview-party-size').within(() => {
        cy.get('.preview-section-title').contains('Party Size');
        cy.get('.preview-party-size-value').contains('2');
      });
      cy.get('.preview-party-level').within(() => {
        cy.get('.preview-section-title').contains('Party Level');
        cy.get('.preview-party-level-value').contains('12');
      });
    });
  });

  it('should render expected elements correctly on home page when logging in as DEMO - Many Encounters', () => {
    cy.visit('/login');
    cy.get('.login-button').contains('DEMO - Many Encounters').click();
    cy.wait('@gqlGetEncountersQueryManyEncounters')
      .its('response.body.data.encounters')
      .should((encounters) => {
        expect(encounters.length).to.equal(7);
      });
    cy.get('.EncounterPreviewContainer').children().should('have.length', 7);
    cy.get('.EncounterPreviewCard').first().within(() => {
      cy.get('.preview-encounter-name').contains("A girl just fell from the sky, boss!");
      cy.get('.preview-section-title').contains('Encounter Summary');
      cy.get('.preview-encounter-summary').contains('Oliphaunt');
      cy.get('.preview-section-title').contains('Monster(s)');
      cy.get('.preview-monster-list').children().should('have.length', 3);
      cy.get('.preview-monster-list').children().first().contains('Giant Shark');
      cy.get('.preview-monster-list').children().eq(1).contains('Aboleth');
      cy.get('.preview-monster-list').children().last().contains('Aboleth');
      cy.get('.preview-party-size').within(() => {
        cy.get('.preview-section-title').contains('Party Size');
        cy.get('.preview-party-size-value').contains('2');
      });
      cy.get('.preview-party-level').within(() => {
        cy.get('.preview-section-title').contains('Party Level');
        cy.get('.preview-party-level-value').contains('10');
      });
    });
    cy.get('.EncounterPreviewCard').last().within(() => {
      cy.get('.preview-encounter-name').contains("A pig that doesn't fly is just a pig.");
      cy.get('.preview-section-title').contains('Encounter Summary');
      cy.get('.preview-encounter-summary').contains('Hey! Now! Come Hoy Now! Whither Do You Wander?');
      cy.get('.preview-section-title').contains('Monster(s)');
      cy.get('.preview-monster-list').children().should('have.length', 2);
      cy.get('.preview-monster-list').children().first().contains('Acolyte');
      cy.get('.preview-monster-list').children().last().contains('Ghast');
      cy.get('.preview-party-size').within(() => {
        cy.get('.preview-section-title').contains('Party Size');
        cy.get('.preview-party-size-value').contains('3');
      });
      cy.get('.preview-party-level').within(() => {
        cy.get('.preview-section-title').contains('Party Level');
        cy.get('.preview-party-level-value').contains('3');
      });
    });
  });


  ///////* Detail Page *///////
  it('should render expected elements correctly on the encounter details page', () => {
    cy.visit('/login');
    cy.get('.login-button').contains('DEMO - Many Encounters').click();
    cy.wait('@gqlGetEncountersQueryManyEncounters')
      .its('response.body.data.encounters')
      .should((encounters) => {
        expect(encounters.length).to.equal(7);
      });

    cy.get('.preview-card-link').eq(4).click();
    cy.wait('@gqlGetEncounterQuery')
      .its('response.body.data.encounter')
      .should('exist')
      .and('be.an', 'object');

    cy.wait('@gqlGetMonsterQueryKobold')
      .its('response.body.data.monster')
      .should('exist')
      .and('be.an', 'object');

    cy.wait('@gqlGetMonsterQueryAncientRedDragon')
      .its('response.body.data.monster')
      .should('exist')
      .and('be.an', 'object');

    cy.get('.encounter-name').contains("We each need to find our own inspiration, Kiki. Sometimes it's not easy.");

    cy.get('.party-stats').within(() => {
      cy.get('.party-size-heading').contains('Party Size:');
      cy.get('.party-size-value').contains('2');
      cy.get('.party-level-heading').contains('Party Level');
      cy.get('.party-level-value').contains('12');
    });

    cy.get('.encounter-desc').within(() => {
      cy.get('.section-heading').contains('Short Summary:');
      cy.get('.short-summary-value').contains('The world was young, the mountains green');
      cy.get('.section-heading').contains('Encounter Description:');
      cy.get('.encounter-description-value').contains('Hideous gibbous decadent noisome manuscript blasphemous. Gibbering furtive stench loathsome fungus. Iridescence abnormal tenebrous. Shunned antediluvian gibbering. Stench cat tenebrous gambrel.');
      cy.get('.section-heading').contains('Treasure and Rewards:');
      cy.get('.treasure-value').contains("Ahzidal's Ring of Arcana");
    });

    cy.get('.encounter-foes').within(() => {
      cy.get('.enemies-heading').contains('Your Enemies');
      cy.get('.monster-details').should('have.length', 3);

      cy.get('.monster-details').first().within(() => {
        cy.get('.monster-name').contains('Kobold');

        cy.get('.foe-physical').within(() => {
          cy.get('.section-heading').contains('Size:');
          cy.get('.size-value').contains('SMALL');
          cy.get('.section-heading').contains('Armor Class:');
          cy.get('.ac-value').contains('12');
          cy.get('.section-heading').contains('Hit Points:');
          cy.get('.hp-value').contains('5');
        });

        cy.get('.foe-stats').within(() => {
          cy.get('.section-heading').contains('Strength');
          cy.get('.strength-value').contains('7');
          cy.get('.section-heading').contains('Dexterity');
          cy.get('.dexterity-value').contains('15');
          cy.get('.section-heading').contains('Constitution');
          cy.get('.constitution-value').contains('9');
          cy.get('.section-heading').contains('Intelligence');
          cy.get('.intelligence-value').contains('8');
          cy.get('.section-heading').contains('Wisdom');
          cy.get('.wisdom-value').contains('7');
          cy.get('.section-heading').contains('Charisma');
          cy.get('.charisma-value').contains('8');
          cy.get('.section-heading').contains('Proficiency Bonus');
          cy.get('.pb-value').contains('2');
        });

        cy.get('.foe-speeds').within(() => {
          cy.get('.section-heading').contains('Walk Speed:');
          cy.get('.walk-speed-value').contains('30 ft.');
          cy.get('.section-heading').contains('Swim Speed:');
          cy.get('.swim-speed-value').should('be.empty');
          cy.get('.section-heading').contains('Fly Speed:');
          cy.get('.fly-speed-value').should('be.empty');
          cy.get('.section-heading').contains('Burrow Speed:');
          cy.get('.burrow-speed-value').should('be.empty');
        });

        cy.get('.damage-mods').within(() => {
          cy.get('.section-heading').contains('Damage Vulnerabilities:');
          cy.get('.dmg-vulnerability-value').contains('none');
          cy.get('.section-heading').contains('Damage Resistances:');
          cy.get('.dmg-resistance-value').contains('none');
          cy.get('.section-heading').contains('Damage Immunities:');
          cy.get('.dmg-immunity-value').contains('none');
          cy.get('.section-heading').contains('Condition Immunities:');
          cy.get('.condition-immunity-value').contains('none');
        });

        cy.get('.senses').within(() => {
          cy.get('.section-heading').contains('Blindsight:');
          cy.get('.blindsight-value').should('be.empty');
          cy.get('.section-heading').contains('Darkvision:');
          cy.get('.darkvision-value').contains('60 ft.');
          cy.get('.section-heading').contains('Passive Perception:');
          cy.get('.passive-perception-value').contains('8');
        });

        cy.get('.special-abilities').within(() => {
          cy.get('.section-heading').contains('Special Ability: Sunlight Sensitivity');
          cy.get('.special-ability-value').contains('While in sunlight, the kobold has disadvantage on attack rolls, as well as on Wisdom (Perception) checks that rely on sight.');
          cy.get('.section-heading').contains('Special Ability: Pack Tactics');
          cy.get('.special-ability-value').contains("The kobold has advantage on an attack roll against a creature if at least one of the kobold's allies is within 5 ft. of the creature and the ally isn't incapacitated.");
        });

        cy.get('.standard-actions').within(() => {
          cy.get('.section-heading').contains('Action: Dagger');
          cy.get('.standard-action-value').contains("Melee Weapon Attack: +4 to hit, reach 5 ft., one target. Hit: 4 (1d4 + 2) piercing damage.");
          cy.get('.section-heading').contains('Action: Sling');
          cy.get('.standard-action-value').contains("Ranged Weapon Attack: +4 to hit, range 30/120 ft., one target. Hit: 4 (1d4 + 2) bludgeoning damage.");
        });

      })

    })


  });

});