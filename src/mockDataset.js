export const monsters = {
  "queryMonsters": [
    {
      "index": "adult-black-dragon",
      "name": "Adult Black Dragon",
      "size": "HUGE",
      "type": null,
      "armorClass": "19",
      "speed": {
        "walk": "40 ft.",
        "fly": "80 ft.",
        "swim": "40 ft."
      },
      "hitPoints": 195,
      "strength": 23,
      "dexterity": 14,
      "constitution": 21,
      "intelligence": 14,
      "wisdom": 13,
      "charisma": 17,
      "damageVulnerabilities": "[]",
      "damageResistances": "[]",
      "damageImmunities": "[\"acid\"]",
      "conditionImmunities": [],
      "proficiencyBonus": 5,
      "proficiencies": [
        {
          "name": "Saving Throw: DEX",
          "value": "7"
        },
        {
          "name": "Saving Throw: CON",
          "value": "10"
        },
        {
          "name": "Saving Throw: WIS",
          "value": "6"
        },
        {
          "name": "Saving Throw: CHA",
          "value": "8"
        },
        {
          "name": "Skill: Perception",
          "value": "11"
        },
        {
          "name": "Skill: Stealth",
          "value": "7"
        }
      ],
      "senses": {
        "blindsight": "60 ft.",
        "darkvision": "120 ft.",
        "passivePerception": "21"
      },
      "specialAbilities": [
        {
          "name": "Amphibious",
          "desc": "The dragon can breathe air and water."
        },
        {
          "name": "Legendary Resistance",
          "desc": "If the dragon fails a saving throw, it can choose to succeed instead."
        }
      ],
      "actions": [
        {
          "name": "Multiattack",
          "desc": "The dragon can use its Frightful Presence. It then makes three attacks: one with its bite and two with its claws."
        },
        {
          "name": "Bite",
          "desc": "Melee Weapon Attack: +11 to hit, reach 10 ft., one target. Hit: 17 (2d10 + 6) piercing damage plus 4 (1d8) acid damage."
        },
        {
          "name": "Claw",
          "desc": "Melee Weapon Attack: +11 to hit, reach 5 ft., one target. Hit: 13 (2d6 + 6) slashing damage."
        },
        {
          "name": "Tail",
          "desc": "Melee Weapon Attack: +11 to hit, reach 15 ft., one target. Hit: 15 (2d8 + 6) bludgeoning damage."
        },
        {
          "name": "Frightful Presence",
          "desc": "Each creature of the dragon's choice that is within 120 feet of the dragon and aware of it must succeed on a DC 16 Wisdom saving throw or become frightened for 1 minute. A creature can repeat the saving throw at the end of each of its turns, ending the effect on itself on a success. If a creature's saving throw is successful or the effect ends for it, the creature is immune to the dragon's Frightful Presence for the next 24 hours."
        },
        {
          "name": "Acid Breath",
          "desc": "The dragon exhales acid in a 60-foot line that is 5 feet wide. Each creature in that line must make a DC 18 Dexterity saving throw, taking 54 (12d8) acid damage on a failed save, or half as much damage on a successful one."
        }
      ],
      "legendaryActions": [
        {
          "name": "Detect",
          "desc": "The dragon makes a Wisdom (Perception) check."
        },
        {
          "name": "Tail Attack",
          "desc": "The dragon makes a tail attack."
        },
        {
          "name": "Wing Attack (Costs 2 Actions)",
          "desc": "The dragon beats its wings. Each creature within 10 ft. of the dragon must succeed on a DC 19 Dexterity saving throw or take 13 (2d6 + 6) bludgeoning damage and be knocked prone. The dragon can then fly up to half its flying speed."
        }
      ],
      "url": "/api/monsters/adult-black-dragon"
    },
    {
      "index": "ancient-brass-dragon",
      "name": "Ancient Brass Dragon",
      "size": "Gargantuan",
      "armor_class": [
        {
          "value": 20
        }
      ],
      "hit_points": 297,
      "speed": {
        "walk": "40 ft.",
        "burrow": "40 ft.",
        "fly": "80 ft."
      },
      "strength": 27,
      "dexterity": 10,
      "constitution": 25,
      "intelligence": 16,
      "wisdom": 15,
      "charisma": 19,
      "proficiencies": [
        {
          "value": 6,
          "proficiency": {
            "index": "saving-throw-dex",
            "name": "Saving Throw: DEX",
            "url": "/api/proficiencies/saving-throw-dex"
          }
        },
        {
          "value": 13,
          "proficiency": {
            "index": "saving-throw-con",
            "name": "Saving Throw: CON",
            "url": "/api/proficiencies/saving-throw-con"
          }
        },
        {
          "value": 8,
          "proficiency": {
            "index": "saving-throw-wis",
            "name": "Saving Throw: WIS",
            "url": "/api/proficiencies/saving-throw-wis"
          }
        },
        {
          "value": 10,
          "proficiency": {
            "index": "saving-throw-cha",
            "name": "Saving Throw: CHA",
            "url": "/api/proficiencies/saving-throw-cha"
          }
        },
        {
          "value": 9,
          "proficiency": {
            "index": "skill-history",
            "name": "Skill: History",
            "url": "/api/proficiencies/skill-history"
          }
        },
        {
          "value": 14,
          "proficiency": {
            "index": "skill-perception",
            "name": "Skill: Perception",
            "url": "/api/proficiencies/skill-perception"
          }
        },
        {
          "value": 10,
          "proficiency": {
            "index": "skill-persuasion",
            "name": "Skill: Persuasion",
            "url": "/api/proficiencies/skill-persuasion"
          }
        },
        {
          "value": 6,
          "proficiency": {
            "index": "skill-stealth",
            "name": "Skill: Stealth",
            "url": "/api/proficiencies/skill-stealth"
          }
        }
      ],
      "damage_vulnerabilities": [],
      "damage_resistances": [],
      "damage_immunities": [
        "fire"
      ],
      "senses": {
        "blindsight": "60 ft.",
        "darkvision": "120 ft.",
        "passive_perception": 24
      },
      "proficiency_bonus": 6,
      "special_abilities": [
        {
          "name": "Legendary Resistance",
          "desc": "If the dragon fails a saving throw, it can choose to succeed instead."
        }
      ],
      "actions": [
        {
          "name": "Multiattack",
          "multiattack_type": "actions",
          "desc": "The dragon can use its Frightful Presence. It then makes three attacks: one with its bite and two with its claws."
        },
        {
          "name": "Bite",
          "desc": "Melee Weapon Attack: +14 to hit, reach 15 ft., one target. Hit: 19 (2d10 + 8) piercing damage."
        },
        {
          "name": "Claw",
          "desc": "Melee Weapon Attack: +14 to hit, reach 10 ft., one target. Hit: 15 (2d6 + 8) slashing damage."
        },
        {
          "name": "Tail",
          "desc": "Melee Weapon Attack: +14 to hit, reach 20 ft., one target. Hit: 17 (2d8 + 8) bludgeoning damage."
        },
        {
          "name": "Frightful Presence",
          "desc": "Each creature of the dragon's choice that is within 120 feet of the dragon and aware of it must succeed on a DC 18 Wisdom saving throw or become frightened for 1 minute. A creature can repeat the saving throw at the end of each of its turns, ending the effect on itself on a success. If a creature's saving throw is successful or the effect ends for it, the creature is immune to the dragon's Frightful Presence for the next 24 hours."
        },
        {
          "name": "Breath Weapons",
          "desc": "The dragon uses one of the following breath weapons:\nFire Breath. The dragon exhales fire in an 90-foot line that is 10 feet wide. Each creature in that line must make a DC 21 Dexterity saving throw, taking 56 (16d6) fire damage on a failed save, or half as much damage on a successful one.\nSleep Breath. The dragon exhales sleep gas in a 90-foot cone. Each creature in that area must succeed on a DC 21 Constitution saving throw or fall unconscious for 10 minutes. This effect ends for a creature if the creature takes damage or someone uses an action to wake it."
        },
        {
          "name": "Change Shape",
          "desc": "The dragon magically polymorphs into a humanoid or beast that has a challenge rating no higher than its own, or back into its true form. It reverts to its true form if it dies. Any equipment it is wearing or carrying is absorbed or borne by the new form (the dragon's choice).\nIn a new form, the dragon retains its alignment, hit points, Hit Dice, ability to speak, proficiencies, Legendary Resistance, lair actions, and Intelligence, Wisdom, and Charisma scores, as well as this action. Its statistics and capabilities are otherwise replaced by those of the new form, except any class features or legendary actions of that form."
        }
      ],
      "legendary_actions": [
        {
          "name": "Detect",
          "desc": "The dragon makes a Wisdom (Perception) check."
        },
        {
          "name": "Tail Attack",
          "desc": "The dragon makes a tail attack."
        },
        {
          "name": "Wing Attack (Costs 2 Actions)",
          "desc": "The dragon beats its wings. Each creature within 15 ft. of the dragon must succeed on a DC 22 Dexterity saving throw or take 15 (2d6 + 8) bludgeoning damage and be knocked prone. The dragon can then fly up to half its flying speed."
        }
      ],
      "url": "/api/monsters/ancient-brass-dragon"
    },
    {
      "index": "aboleth",
      "name": "Aboleth",
      "size": "LARGE",
      "type": null,
      "armorClass": "17",
      "speed": {
        "walk": "10 ft.",
        "fly": null,
        "swim": "40 ft."
      },
      "hitPoints": 135,
      "strength": 21,
      "dexterity": 9,
      "constitution": 15,
      "intelligence": 18,
      "wisdom": 15,
      "charisma": 18,
      "damageVulnerabilities": "[]",
      "damageResistances": "[]",
      "damageImmunities": "[]",
      "conditionImmunities": [],
      "proficiencyBonus": 4,
      "proficiencies": [
        {
          "name": "Saving Throw: CON",
          "value": "6"
        },
        {
          "name": "Saving Throw: INT",
          "value": "8"
        },
        {
          "name": "Saving Throw: WIS",
          "value": "6"
        },
        {
          "name": "Skill: History",
          "value": "12"
        },
        {
          "name": "Skill: Perception",
          "value": "10"
        }
      ],
      "senses": {
        "blindsight": null,
        "darkvision": "120 ft.",
        "passivePerception": "20"
      },
      "specialAbilities": [
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
      "legendaryActions": [
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
      ],
      "url": "/api/monsters/aboleth"
    },
    {
      "index": "ghoul",
      "name": "Ghoul",
      "size": "Medium",
      "armor_class": [
        {
          "value": 12
        }
      ],
      "hit_points": 22,
      "speed": {
        "walk": "30 ft."
      },
      "strength": 13,
      "dexterity": 15,
      "constitution": 10,
      "intelligence": 7,
      "wisdom": 10,
      "charisma": 6,
      "proficiencies": [],
      "damage_vulnerabilities": [],
      "damage_resistances": [],
      "damage_immunities": [
        "poison"
      ],
      "senses": {
        "darkvision": "60 ft.",
        "passive_perception": 10
      },
      "proficiency_bonus": 2,
      "actions": [
        {
          "name": "Bite",
          "desc": "Melee Weapon Attack: +2 to hit, reach 5 ft., one creature. Hit: 9 (2d6 + 2) piercing damage."
        },
        {
          "name": "Claws",
          "desc": "Melee Weapon Attack: +4 to hit, reach 5 ft., one target. Hit: 7 (2d4 + 2) slashing damage. If the target is a creature other than an elf or undead, it must succeed on a DC 10 Constitution saving throw or be paralyzed for 1 minute. The target can repeat the saving throw at the end of each of its turns, ending the effect on itself on a success."
        }
      ],
      "url": "/api/monsters/ghoul",
      "legendary_actions": [],
      "special_abilities": []
    } 
  ]
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
    "queryUsers": 
    [
      {
        "id": 55,
        "username": "Shrek",
        "password": "password123",
        "encounters": [
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
                "size": "Huge",
                "armor_class":
                  {
                    "value": 19
                  },
                "hit_points": 256,
                "speed": {
                  "walk": "40 ft.",
                  "fly": "80 ft.",
                  "swim": "40 ft."
                },
                "strength": 27,
                "dexterity": 14,
                "constitution": 25,
                "intelligence": 16,
                "wisdom": 15,
                "charisma": 24,
                "proficiencies": [
                  {
                    "value": 8,
                    "proficiency": {
                      "index": "saving-throw-dex",
                      "name": "Saving Throw: DEX",
                      "url": "/api/proficiencies/saving-throw-dex"
                    }
                  },
                  {
                    "value": 13,
                    "proficiency": {
                      "index": "saving-throw-con",
                      "name": "Saving Throw: CON",
                      "url": "/api/proficiencies/saving-throw-con"
                    }
                  },
                  {
                    "value": 8,
                    "proficiency": {
                      "index": "saving-throw-wis",
                      "name": "Saving Throw: WIS",
                      "url": "/api/proficiencies/saving-throw-wis"
                    }
                  },
                  {
                    "value": 13,
                    "proficiency": {
                      "index": "saving-throw-cha",
                      "name": "Saving Throw: CHA",
                      "url": "/api/proficiencies/saving-throw-cha"
                    }
                  },
                  {
                    "value": 8,
                    "proficiency": {
                      "index": "skill-insight",
                      "name": "Skill: Insight",
                      "url": "/api/proficiencies/skill-insight"
                    }
                  },
                  {
                    "value": 14,
                    "proficiency": {
                      "index": "skill-perception",
                      "name": "Skill: Perception",
                      "url": "/api/proficiencies/skill-perception"
                    }
                  },
                  {
                    "value": 13,
                    "proficiency": {
                      "index": "skill-persuasion",
                      "name": "Skill: Persuasion",
                      "url": "/api/proficiencies/skill-persuasion"
                    }
                  },
                  {
                    "value": 8,
                    "proficiency": {
                      "index": "skill-stealth",
                      "name": "Skill: Stealth",
                      "url": "/api/proficiencies/skill-stealth"
                    }
                  }
                ],
                "damage_vulnerabilities": [],
                "damage_resistances": [],
                "damage_immunities": [
                  "fire"
                ],
                "senses": {
                  "blindsight": "60 ft.",
                  "darkvision": "120 ft.",
                  "passive_perception": 24
                },
                "proficiency_bonus": 6,
                "special_abilities": [
                  {
                    "name": "Amphibious",
                    "desc": "The dragon can breathe air and water."
                  },
                  {
                    "name": "Legendary Resistance",
                    "desc": "If the dragon fails a saving throw, it can choose to succeed instead."
                  }
                ],
                "actions": [
                  {
                    "name": "Multiattack",
                    "desc": "The dragon can use its Frightful Presence. It then makes three attacks: one with its bite and two with its claws."
                  },
                  {
                    "name": "Bite",
                    "desc": "Melee Weapon Attack: +14 to hit, reach 10 ft., one target. Hit: 19 (2d10 + 8) piercing damage."
                  },
                  {
                    "name": "Claw",
                    "desc": "Melee Weapon Attack: +14 to hit, reach 5 ft., one target. Hit: 15 (2d6 + 8) slashing damage."
                  },
                  {
                    "name": "Tail",
                    "desc": "Melee Weapon Attack: +14 to hit, reach 15 ft., one target. Hit: 17 (2d8 + 8) bludgeoning damage."
                  },
                  {
                    "name": "Frightful Presence",
                    "desc": "Each creature of the dragon's choice that is within 120 feet of the dragon and aware of it must succeed on a DC 21 Wisdom saving throw or become frightened for 1 minute. A creature can repeat the saving throw at the end of each of its turns, ending the effect on itself on a success. If a creature's saving throw is successful or the effect ends for it, the creature is immune to the dragon's Frightful Presence for the next 24 hours."
                  },
                  {
                    "name": "Breath Weapons",
                    "desc": "The dragon uses one of the following breath weapons.\nFire Breath. The dragon exhales fire in a 60-foot cone. Each creature in that area must make a DC 21 Dexterity saving throw, taking 66 (12d10) fire damage on a failed save, or half as much damage on a successful one.\nWeakening Breath. The dragon exhales gas in a 60-foot cone. Each creature in that area must succeed on a DC 21 Strength saving throw or have disadvantage on Strength-based attack rolls, Strength checks, and Strength saving throws for 1 minute. A creature can repeat the saving throw at the end of each of its turns, ending the effect on itself on a success."
                  }
                ],
                "legendary_actions": [
                  {
                    "name": "Detect",
                    "desc": "The dragon makes a Wisdom (Perception) check."
                  },
                  {
                    "name": "Tail Attack",
                    "desc": "The dragon makes a tail attack."
                  },
                  {
                    "name": "Wing Attack (Costs 2 Actions)",
                    "desc": "The dragon beats its wings. Each creature within 10 ft. of the dragon must succeed on a DC 22 Dexterity saving throw or take 15 (2d6 + 8) bludgeoning damage and be knocked prone. The dragon can then fly up to half its flying speed."
                  }
                ],
                "url": "/api/monsters/adult-gold-dragon"
              },
              {
                "index": "ancient-brass-dragon",
                "name": "Ancient Brass Dragon",
                "size": "Gargantuan",
                "armor_class": [
                  {
                    "value": 20
                  }
                ],
                "hit_points": 297,
                "speed": {
                  "walk": "40 ft.",
                  "burrow": "40 ft.",
                  "fly": "80 ft."
                },
                "strength": 27,
                "dexterity": 10,
                "constitution": 25,
                "intelligence": 16,
                "wisdom": 15,
                "charisma": 19,
                "proficiencies": [
                  {
                    "value": 6,
                    "proficiency": {
                      "index": "saving-throw-dex",
                      "name": "Saving Throw: DEX",
                      "url": "/api/proficiencies/saving-throw-dex"
                    }
                  },
                  {
                    "value": 13,
                    "proficiency": {
                      "index": "saving-throw-con",
                      "name": "Saving Throw: CON",
                      "url": "/api/proficiencies/saving-throw-con"
                    }
                  },
                  {
                    "value": 8,
                    "proficiency": {
                      "index": "saving-throw-wis",
                      "name": "Saving Throw: WIS",
                      "url": "/api/proficiencies/saving-throw-wis"
                    }
                  },
                  {
                    "value": 10,
                    "proficiency": {
                      "index": "saving-throw-cha",
                      "name": "Saving Throw: CHA",
                      "url": "/api/proficiencies/saving-throw-cha"
                    }
                  },
                  {
                    "value": 9,
                    "proficiency": {
                      "index": "skill-history",
                      "name": "Skill: History",
                      "url": "/api/proficiencies/skill-history"
                    }
                  },
                  {
                    "value": 14,
                    "proficiency": {
                      "index": "skill-perception",
                      "name": "Skill: Perception",
                      "url": "/api/proficiencies/skill-perception"
                    }
                  },
                  {
                    "value": 10,
                    "proficiency": {
                      "index": "skill-persuasion",
                      "name": "Skill: Persuasion",
                      "url": "/api/proficiencies/skill-persuasion"
                    }
                  },
                  {
                    "value": 6,
                    "proficiency": {
                      "index": "skill-stealth",
                      "name": "Skill: Stealth",
                      "url": "/api/proficiencies/skill-stealth"
                    }
                  }
                ],
                "damage_vulnerabilities": [],
                "damage_resistances": [],
                "damage_immunities": [
                  "fire"
                ],
                "senses": {
                  "blindsight": "60 ft.",
                  "darkvision": "120 ft.",
                  "passive_perception": 24
                },
                "proficiency_bonus": 6,
                "special_abilities": [
                  {
                    "name": "Legendary Resistance",
                    "desc": "If the dragon fails a saving throw, it can choose to succeed instead."
                  }
                ],
                "actions": [
                  {
                    "name": "Multiattack",
                    "multiattack_type": "actions",
                    "desc": "The dragon can use its Frightful Presence. It then makes three attacks: one with its bite and two with its claws."
                  },
                  {
                    "name": "Bite",
                    "desc": "Melee Weapon Attack: +14 to hit, reach 15 ft., one target. Hit: 19 (2d10 + 8) piercing damage."
                  },
                  {
                    "name": "Claw",
                    "desc": "Melee Weapon Attack: +14 to hit, reach 10 ft., one target. Hit: 15 (2d6 + 8) slashing damage."
                  },
                  {
                    "name": "Tail",
                    "desc": "Melee Weapon Attack: +14 to hit, reach 20 ft., one target. Hit: 17 (2d8 + 8) bludgeoning damage."
                  },
                  {
                    "name": "Frightful Presence",
                    "desc": "Each creature of the dragon's choice that is within 120 feet of the dragon and aware of it must succeed on a DC 18 Wisdom saving throw or become frightened for 1 minute. A creature can repeat the saving throw at the end of each of its turns, ending the effect on itself on a success. If a creature's saving throw is successful or the effect ends for it, the creature is immune to the dragon's Frightful Presence for the next 24 hours."
                  },
                  {
                    "name": "Breath Weapons",
                    "desc": "The dragon uses one of the following breath weapons:\nFire Breath. The dragon exhales fire in an 90-foot line that is 10 feet wide. Each creature in that line must make a DC 21 Dexterity saving throw, taking 56 (16d6) fire damage on a failed save, or half as much damage on a successful one.\nSleep Breath. The dragon exhales sleep gas in a 90-foot cone. Each creature in that area must succeed on a DC 21 Constitution saving throw or fall unconscious for 10 minutes. This effect ends for a creature if the creature takes damage or someone uses an action to wake it."
                  },
                  {
                    "name": "Change Shape",
                    "desc": "The dragon magically polymorphs into a humanoid or beast that has a challenge rating no higher than its own, or back into its true form. It reverts to its true form if it dies. Any equipment it is wearing or carrying is absorbed or borne by the new form (the dragon's choice).\nIn a new form, the dragon retains its alignment, hit points, Hit Dice, ability to speak, proficiencies, Legendary Resistance, lair actions, and Intelligence, Wisdom, and Charisma scores, as well as this action. Its statistics and capabilities are otherwise replaced by those of the new form, except any class features or legendary actions of that form."
                  }
                ],
                "legendary_actions": [
                  {
                    "name": "Detect",
                    "desc": "The dragon makes a Wisdom (Perception) check."
                  },
                  {
                    "name": "Tail Attack",
                    "desc": "The dragon makes a tail attack."
                  },
                  {
                    "name": "Wing Attack (Costs 2 Actions)",
                    "desc": "The dragon beats its wings. Each creature within 15 ft. of the dragon must succeed on a DC 22 Dexterity saving throw or take 15 (2d6 + 8) bludgeoning damage and be knocked prone. The dragon can then fly up to half its flying speed."
                  }
                ],
                "url": "/api/monsters/ancient-brass-dragon"
              },
              {
                "index": "ghoul",
                "name": "Ghoul",
                "size": "Medium",
                "armor_class": [
                  {
                    "value": 12
                  }
                ],
                "hit_points": 22,
                "speed": {
                  "walk": "30 ft."
                },
                "strength": 13,
                "dexterity": 15,
                "constitution": 10,
                "intelligence": 7,
                "wisdom": 10,
                "charisma": 6,
                "proficiencies": [],
                "damage_vulnerabilities": [],
                "damage_resistances": [],
                "damage_immunities": [
                  "poison"
                ],
                "senses": {
                  "darkvision": "60 ft.",
                  "passive_perception": 10
                },
                "proficiency_bonus": 2,
                "actions": [
                  {
                    "name": "Bite",
                    "desc": "Melee Weapon Attack: +2 to hit, reach 5 ft., one creature. Hit: 9 (2d6 + 2) piercing damage."
                  },
                  {
                    "name": "Claws",
                    "desc": "Melee Weapon Attack: +4 to hit, reach 5 ft., one target. Hit: 7 (2d4 + 2) slashing damage. If the target is a creature other than an elf or undead, it must succeed on a DC 10 Constitution saving throw or be paralyzed for 1 minute. The target can repeat the saving throw at the end of each of its turns, ending the effect on itself on a success."
                  }
                ],
                "url": "/api/monsters/ghoul",
                "legendary_actions": [],
                "special_abilities": []
              }          
            ]
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
            "size": "Huge",
            "armor_class":
              {
                "value": 19
              },
            "hit_points": 256,
            "speed": {
              "walk": "40 ft.",
              "fly": "80 ft.",
              "swim": "40 ft."
            },
            "strength": 27,
            "dexterity": 14,
            "constitution": 25,
            "intelligence": 16,
            "wisdom": 15,
            "charisma": 24,
            "proficiencies": [
              {
                "value": 8,
                "proficiency": {
                  "index": "saving-throw-dex",
                  "name": "Saving Throw: DEX",
                  "url": "/api/proficiencies/saving-throw-dex"
                }
              },
              {
                "value": 13,
                "proficiency": {
                  "index": "saving-throw-con",
                  "name": "Saving Throw: CON",
                  "url": "/api/proficiencies/saving-throw-con"
                }
              },
              {
                "value": 8,
                "proficiency": {
                  "index": "saving-throw-wis",
                  "name": "Saving Throw: WIS",
                  "url": "/api/proficiencies/saving-throw-wis"
                }
              },
              {
                "value": 13,
                "proficiency": {
                  "index": "saving-throw-cha",
                  "name": "Saving Throw: CHA",
                  "url": "/api/proficiencies/saving-throw-cha"
                }
              },
              {
                "value": 8,
                "proficiency": {
                  "index": "skill-insight",
                  "name": "Skill: Insight",
                  "url": "/api/proficiencies/skill-insight"
                }
              },
              {
                "value": 14,
                "proficiency": {
                  "index": "skill-perception",
                  "name": "Skill: Perception",
                  "url": "/api/proficiencies/skill-perception"
                }
              },
              {
                "value": 13,
                "proficiency": {
                  "index": "skill-persuasion",
                  "name": "Skill: Persuasion",
                  "url": "/api/proficiencies/skill-persuasion"
                }
              },
              {
                "value": 8,
                "proficiency": {
                  "index": "skill-stealth",
                  "name": "Skill: Stealth",
                  "url": "/api/proficiencies/skill-stealth"
                }
              }
            ],
            "damage_vulnerabilities": [],
            "damage_resistances": [],
            "damage_immunities": [
              "fire"
            ],
            "senses": {
              "blindsight": "60 ft.",
              "darkvision": "120 ft.",
              "passive_perception": 24
            },
            "proficiency_bonus": 6,
            "special_abilities": [
              {
                "name": "Amphibious",
                "desc": "The dragon can breathe air and water."
              },
              {
                "name": "Legendary Resistance",
                "desc": "If the dragon fails a saving throw, it can choose to succeed instead."
              }
            ],
            "actions": [
              {
                "name": "Multiattack",
                "desc": "The dragon can use its Frightful Presence. It then makes three attacks: one with its bite and two with its claws."
              },
              {
                "name": "Bite",
                "desc": "Melee Weapon Attack: +14 to hit, reach 10 ft., one target. Hit: 19 (2d10 + 8) piercing damage."
              },
              {
                "name": "Claw",
                "desc": "Melee Weapon Attack: +14 to hit, reach 5 ft., one target. Hit: 15 (2d6 + 8) slashing damage."
              },
              {
                "name": "Tail",
                "desc": "Melee Weapon Attack: +14 to hit, reach 15 ft., one target. Hit: 17 (2d8 + 8) bludgeoning damage."
              },
              {
                "name": "Frightful Presence",
                "desc": "Each creature of the dragon's choice that is within 120 feet of the dragon and aware of it must succeed on a DC 21 Wisdom saving throw or become frightened for 1 minute. A creature can repeat the saving throw at the end of each of its turns, ending the effect on itself on a success. If a creature's saving throw is successful or the effect ends for it, the creature is immune to the dragon's Frightful Presence for the next 24 hours."
              },
              {
                "name": "Breath Weapons",
                "desc": "The dragon uses one of the following breath weapons.\nFire Breath. The dragon exhales fire in a 60-foot cone. Each creature in that area must make a DC 21 Dexterity saving throw, taking 66 (12d10) fire damage on a failed save, or half as much damage on a successful one.\nWeakening Breath. The dragon exhales gas in a 60-foot cone. Each creature in that area must succeed on a DC 21 Strength saving throw or have disadvantage on Strength-based attack rolls, Strength checks, and Strength saving throws for 1 minute. A creature can repeat the saving throw at the end of each of its turns, ending the effect on itself on a success."
              }
            ],
            "legendary_actions": [
              {
                "name": "Detect",
                "desc": "The dragon makes a Wisdom (Perception) check."
              },
              {
                "name": "Tail Attack",
                "desc": "The dragon makes a tail attack."
              },
              {
                "name": "Wing Attack (Costs 2 Actions)",
                "desc": "The dragon beats its wings. Each creature within 10 ft. of the dragon must succeed on a DC 22 Dexterity saving throw or take 15 (2d6 + 8) bludgeoning damage and be knocked prone. The dragon can then fly up to half its flying speed."
              }
            ],
            "url": "/api/monsters/adult-gold-dragon"
          },
          {
            "index": "ancient-brass-dragon",
            "name": "Ancient Brass Dragon",
            "size": "Gargantuan",
            "armor_class": [
              {
                "value": 20
              }
            ],
            "hit_points": 297,
            "speed": {
              "walk": "40 ft.",
              "burrow": "40 ft.",
              "fly": "80 ft."
            },
            "strength": 27,
            "dexterity": 10,
            "constitution": 25,
            "intelligence": 16,
            "wisdom": 15,
            "charisma": 19,
            "proficiencies": [
              {
                "value": 6,
                "proficiency": {
                  "index": "saving-throw-dex",
                  "name": "Saving Throw: DEX",
                  "url": "/api/proficiencies/saving-throw-dex"
                }
              },
              {
                "value": 13,
                "proficiency": {
                  "index": "saving-throw-con",
                  "name": "Saving Throw: CON",
                  "url": "/api/proficiencies/saving-throw-con"
                }
              },
              {
                "value": 8,
                "proficiency": {
                  "index": "saving-throw-wis",
                  "name": "Saving Throw: WIS",
                  "url": "/api/proficiencies/saving-throw-wis"
                }
              },
              {
                "value": 10,
                "proficiency": {
                  "index": "saving-throw-cha",
                  "name": "Saving Throw: CHA",
                  "url": "/api/proficiencies/saving-throw-cha"
                }
              },
              {
                "value": 9,
                "proficiency": {
                  "index": "skill-history",
                  "name": "Skill: History",
                  "url": "/api/proficiencies/skill-history"
                }
              },
              {
                "value": 14,
                "proficiency": {
                  "index": "skill-perception",
                  "name": "Skill: Perception",
                  "url": "/api/proficiencies/skill-perception"
                }
              },
              {
                "value": 10,
                "proficiency": {
                  "index": "skill-persuasion",
                  "name": "Skill: Persuasion",
                  "url": "/api/proficiencies/skill-persuasion"
                }
              },
              {
                "value": 6,
                "proficiency": {
                  "index": "skill-stealth",
                  "name": "Skill: Stealth",
                  "url": "/api/proficiencies/skill-stealth"
                }
              }
            ],
            "damage_vulnerabilities": [],
            "damage_resistances": [],
            "damage_immunities": [
              "fire"
            ],
            "senses": {
              "blindsight": "60 ft.",
              "darkvision": "120 ft.",
              "passive_perception": 24
            },
            "proficiency_bonus": 6,
            "special_abilities": [
              {
                "name": "Legendary Resistance",
                "desc": "If the dragon fails a saving throw, it can choose to succeed instead."
              }
            ],
            "actions": [
              {
                "name": "Multiattack",
                "multiattack_type": "actions",
                "desc": "The dragon can use its Frightful Presence. It then makes three attacks: one with its bite and two with its claws."
              },
              {
                "name": "Bite",
                "desc": "Melee Weapon Attack: +14 to hit, reach 15 ft., one target. Hit: 19 (2d10 + 8) piercing damage."
              },
              {
                "name": "Claw",
                "desc": "Melee Weapon Attack: +14 to hit, reach 10 ft., one target. Hit: 15 (2d6 + 8) slashing damage."
              },
              {
                "name": "Tail",
                "desc": "Melee Weapon Attack: +14 to hit, reach 20 ft., one target. Hit: 17 (2d8 + 8) bludgeoning damage."
              },
              {
                "name": "Frightful Presence",
                "desc": "Each creature of the dragon's choice that is within 120 feet of the dragon and aware of it must succeed on a DC 18 Wisdom saving throw or become frightened for 1 minute. A creature can repeat the saving throw at the end of each of its turns, ending the effect on itself on a success. If a creature's saving throw is successful or the effect ends for it, the creature is immune to the dragon's Frightful Presence for the next 24 hours."
              },
              {
                "name": "Breath Weapons",
                "desc": "The dragon uses one of the following breath weapons:\nFire Breath. The dragon exhales fire in an 90-foot line that is 10 feet wide. Each creature in that line must make a DC 21 Dexterity saving throw, taking 56 (16d6) fire damage on a failed save, or half as much damage on a successful one.\nSleep Breath. The dragon exhales sleep gas in a 90-foot cone. Each creature in that area must succeed on a DC 21 Constitution saving throw or fall unconscious for 10 minutes. This effect ends for a creature if the creature takes damage or someone uses an action to wake it."
              },
              {
                "name": "Change Shape",
                "desc": "The dragon magically polymorphs into a humanoid or beast that has a challenge rating no higher than its own, or back into its true form. It reverts to its true form if it dies. Any equipment it is wearing or carrying is absorbed or borne by the new form (the dragon's choice).\nIn a new form, the dragon retains its alignment, hit points, Hit Dice, ability to speak, proficiencies, Legendary Resistance, lair actions, and Intelligence, Wisdom, and Charisma scores, as well as this action. Its statistics and capabilities are otherwise replaced by those of the new form, except any class features or legendary actions of that form."
              }
            ],
            "legendary_actions": [
              {
                "name": "Detect",
                "desc": "The dragon makes a Wisdom (Perception) check."
              },
              {
                "name": "Tail Attack",
                "desc": "The dragon makes a tail attack."
              },
              {
                "name": "Wing Attack (Costs 2 Actions)",
                "desc": "The dragon beats its wings. Each creature within 15 ft. of the dragon must succeed on a DC 22 Dexterity saving throw or take 15 (2d6 + 8) bludgeoning damage and be knocked prone. The dragon can then fly up to half its flying speed."
              }
            ],
            "url": "/api/monsters/ancient-brass-dragon"
          },
          {
            "index": "ghoul",
            "name": "Ghoul",
            "size": "Medium",
            "armor_class": [
              {
                "value": 12
              }
            ],
            "hit_points": 22,
            "speed": {
              "walk": "30 ft."
            },
            "strength": 13,
            "dexterity": 15,
            "constitution": 10,
            "intelligence": 7,
            "wisdom": 10,
            "charisma": 6,
            "proficiencies": [],
            "damage_vulnerabilities": [],
            "damage_resistances": [],
            "damage_immunities": [
              "poison"
            ],
            "senses": {
              "darkvision": "60 ft.",
              "passive_perception": 10
            },
            "proficiency_bonus": 2,
            "actions": [
              {
                "name": "Bite",
                "desc": "Melee Weapon Attack: +2 to hit, reach 5 ft., one creature. Hit: 9 (2d6 + 2) piercing damage."
              },
              {
                "name": "Claws",
                "desc": "Melee Weapon Attack: +4 to hit, reach 5 ft., one target. Hit: 7 (2d4 + 2) slashing damage. If the target is a creature other than an elf or undead, it must succeed on a DC 10 Constitution saving throw or be paralyzed for 1 minute. The target can repeat the saving throw at the end of each of its turns, ending the effect on itself on a success."
              }
            ],
            "url": "/api/monsters/ghoul",
            "legendary_actions": [],
            "special_abilities": []
          }          
        ]
      }
    ]
  }
} 

