export const monsters = {
  "data": {
      "queryMonsters": [
          {
              "index": "adult-gold-dragon",
              "name": "Adult Gold Dragon",
              "size": "HUGE",
              "type": "DRAGON",
              "alignment": "lawful good",
              "challenge_rating": 17
          },
          {
              "index": "ancient-brass-dragon",
              "name": "Ancient Brass Dragon",
              "size": "GARGANTUAN",
              "type": "DRAGON",
              "alignment": "chaotic good",
              "challenge_rating": 20
          },
          {
              "index": "aboleth",
              "name": "Aboleth",
              "size": "LARGE",
              "type": "ABERRATION",
              "alignment": "lawful evil",
              "challenge_rating": 10
          },
          {
              "index": "ghoul",
              "name": "Ghoul",
              "size": "MEDIUM",
              "type": "UNDEAD",
              "alignment": "chaotic evil",
              "challenge_rating": 1
          }
      ]
  }
}

export const singleMonster = {
  "data": {
      "queryMonster": {
          "index": "aboleth",
          "name": "Aboleth",
          "challenge_rating": 10,
          "image": "/api/images/monsters/aboleth.png",
          "size": "LARGE",
          "type": "ABERRATION",
          "alignment": "lawful evil",
          "armor_class": [
              {
                  "value": 17
              }
          ],
          "speed": {
              "walk": "10 ft.",
              "fly": null,
              "swim": "40 ft."
          },
          "hit_points": 135,
          "strength": 21,
          "dexterity": 9,
          "constitution": 15,
          "intelligence": 18,
          "wisdom": 15,
          "charisma": 18,
          "languages": "Deep Speech, telepathy 120 ft.",
          "special_abilities": [
              {
                  "name": "Amphibious",
                  "desc": "The aboleth can breathe air and water."
              },
              {
                  "name": "Mucous Cloud",
                  "desc": "While underwater, the aboleth is surrounded by transformative mucus. A creature that touches the aboleth or that hits it with a melee attack while within 5 ft. of it must make a DC 14 Constitution saving throw. On a failure, the creature is diseased for 1d4 hours. The diseased creature can breathe only underwater."
              },
              {
                  "name": "Probing Telepathy",
                  "desc": "If a creature communicates telepathically with the aboleth, the aboleth learns the creature's greatest desires if the aboleth can see the creature."
              }
          ],
          "actions": [
              {
                  "name": "Multiattack",
                  "desc": "The aboleth makes three tentacle attacks."
              },
              {
                  "name": "Tentacle",
                  "desc": "Melee Weapon Attack: +9 to hit, reach 10 ft., one target. Hit: 12 (2d6 + 5) bludgeoning damage. If the target is a creature, it must succeed on a DC 14 Constitution saving throw or become diseased. The disease has no effect for 1 minute and can be removed by any magic that cures disease. After 1 minute, the diseased creature's skin becomes translucent and slimy, the creature can't regain hit points unless it is underwater, and the disease can be removed only by heal or another disease-curing spell of 6th level or higher. When the creature is outside a body of water, it takes 6 (1d12) acid damage every 10 minutes unless moisture is applied to the skin before 10 minutes have passed."
              },
              {
                  "name": "Tail",
                  "desc": "Melee Weapon Attack: +9 to hit, reach 10 ft., one target. Hit: 15 (3d6 + 5) bludgeoning damage."
              },
              {
                  "name": "Enslave",
                  "desc": "The aboleth targets one creature it can see within 30 ft. of it. The target must succeed on a DC 14 Wisdom saving throw or be magically charmed by the aboleth until the aboleth dies or until it is on a different plane of existence from the target. The charmed target is under the aboleth's control and can't take reactions, and the aboleth and the target can communicate telepathically with each other over any distance.\nWhenever the charmed target takes damage, the target can repeat the saving throw. On a success, the effect ends. No more than once every 24 hours, the target can also repeat the saving throw when it is at least 1 mile away from the aboleth."
              }
          ],
          "legendary_actions": [
              {
                  "name": "Detect",
                  "desc": "The aboleth makes a Wisdom (Perception) check."
              },
              {
                  "name": "Tail Swipe",
                  "desc": "The aboleth makes one tail attack."
              },
              {
                  "name": "Psychic Drain (Costs 2 Actions)",
                  "desc": "One creature charmed by the aboleth takes 10 (3d6) psychic damage, and the aboleth regains hit points equal to the damage the creature takes."
              }
          ]
      }
  }
}

export const userData = {
  "data": {
      "queryUsers": [
          {
              "id": 55,
              "username": "Shrek",
              "password": "password123",
              "encounters": [
                  {
                      "encounter_id": 3
                  },
                  {
                      "encounter_id": 5
                  }
              ]
          }
      ]
  }
}

export const encounterData = {
  "data": {
      "queryEncounters": [
          {
              "id": 55,
              "encounter_name": "Party Wipe",
              "party_size": "4",
              "party_level": "3",
              "summary": "Pretty spicy",
              "description": "You're about to fight 3 beholders, feel free to cry",
              "treasure": "50GP, Longbow",
              "encounter_monsters": [
                {
                  "index": "adult-gold-dragon",
                  "name": "Adult Gold Dragon",
                  "size": "HUGE",
                  "type": "DRAGON",
                  "alignment": "lawful good",
                  "challenge_rating": 17
                },
                {
                  "index": "ancient-brass-dragon",
                  "name": "Ancient Brass Dragon",
                  "size": "GARGANTUAN",
                  "type": "DRAGON",
                  "alignment": "chaotic good",
                  "challenge_rating": 20
                },
                {
                  "index": "aboleth",
                  "name": "Aboleth",
                  "size": "LARGE",
                  "type": "ABERRATION",
                  "alignment": "lawful evil",
                  "challenge_rating": 10
                },
                {
                  "index": "ghoul",
                  "name": "Ghoul",
                  "size": "MEDIUM",
                  "type": "UNDEAD",
                  "alignment": "chaotic evil",
                  "challenge_rating": 1
                }
              ]
          }
      ]
  }
}