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
      aliasMutation(req, 'CreateEncounter');

      // Check if it's a getEncounters query
      if (hasOperationName(req, 'getEncounters')) {
        // Check scenario and set appropriate fixture
        if (req.body.variables.userName === 'demo-no-encounters') {
          req.alias = 'gqlGetEncountersQueryNoEncounters';
          req.reply({ fixture: 'mock_data_getEncounters_none.json' });
        } else if (req.body.variables.userName === 'demo-one-encounter') {
          req.alias = 'gqlGetEncountersQueryOneEncounter';
          req.reply({ fixture: 'mock_data_getEncounters_one.json' });
        } else if (req.body.variables.userName === 'demo-many-encounters') {
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

      // Check if it's a createEncounter mutation
      if (hasOperationName(req, 'CreateEncounter')) {
        // Check scenario and set appropriate fixture
        const expectedData = {
          encounterName: 'Goopy Throw-Down',
        };

        if (req) {
          req.alias = 'gqlCreateEncounterMutation';
          req.reply({ fixture: 'mock_data_createEncounter.json' });
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
      });

      cy.get('.monster-details').last().within(() => {
        cy.get('.monster-name').contains('Ancient Red Dragon');

        cy.get('.foe-physical').within(() => {
          cy.get('.section-heading').contains('Size:');
          cy.get('.size-value').contains('GARGANTUAN');
          cy.get('.section-heading').contains('Armor Class:');
          cy.get('.ac-value').contains('22');
          cy.get('.section-heading').contains('Hit Points:');
          cy.get('.hp-value').contains('546');
        });

        cy.get('.foe-stats').within(() => {
          cy.get('.section-heading').contains('Strength');
          cy.get('.strength-value').contains('30');
          cy.get('.section-heading').contains('Dexterity');
          cy.get('.dexterity-value').contains('10');
          cy.get('.section-heading').contains('Constitution');
          cy.get('.constitution-value').contains('29');
          cy.get('.section-heading').contains('Intelligence');
          cy.get('.intelligence-value').contains('18');
          cy.get('.section-heading').contains('Wisdom');
          cy.get('.wisdom-value').contains('15');
          cy.get('.section-heading').contains('Charisma');
          cy.get('.charisma-value').contains('23');
          cy.get('.section-heading').contains('Proficiency Bonus');
          cy.get('.pb-value').contains('7');
        });

        cy.get('.foe-speeds').within(() => {
          cy.get('.section-heading').contains('Walk Speed:');
          cy.get('.walk-speed-value').contains('40 ft.');
          cy.get('.section-heading').contains('Swim Speed:');
          cy.get('.swim-speed-value').should('be.empty');
          cy.get('.section-heading').contains('Fly Speed:');
          cy.get('.fly-speed-value').contains('80 ft.');
          cy.get('.section-heading').contains('Burrow Speed:');
          cy.get('.burrow-speed-value').should('be.empty');
        });

        cy.get('.damage-mods').within(() => {
          cy.get('.section-heading').contains('Damage Vulnerabilities:');
          cy.get('.dmg-vulnerability-value').contains('none');
          cy.get('.section-heading').contains('Damage Resistances:');
          cy.get('.dmg-resistance-value').contains('none');
          cy.get('.section-heading').contains('Damage Immunities:');
          cy.get('.dmg-immunity-value').contains('fire');
          cy.get('.section-heading').contains('Condition Immunities:');
          cy.get('.condition-immunity-value').contains('none');
        });

        cy.get('.senses').within(() => {
          cy.get('.section-heading').contains('Blindsight:');
          cy.get('.blindsight-value').contains('60 ft.');
          cy.get('.section-heading').contains('Darkvision:');
          cy.get('.darkvision-value').contains('120 ft.');
          cy.get('.section-heading').contains('Passive Perception:');
          cy.get('.passive-perception-value').contains('26');
        });

        cy.get('.special-abilities').within(() => {
          cy.get('.section-heading').contains('Special Ability: Legendary Resistance');
          cy.get('.special-ability-value').contains("If the dragon fails a saving throw, it can choose to succeed instead.");
        });

        cy.get('.standard-actions').within(() => {
          cy.get('.section-heading').contains('Action: Multiattack');
          cy.get('.standard-action-value').contains("The dragon can use its Frightful Presence. It then makes three attacks: one with its bite and two with its claws.");
          cy.get('.section-heading').contains('Action: Bite');
          cy.get('.standard-action-value').contains("Melee Weapon Attack: +17 to hit, reach 15 ft., one target. Hit: 21 (2d10 + 10) piercing damage plus 14 (4d6) fire damage.");
          cy.get('.section-heading').contains('Action: Claw');
          cy.get('.standard-action-value').contains("Melee Weapon Attack: +17 to hit, reach 10 ft., one target. Hit: 17 (2d6 + 10) slashing damage.");
          cy.get('.section-heading').contains('Action: Tail');
          cy.get('.standard-action-value').contains("Melee Weapon Attack: +17 to hit, reach 20 ft., one target. Hit: 19 (2d8 + 10) bludgeoning damage.");
          cy.get('.section-heading').contains('Action: Frightful Presence');
          cy.get('.standard-action-value').contains("Each creature of the dragon's choice that is within 120 feet of the dragon and aware of it must succeed on a DC 21 Wisdom saving throw or become frightened for 1 minute. A creature can repeat the saving throw at the end of each of its turns, ending the effect on itself on a success. If a creature's saving throw is successful or the effect ends for it, the creature is immune to the dragon's Frightful Presence for the next 24 hours.");
          cy.get('.section-heading').contains('Action: Fire Breath');
          cy.get('.standard-action-value').contains("The dragon exhales fire in a 90-foot cone. Each creature in that area must make a DC 24 Dexterity saving throw, taking 91 (26d6) fire damage on a failed save, or half as much damage on a successful one.");
        });

        cy.get('.legendary-actions').within(() => {
          cy.get('.section-heading').contains('Legendary Action: Detect');
          cy.get('.legendary-action-value').contains("The dragon makes a Wisdom (Perception) check.");
          cy.get('.section-heading').contains('Legendary Action: Tail Attack');
          cy.get('.legendary-action-value').contains("The dragon makes a tail attack.");
          cy.get('.section-heading').contains('Legendary Action: Wing Attack (Costs 2 Actions)');
          cy.get('.legendary-action-value').contains("The dragon beats its wings. Each creature within 15 ft. of the dragon must succeed on a DC 25 Dexterity saving throw or take 17 (2d6 + 10) bludgeoning damage and be knocked prone. The dragon can then fly up to half its flying speed.");
        });
      });
    });


  });


  ///////* Builder Page *///////
  it('should be able to build and submit a new encounter on the encounter builder page', () => {
    cy.visit('/login');

    cy.get('.login-button').contains('DEMO - Many Encounters').click();
    cy.wait('@gqlGetEncountersQueryManyEncounters')
      .its('response.body.data.encounters')
      .should((encounters) => {
        expect(encounters.length).to.equal(7);
      });

    cy.get('.EncounterBuilderButton').contains('Build New Encounter').click();
    cy.wait('@gqlGetMonstersQuery')
      .its('response.body.data.monsters')
      .should((monsters) => {
        expect(monsters.length).to.equal(37);
      });

    cy.get('.encounter-header').within(() => {
      cy.get('.section-heading').contains('Encounter Name:');
      cy.get('input[name="encounter-name"]')
        .should('be.empty')
        .type('Goopy Throw-Down')
        .should('have.value', 'Goopy Throw-Down');
    });

    cy.get('.party-stats').within(() => {
      cy.get('.section-heading').contains('Party Size:');
      cy.get('input[name="encounter-size"]')
        .should('be.empty')
        .type('5')
        .should('have.value', '5');
      cy.get('.section-heading').contains('Party Level:');
      cy.get('input[name="encounter-level"]')
        .should('be.empty')
        .type('6')
        .should('have.value', '6');
    });

    cy.get('.encounter-desc').within(() => {
      cy.get('.section-heading').contains('Short Summary:');
      cy.get('input[name="encounter-summary"]')
        .should('be.empty')
        .type('The gang fights pudding.')
        .should('have.value', 'The gang fights pudding.');
      cy.get('.section-heading').contains('Encounter Description:');
      cy.get('input[name="encounter-description"]')
        .should('be.empty')
        .type('The gang runs into some goopy monsters. They will have to be clever. In the end, they will be rewarded with a flute that plays the brown note.')
        .should('have.value', 'The gang runs into some goopy monsters. They will have to be clever. In the end, they will be rewarded with a flute that plays the brown note.');
      cy.get('.section-heading').contains('Treasure and Rewards:');
      cy.get('input[name="encounter-loot"]')
        .should('be.empty')
        .type('Pipes of Haunting, 1500GP')
        .should('have.value', 'Pipes of Haunting, 1500GP');
    });

    cy.get('.encounter-foes').within(() => {
      cy.get('.search-heading').contains('Search By:');
      cy.get('.monster-name').should('have.length', 37);
      cy.get('.monster-name').first().contains('Aboleth');
      cy.get('.monster-name').last().contains('Solar');
      cy.get('.monster-selection').within(() => {
        cy.get('.MonsterFilter').within(() => {
          cy.get('.select-size').contains('Filter By Size');
          cy.get('.select-name').contains('Filter By Name');
          cy.get('.select-armor-class').contains('Filter By Armor Class');
          cy.get('.select-hit-points').contains('Filter By Hit Points');
        });

        cy.get('#select-size')
          .invoke('val')
          .should('eq', '');
        cy.get('#select-size')
          .select('Medium')
          .invoke('val')
          .should('eq', 'MEDIUM');

        cy.get('.monster-name').should('have.length', 13);
        cy.get('.monster-name').first().contains('Black Dragon Wyrmling');
        cy.get('.monster-name').last().contains('Sea Hag');

        cy.get('#select-name')
          .invoke('val')
          .should('eq', '');
        cy.get('#select-name')
          .select('Sea Hag')
          .invoke('val')
          .should('eq', 'Sea Hag');

        cy.get('.add-monster').last().click();

        cy.get('#reset-filters-button').click();
        cy.get('.monster-name').first().contains('Aboleth');
        cy.get('.monster-name').last().contains('Solar');

        cy.get('input[id="select-armor-class"]')
          .should('be.empty')
          .type('7')
          .should('have.value', '7');

        cy.get('.monster-name').first().contains('Black Pudding');
        cy.get('.monster-name').last().contains('Black Pudding');

        cy.get('.add-monster').click();

        cy.get('#reset-filters-button').click();
        cy.get('.monster-name').first().contains('Aboleth');
        cy.get('.monster-name').last().contains('Solar');

        cy.get('input[id="select-hit-points"]')
          .should('be.empty')
          .type('4')
          .should('have.value', '4');

        cy.get('.monster-name').first().contains('Giant Centipede');
        cy.get('.monster-name').last().contains('Giant Fire Beetle');

        cy.get('.add-monster').first().click();
        cy.get('.add-monster').first().click();
      });
    });

    cy.get('#submitButton').click();

    cy.wait('@gqlCreateEncounterMutation')
      .its('response.body.data.createEncounter.encounter.encounterName')
      .should('exist')
      .and('eq', 'Goopy Throw-Down');

    cy.intercept('POST', 'https://tavern-keeper-be.onrender.com/graphql/', (req) => {
      if (hasOperationName(req, 'getEncounters')) {
        req.alias = 'gqlGetEncountersQueryManyEncountersNewData';
        req.reply({ fixture: 'mock_data_getEncounters_new_data.json' });
      }
    });

    cy.get('.home-button').contains('Tavern Keeper').click();
    cy.wait('@gqlGetEncountersQueryManyEncountersNewData')
      .its('response.body.data.encounters')
      .should((encounters) => {
        expect(encounters.length).to.equal(8);
      });

    cy.get('.EncounterPreviewContainer').children().should('have.length', 8);
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
      cy.get('.preview-encounter-name').contains("Goopy Throw-Down");
      cy.get('.preview-section-title').contains('Encounter Summary');
      cy.get('.preview-encounter-summary').contains('The gang fights pudding.');
      cy.get('.preview-section-title').contains('Monster(s)');
      cy.get('.preview-monster-list').children().should('have.length', 4);
      cy.get('.preview-monster-list').children().first().contains('Black Pudding');
      cy.get('.preview-monster-list').children().eq(1).contains('Giant Centipede');
      cy.get('.preview-monster-list').children().eq(2).contains('Giant Centipede');
      cy.get('.preview-monster-list').children().last().contains('Sea Hag');
      cy.get('.preview-party-size').within(() => {
        cy.get('.preview-section-title').contains('Party Size');
        cy.get('.preview-party-size-value').contains('5');
      });
      cy.get('.preview-party-level').within(() => {
        cy.get('.preview-section-title').contains('Party Level');
        cy.get('.preview-party-level-value').contains('6');
      });
    });
  });
});