export const encounterPreviewData = {
  "data": {
    "encounter": [
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
            "index": "beholder",
            "monster_name": "Beholder"
          },
          {
            "index": "beholder",
            "monster_name": "Beholder"
          },
          {
            "index": "aboleth",
            "monster_name": "Aboleth"
          }
        ]
      }
    ]
  }
}

export const allEncountersForUser = {
  "data": {
    "queryUsers": [
      {
        "id": 55,
        "username": "Shrek",
        "password": "password123",
        "encounters": [
          {
            "encounter_id": 3,
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
                "size": "Huge",
                "armor_class":
                  {
                    "value": 19
                  },
                "hit_points": 256,
                "speed": {
                  "walk": "40 ft.",
                  "fly": "80 ft.",
                  "swim": "40 ft."
                },
                "strength": 27,
                "dexterity": 14,
                "constitution": 25,
                "intelligence": 16,
                "wisdom": 15,
                "charisma": 24,
                "proficiencies": [
                  {
                    "value": 8,
                    "proficiency": {
                      "index": "saving-throw-dex",
                      "name": "Saving Throw: DEX",
                      "url": "/api/proficiencies/saving-throw-dex"
                    }
                  },
                  {
                    "value": 13,
                    "proficiency": {
                      "index": "saving-throw-con",
                      "name": "Saving Throw: CON",
                      "url": "/api/proficiencies/saving-throw-con"
                    }
                  },
                  {
                    "value": 8,
                    "proficiency": {
                      "index": "saving-throw-wis",
                      "name": "Saving Throw: WIS",
                      "url": "/api/proficiencies/saving-throw-wis"
                    }
                  },
                  {
                    "value": 13,
                    "proficiency": {
                      "index": "saving-throw-cha",
                      "name": "Saving Throw: CHA",
                      "url": "/api/proficiencies/saving-throw-cha"
                    }
                  },
                  {
                    "value": 8,
                    "proficiency": {
                      "index": "skill-insight",
                      "name": "Skill: Insight",
                      "url": "/api/proficiencies/skill-insight"
                    }
                  },
                  {
                    "value": 14,
                    "proficiency": {
                      "index": "skill-perception",
                      "name": "Skill: Perception",
                      "url": "/api/proficiencies/skill-perception"
                    }
                  },
                  {
                    "value": 13,
                    "proficiency": {
                      "index": "skill-persuasion",
                      "name": "Skill: Persuasion",
                      "url": "/api/proficiencies/skill-persuasion"
                    }
                  },
                  {
                    "value": 8,
                    "proficiency": {
                      "index": "skill-stealth",
                      "name": "Skill: Stealth",
                      "url": "/api/proficiencies/skill-stealth"
                    }
                  }
                ],
                "damage_vulnerabilities": [],
                "damage_resistances": [],
                "damage_immunities": [
                  "fire"
                ],
                "senses": {
                  "blindsight": "60 ft.",
                  "darkvision": "120 ft.",
                  "passive_perception": 24
                },
                "proficiency_bonus": 6,
                "special_abilities": [
                  {
                    "name": "Amphibious",
                    "desc": "The dragon can breathe air and water."
                  },
                  {
                    "name": "Legendary Resistance",
                    "desc": "If the dragon fails a saving throw, it can choose to succeed instead."
                  }
                ],
                "actions": [
                  {
                    "name": "Multiattack",
                    "desc": "The dragon can use its Frightful Presence. It then makes three attacks: one with its bite and two with its claws."
                  },
                  {
                    "name": "Bite",
                    "desc": "Melee Weapon Attack: +14 to hit, reach 10 ft., one target. Hit: 19 (2d10 + 8) piercing damage."
                  },
                  {
                    "name": "Claw",
                    "desc": "Melee Weapon Attack: +14 to hit, reach 5 ft., one target. Hit: 15 (2d6 + 8) slashing damage."
                  },
                  {
                    "name": "Tail",
                    "desc": "Melee Weapon Attack: +14 to hit, reach 15 ft., one target. Hit: 17 (2d8 + 8) bludgeoning damage."
                  },
                  {
                    "name": "Frightful Presence",
                    "desc": "Each creature of the dragon's choice that is within 120 feet of the dragon and aware of it must succeed on a DC 21 Wisdom saving throw or become frightened for 1 minute. A creature can repeat the saving throw at the end of each of its turns, ending the effect on itself on a success. If a creature's saving throw is successful or the effect ends for it, the creature is immune to the dragon's Frightful Presence for the next 24 hours."
                  },
                  {
                    "name": "Breath Weapons",
                    "desc": "The dragon uses one of the following breath weapons.\nFire Breath. The dragon exhales fire in a 60-foot cone. Each creature in that area must make a DC 21 Dexterity saving throw, taking 66 (12d10) fire damage on a failed save, or half as much damage on a successful one.\nWeakening Breath. The dragon exhales gas in a 60-foot cone. Each creature in that area must succeed on a DC 21 Strength saving throw or have disadvantage on Strength-based attack rolls, Strength checks, and Strength saving throws for 1 minute. A creature can repeat the saving throw at the end of each of its turns, ending the effect on itself on a success."
                  }
                ],
                "legendary_actions": [
                  {
                    "name": "Detect",
                    "desc": "The dragon makes a Wisdom (Perception) check."
                  },
                  {
                    "name": "Tail Attack",
                    "desc": "The dragon makes a tail attack."
                  },
                  {
                    "name": "Wing Attack (Costs 2 Actions)",
                    "desc": "The dragon beats its wings. Each creature within 10 ft. of the dragon must succeed on a DC 22 Dexterity saving throw or take 15 (2d6 + 8) bludgeoning damage and be knocked prone. The dragon can then fly up to half its flying speed."
                  }
                ],
                "url": "/api/monsters/adult-gold-dragon"
              },
              {
                "index": "ancient-brass-dragon",
                "name": "Ancient Brass Dragon",
                "size": "Gargantuan",
                "armor_class": [
                  {
                    "value": 20
                  }
                ],
                "hit_points": 297,
                "speed": {
                  "walk": "40 ft.",
                  "burrow": "40 ft.",
                  "fly": "80 ft."
                },
                "strength": 27,
                "dexterity": 10,
                "constitution": 25,
                "intelligence": 16,
                "wisdom": 15,
                "charisma": 19,
                "proficiencies": [
                  {
                    "value": 6,
                    "proficiency": {
                      "index": "saving-throw-dex",
                      "name": "Saving Throw: DEX",
                      "url": "/api/proficiencies/saving-throw-dex"
                    }
                  },
                  {
                    "value": 13,
                    "proficiency": {
                      "index": "saving-throw-con",
                      "name": "Saving Throw: CON",
                      "url": "/api/proficiencies/saving-throw-con"
                    }
                  },
                  {
                    "value": 8,
                    "proficiency": {
                      "index": "saving-throw-wis",
                      "name": "Saving Throw: WIS",
                      "url": "/api/proficiencies/saving-throw-wis"
                    }
                  },
                  {
                    "value": 10,
                    "proficiency": {
                      "index": "saving-throw-cha",
                      "name": "Saving Throw: CHA",
                      "url": "/api/proficiencies/saving-throw-cha"
                    }
                  },
                  {
                    "value": 9,
                    "proficiency": {
                      "index": "skill-history",
                      "name": "Skill: History",
                      "url": "/api/proficiencies/skill-history"
                    }
                  },
                  {
                    "value": 14,
                    "proficiency": {
                      "index": "skill-perception",
                      "name": "Skill: Perception",
                      "url": "/api/proficiencies/skill-perception"
                    }
                  },
                  {
                    "value": 10,
                    "proficiency": {
                      "index": "skill-persuasion",
                      "name": "Skill: Persuasion",
                      "url": "/api/proficiencies/skill-persuasion"
                    }
                  },
                  {
                    "value": 6,
                    "proficiency": {
                      "index": "skill-stealth",
                      "name": "Skill: Stealth",
                      "url": "/api/proficiencies/skill-stealth"
                    }
                  }
                ],
                "damage_vulnerabilities": [],
                "damage_resistances": [],
                "damage_immunities": [
                  "fire"
                ],
                "senses": {
                  "blindsight": "60 ft.",
                  "darkvision": "120 ft.",
                  "passive_perception": 24
                },
                "proficiency_bonus": 6,
                "special_abilities": [
                  {
                    "name": "Legendary Resistance",
                    "desc": "If the dragon fails a saving throw, it can choose to succeed instead."
                  }
                ],
                "actions": [
                  {
                    "name": "Multiattack",
                    "multiattack_type": "actions",
                    "desc": "The dragon can use its Frightful Presence. It then makes three attacks: one with its bite and two with its claws."
                  },
                  {
                    "name": "Bite",
                    "desc": "Melee Weapon Attack: +14 to hit, reach 15 ft., one target. Hit: 19 (2d10 + 8) piercing damage."
                  },
                  {
                    "name": "Claw",
                    "desc": "Melee Weapon Attack: +14 to hit, reach 10 ft., one target. Hit: 15 (2d6 + 8) slashing damage."
                  },
                  {
                    "name": "Tail",
                    "desc": "Melee Weapon Attack: +14 to hit, reach 20 ft., one target. Hit: 17 (2d8 + 8) bludgeoning damage."
                  },
                  {
                    "name": "Frightful Presence",
                    "desc": "Each creature of the dragon's choice that is within 120 feet of the dragon and aware of it must succeed on a DC 18 Wisdom saving throw or become frightened for 1 minute. A creature can repeat the saving throw at the end of each of its turns, ending the effect on itself on a success. If a creature's saving throw is successful or the effect ends for it, the creature is immune to the dragon's Frightful Presence for the next 24 hours."
                  },
                  {
                    "name": "Breath Weapons",
                    "desc": "The dragon uses one of the following breath weapons:\nFire Breath. The dragon exhales fire in an 90-foot line that is 10 feet wide. Each creature in that line must make a DC 21 Dexterity saving throw, taking 56 (16d6) fire damage on a failed save, or half as much damage on a successful one.\nSleep Breath. The dragon exhales sleep gas in a 90-foot cone. Each creature in that area must succeed on a DC 21 Constitution saving throw or fall unconscious for 10 minutes. This effect ends for a creature if the creature takes damage or someone uses an action to wake it."
                  },
                  {
                    "name": "Change Shape",
                    "desc": "The dragon magically polymorphs into a humanoid or beast that has a challenge rating no higher than its own, or back into its true form. It reverts to its true form if it dies. Any equipment it is wearing or carrying is absorbed or borne by the new form (the dragon's choice).\nIn a new form, the dragon retains its alignment, hit points, Hit Dice, ability to speak, proficiencies, Legendary Resistance, lair actions, and Intelligence, Wisdom, and Charisma scores, as well as this action. Its statistics and capabilities are otherwise replaced by those of the new form, except any class features or legendary actions of that form."
                  }
                ],
                "legendary_actions": [
                  {
                    "name": "Detect",
                    "desc": "The dragon makes a Wisdom (Perception) check."
                  },
                  {
                    "name": "Tail Attack",
                    "desc": "The dragon makes a tail attack."
                  },
                  {
                    "name": "Wing Attack (Costs 2 Actions)",
                    "desc": "The dragon beats its wings. Each creature within 15 ft. of the dragon must succeed on a DC 22 Dexterity saving throw or take 15 (2d6 + 8) bludgeoning damage and be knocked prone. The dragon can then fly up to half its flying speed."
                  }
                ],
                "url": "/api/monsters/ancient-brass-dragon"
              },
              {
                "index": "ghoul",
                "name": "Ghoul",
                "size": "Medium",
                "armor_class": [
                  {
                    "value": 12
                  }
                ],
                "hit_points": 22,
                "speed": {
                  "walk": "30 ft."
                },
                "strength": 13,
                "dexterity": 15,
                "constitution": 10,
                "intelligence": 7,
                "wisdom": 10,
                "charisma": 6,
                "proficiencies": [],
                "damage_vulnerabilities": [],
                "damage_resistances": [],
                "damage_immunities": [
                  "poison"
                ],
                "senses": {
                  "darkvision": "60 ft.",
                  "passive_perception": 10
                },
                "proficiency_bonus": 2,
                "actions": [
                  {
                    "name": "Bite",
                    "desc": "Melee Weapon Attack: +2 to hit, reach 5 ft., one creature. Hit: 9 (2d6 + 2) piercing damage."
                  },
                  {
                    "name": "Claws",
                    "desc": "Melee Weapon Attack: +4 to hit, reach 5 ft., one target. Hit: 7 (2d4 + 2) slashing damage. If the target is a creature other than an elf or undead, it must succeed on a DC 10 Constitution saving throw or be paralyzed for 1 minute. The target can repeat the saving throw at the end of each of its turns, ending the effect on itself on a success."
                  }
                ],
                "url": "/api/monsters/ghoul",
                "legendary_actions": [],
                "special_abilities": []
              }          
            ]
          },
          {
            "encounter_id": 5,
            "encounter_name": "Get 'Em",
            "party_size": "5",
            "party_level": "6",
            "summary": "I'mma kill all these fools",
            "description": "It's gonna get ugly. There will be tears.",
            "treasure": "5000GP",
            "encounter_monsters": [
              {
                "index": "adult-gold-dragon",
                "name": "Adult Gold Dragon",
                "size": "Huge",
                "armor_class":
                  {
                    "value": 19
                  },
                "hit_points": 256,
                "speed": {
                  "walk": "40 ft.",
                  "fly": "80 ft.",
                  "swim": "40 ft."
                },
                "strength": 27,
                "dexterity": 14,
                "constitution": 25,
                "intelligence": 16,
                "wisdom": 15,
                "charisma": 24,
                "proficiencies": [
                  {
                    "value": 8,
                    "proficiency": {
                      "index": "saving-throw-dex",
                      "name": "Saving Throw: DEX",
                      "url": "/api/proficiencies/saving-throw-dex"
                    }
                  },
                  {
                    "value": 13,
                    "proficiency": {
                      "index": "saving-throw-con",
                      "name": "Saving Throw: CON",
                      "url": "/api/proficiencies/saving-throw-con"
                    }
                  },
                  {
                    "value": 8,
                    "proficiency": {
                      "index": "saving-throw-wis",
                      "name": "Saving Throw: WIS",
                      "url": "/api/proficiencies/saving-throw-wis"
                    }
                  },
                  {
                    "value": 13,
                    "proficiency": {
                      "index": "saving-throw-cha",
                      "name": "Saving Throw: CHA",
                      "url": "/api/proficiencies/saving-throw-cha"
                    }
                  },
                  {
                    "value": 8,
                    "proficiency": {
                      "index": "skill-insight",
                      "name": "Skill: Insight",
                      "url": "/api/proficiencies/skill-insight"
                    }
                  },
                  {
                    "value": 14,
                    "proficiency": {
                      "index": "skill-perception",
                      "name": "Skill: Perception",
                      "url": "/api/proficiencies/skill-perception"
                    }
                  },
                  {
                    "value": 13,
                    "proficiency": {
                      "index": "skill-persuasion",
                      "name": "Skill: Persuasion",
                      "url": "/api/proficiencies/skill-persuasion"
                    }
                  },
                  {
                    "value": 8,
                    "proficiency": {
                      "index": "skill-stealth",
                      "name": "Skill: Stealth",
                      "url": "/api/proficiencies/skill-stealth"
                    }
                  }
                ],
                "damage_vulnerabilities": [],
                "damage_resistances": [],
                "damage_immunities": [
                  "fire"
                ],
                "senses": {
                  "blindsight": "60 ft.",
                  "darkvision": "120 ft.",
                  "passive_perception": 24
                },
                "proficiency_bonus": 6,
                "special_abilities": [
                  {
                    "name": "Amphibious",
                    "desc": "The dragon can breathe air and water."
                  },
                  {
                    "name": "Legendary Resistance",
                    "desc": "If the dragon fails a saving throw, it can choose to succeed instead."
                  }
                ],
                "actions": [
                  {
                    "name": "Multiattack",
                    "desc": "The dragon can use its Frightful Presence. It then makes three attacks: one with its bite and two with its claws."
                  },
                  {
                    "name": "Bite",
                    "desc": "Melee Weapon Attack: +14 to hit, reach 10 ft., one target. Hit: 19 (2d10 + 8) piercing damage."
                  },
                  {
                    "name": "Claw",
                    "desc": "Melee Weapon Attack: +14 to hit, reach 5 ft., one target. Hit: 15 (2d6 + 8) slashing damage."
                  },
                  {
                    "name": "Tail",
                    "desc": "Melee Weapon Attack: +14 to hit, reach 15 ft., one target. Hit: 17 (2d8 + 8) bludgeoning damage."
                  },
                  {
                    "name": "Frightful Presence",
                    "desc": "Each creature of the dragon's choice that is within 120 feet of the dragon and aware of it must succeed on a DC 21 Wisdom saving throw or become frightened for 1 minute. A creature can repeat the saving throw at the end of each of its turns, ending the effect on itself on a success. If a creature's saving throw is successful or the effect ends for it, the creature is immune to the dragon's Frightful Presence for the next 24 hours."
                  },
                  {
                    "name": "Breath Weapons",
                    "desc": "The dragon uses one of the following breath weapons.\nFire Breath. The dragon exhales fire in a 60-foot cone. Each creature in that area must make a DC 21 Dexterity saving throw, taking 66 (12d10) fire damage on a failed save, or half as much damage on a successful one.\nWeakening Breath. The dragon exhales gas in a 60-foot cone. Each creature in that area must succeed on a DC 21 Strength saving throw or have disadvantage on Strength-based attack rolls, Strength checks, and Strength saving throws for 1 minute. A creature can repeat the saving throw at the end of each of its turns, ending the effect on itself on a success."
                  }
                ],
                "legendary_actions": [
                  {
                    "name": "Detect",
                    "desc": "The dragon makes a Wisdom (Perception) check."
                  },
                  {
                    "name": "Tail Attack",
                    "desc": "The dragon makes a tail attack."
                  },
                  {
                    "name": "Wing Attack (Costs 2 Actions)",
                    "desc": "The dragon beats its wings. Each creature within 10 ft. of the dragon must succeed on a DC 22 Dexterity saving throw or take 15 (2d6 + 8) bludgeoning damage and be knocked prone. The dragon can then fly up to half its flying speed."
                  }
                ],
                "url": "/api/monsters/adult-gold-dragon"
              },
              {
                "index": "ancient-brass-dragon",
                "name": "Ancient Brass Dragon",
                "size": "Gargantuan",
                "armor_class": [
                  {
                    "value": 20
                  }
                ],
                "hit_points": 297,
                "speed": {
                  "walk": "40 ft.",
                  "burrow": "40 ft.",
                  "fly": "80 ft."
                },
                "strength": 27,
                "dexterity": 10,
                "constitution": 25,
                "intelligence": 16,
                "wisdom": 15,
                "charisma": 19,
                "proficiencies": [
                  {
                    "value": 6,
                    "proficiency": {
                      "index": "saving-throw-dex",
                      "name": "Saving Throw: DEX",
                      "url": "/api/proficiencies/saving-throw-dex"
                    }
                  },
                  {
                    "value": 13,
                    "proficiency": {
                      "index": "saving-throw-con",
                      "name": "Saving Throw: CON",
                      "url": "/api/proficiencies/saving-throw-con"
                    }
                  },
                  {
                    "value": 8,
                    "proficiency": {
                      "index": "saving-throw-wis",
                      "name": "Saving Throw: WIS",
                      "url": "/api/proficiencies/saving-throw-wis"
                    }
                  },
                  {
                    "value": 10,
                    "proficiency": {
                      "index": "saving-throw-cha",
                      "name": "Saving Throw: CHA",
                      "url": "/api/proficiencies/saving-throw-cha"
                    }
                  },
                  {
                    "value": 9,
                    "proficiency": {
                      "index": "skill-history",
                      "name": "Skill: History",
                      "url": "/api/proficiencies/skill-history"
                    }
                  },
                  {
                    "value": 14,
                    "proficiency": {
                      "index": "skill-perception",
                      "name": "Skill: Perception",
                      "url": "/api/proficiencies/skill-perception"
                    }
                  },
                  {
                    "value": 10,
                    "proficiency": {
                      "index": "skill-persuasion",
                      "name": "Skill: Persuasion",
                      "url": "/api/proficiencies/skill-persuasion"
                    }
                  },
                  {
                    "value": 6,
                    "proficiency": {
                      "index": "skill-stealth",
                      "name": "Skill: Stealth",
                      "url": "/api/proficiencies/skill-stealth"
                    }
                  }
                ],
                "damage_vulnerabilities": [],
                "damage_resistances": [],
                "damage_immunities": [
                  "fire"
                ],
                "senses": {
                  "blindsight": "60 ft.",
                  "darkvision": "120 ft.",
                  "passive_perception": 24
                },
                "proficiency_bonus": 6,
                "special_abilities": [
                  {
                    "name": "Legendary Resistance",
                    "desc": "If the dragon fails a saving throw, it can choose to succeed instead."
                  }
                ],
                "actions": [
                  {
                    "name": "Multiattack",
                    "multiattack_type": "actions",
                    "desc": "The dragon can use its Frightful Presence. It then makes three attacks: one with its bite and two with its claws."
                  },
                  {
                    "name": "Bite",
                    "desc": "Melee Weapon Attack: +14 to hit, reach 15 ft., one target. Hit: 19 (2d10 + 8) piercing damage."
                  },
                  {
                    "name": "Claw",
                    "desc": "Melee Weapon Attack: +14 to hit, reach 10 ft., one target. Hit: 15 (2d6 + 8) slashing damage."
                  },
                  {
                    "name": "Tail",
                    "desc": "Melee Weapon Attack: +14 to hit, reach 20 ft., one target. Hit: 17 (2d8 + 8) bludgeoning damage."
                  },
                  {
                    "name": "Frightful Presence",
                    "desc": "Each creature of the dragon's choice that is within 120 feet of the dragon and aware of it must succeed on a DC 18 Wisdom saving throw or become frightened for 1 minute. A creature can repeat the saving throw at the end of each of its turns, ending the effect on itself on a success. If a creature's saving throw is successful or the effect ends for it, the creature is immune to the dragon's Frightful Presence for the next 24 hours."
                  },
                  {
                    "name": "Breath Weapons",
                    "desc": "The dragon uses one of the following breath weapons:\nFire Breath. The dragon exhales fire in an 90-foot line that is 10 feet wide. Each creature in that line must make a DC 21 Dexterity saving throw, taking 56 (16d6) fire damage on a failed save, or half as much damage on a successful one.\nSleep Breath. The dragon exhales sleep gas in a 90-foot cone. Each creature in that area must succeed on a DC 21 Constitution saving throw or fall unconscious for 10 minutes. This effect ends for a creature if the creature takes damage or someone uses an action to wake it."
                  },
                  {
                    "name": "Change Shape",
                    "desc": "The dragon magically polymorphs into a humanoid or beast that has a challenge rating no higher than its own, or back into its true form. It reverts to its true form if it dies. Any equipment it is wearing or carrying is absorbed or borne by the new form (the dragon's choice).\nIn a new form, the dragon retains its alignment, hit points, Hit Dice, ability to speak, proficiencies, Legendary Resistance, lair actions, and Intelligence, Wisdom, and Charisma scores, as well as this action. Its statistics and capabilities are otherwise replaced by those of the new form, except any class features or legendary actions of that form."
                  }
                ],
                "legendary_actions": [
                  {
                    "name": "Detect",
                    "desc": "The dragon makes a Wisdom (Perception) check."
                  },
                  {
                    "name": "Tail Attack",
                    "desc": "The dragon makes a tail attack."
                  },
                  {
                    "name": "Wing Attack (Costs 2 Actions)",
                    "desc": "The dragon beats its wings. Each creature within 15 ft. of the dragon must succeed on a DC 22 Dexterity saving throw or take 15 (2d6 + 8) bludgeoning damage and be knocked prone. The dragon can then fly up to half its flying speed."
                  }
                ],
                "url": "/api/monsters/ancient-brass-dragon"
              },
              {
                "index": "ghoul",
                "name": "Ghoul",
                "size": "Medium",
                "armor_class": [
                  {
                    "value": 12
                  }
                ],
                "hit_points": 22,
                "speed": {
                  "walk": "30 ft."
                },
                "strength": 13,
                "dexterity": 15,
                "constitution": 10,
                "intelligence": 7,
                "wisdom": 10,
                "charisma": 6,
                "proficiencies": [],
                "damage_vulnerabilities": [],
                "damage_resistances": [],
                "damage_immunities": [
                  "poison"
                ],
                "senses": {
                  "darkvision": "60 ft.",
                  "passive_perception": 10
                },
                "proficiency_bonus": 2,
                "actions": [
                  {
                    "name": "Bite",
                    "desc": "Melee Weapon Attack: +2 to hit, reach 5 ft., one creature. Hit: 9 (2d6 + 2) piercing damage."
                  },
                  {
                    "name": "Claws",
                    "desc": "Melee Weapon Attack: +4 to hit, reach 5 ft., one target. Hit: 7 (2d4 + 2) slashing damage. If the target is a creature other than an elf or undead, it must succeed on a DC 10 Constitution saving throw or be paralyzed for 1 minute. The target can repeat the saving throw at the end of each of its turns, ending the effect on itself on a success."
                  }
                ],
                "url": "/api/monsters/ghoul",
                "legendary_actions": [],
                "special_abilities": []
              }          
            ]
          }
        ]
      }
    ]
  }
}