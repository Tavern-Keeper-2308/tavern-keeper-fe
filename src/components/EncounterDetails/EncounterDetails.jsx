import PropTypes from 'prop-types';
import React, { useEffect, useState } from 'react';
import { useApolloClient, gql } from '@apollo/client';
import { v4 as uuid } from 'uuid';
import './EncounterDetails.css';

export default function EncounterDetails({ selectedEncounter }) {
  const [selectedMonsters, setSelectedMonsters] = useState([]);
  const [monsterIndex, setMonsterIndex] = useState(null);
  const [loading, setLoading] = useState(true);
  const client = useApolloClient();

  const getIndividualMonster = async (monsterIndex) => {
    if (monsterIndex) {
      try {
        const { data } = await client.query({
          query: gql`
            query getMonster($index: String!) {
              monster(index: $index) {
                monsterIndex
                monsterName
                size
                type
                armorClass
                speed {
                  walk
                  fly
                  swim
                }
                hitPoints
                strength
                dexterity
                constitution
                intelligence
                wisdom
                charisma
                damageVulnerabilities
                damageResistances
                damageImmunities
                conditionImmunities
                proficiencyBonus
                proficiencies {
                  name
                  value
                }
                senses {
                  blindsight
                  darkvision
                  passivePerception
                }
                specialAbilities {
                  name
                  desc
                }
                actions {
                  name
                  desc
                }
                legendaryActions {
                  name
                  desc
                }
              }
            }
          `,
          variables: {
            "index": monsterIndex
          },
        });
        return data.monster;
      } catch (error) {
        console.error('Error fetching monster details: ', error);
      }
    }
    return null;
  };

  useEffect(() => {
    if (selectedEncounter) {
      setLoading(true);
      // use Promise.all to get all monster details before updating state and store both monster index and details
      const fetchMonsterDetails = async () => {
        const monsterDetailsArray = await Promise.all(
          selectedEncounter.encounterMonsters.map(async (monster) => {
            setMonsterIndex(monster.monsterIndex);
            const individualMonster = await getIndividualMonster(monster.monsterIndex);
            return {
              index: monster.monsterIndex,
              details: individualMonster,
            };
          })
        );

        // Extracting monster details and setting state
        const monsters = monsterDetailsArray.map((monster) => {

          const damageVulnerabilitiesArray = monster.details.damageVulnerabilities.map((vulnerability) => (
            <div className='section-heading' key={vulnerability}>
              <p className='dmg-vulnerability-value'>{vulnerability}</p>
            </div>
          ));

          const damageResistancesArray = monster.details.damageResistances.map((resistance) => (
            <div className='section-heading' key={resistance}>
              <p className='dmg-resistance-value'>{resistance}</p>
            </div>
          ));

          const damageImmunitiesArray = monster.details.damageImmunities.map((immunity) => (
            <div className='section-heading' key={immunity}>
              <p className='dmg-immunity-value'>{immunity}</p>
            </div>
          ));

          const conditionImmunitiesArray = monster.details.damageImmunities.map((immunity) => (
            <div className='section-heading' key={immunity}>
              <p className='condition-immunity-value'>{immunity}</p>
            </div>
          ));

          const proficienciesArray = monster.details.proficiencies && monster.details.proficiencies.map((prof) => (
            <div className='black foe-proficiencies' key={prof?.name}>
              <h3 className='section-heading'>{prof?.name}</h3>
              <p className='proficiency-value'>{prof?.value}</p>
            </div>
          ));

          const specialAbilitiesArray = monster.details.specialAbilities && monster.details.specialAbilities.map((ability) => (
            <div className='black foe-special-abilities' key={ability?.name}>
              <h3 className='section-heading'>Special Ability: {ability?.name}</h3>
              <p className='special-ability-value'>{ability?.desc}</p>
            </div>
          ));

          const standardActionsArray = monster.details.actions && monster.details.actions.map((action) => (
            <div className='black foe-standard-actions' key={action?.name}>
              <h3 className='section-heading'>Action: {action?.name}</h3>
              <p className='standard-action-value'>{action?.desc}</p>
            </div>
          ));

          const legendaryActionsArray = monster.details.legendaryActions && monster.details.legendaryActions.map((action) => (
            <div className='black foe-legendary-actions' key={action?.name}>
              <h3 className='section-heading'>Legendary Action: {action?.name}</h3>
              <p className='legendary-action-value'>{action?.desc}</p>
            </div>
          ));

          return (
            <details className='monster-details' key={uuid()} index={monster.monsterIndex}>
              <summary className='monster-name'>{monster.details.monsterName}</summary>
              <section className='black foe-physical'>
                <h3 className='section-heading'>Size:</h3>
                <p className='size-value'>{monster.details && monster.details.size}</p>
                <h3 className='section-heading'>Armor Class:</h3>
                <p className='ac-value'>{monster.details && monster.details.armorClass}</p>
                <h3 className='section-heading'>Hit Points:</h3>
                <p className='hp-value'>{monster.details && monster.details.hitPoints}</p>
              </section>
              <section className='black foe-stats'>
                <div className='attributes'>
                  <h3 className='section-heading'>Strength</h3>
                  <p className='strength-value'>{monster.details && monster.details.strength}</p>
                </div>
                <div className='attributes'>
                  <h3 className='section-heading'>Dexterity</h3>
                  <p className='dexterity-value'>{monster.details && monster.details.dexterity}</p>
                </div>
                <div className='attributes'>
                  <h3 className='section-heading'>Constitution</h3>
                  <p className='constitution-value'>{monster.details && monster.details.constitution}</p>
                </div>
                <div className='attributes'>
                  <h3 className='section-heading'>Intelligence</h3>
                  <p className='intelligence-value'>{monster.details && monster.details.intelligence}</p>
                </div>
                <div className='attributes'>
                  <h3 className='section-heading'>Wisdom</h3>
                  <p className='wisdom-value'>{monster.details && monster.details.wisdom}</p>
                </div>
                <div className='attributes'>
                  <h3 className='section-heading'>Charisma</h3>
                  <p className='charisma-value'>{monster.details && monster.details.charisma}</p>
                </div>
                <div className='attributes'>
                  <h3 className='section-heading'>Proficiency Bonus</h3>
                  <p className='pb-value'>{monster.details && monster.details.proficiencyBonus}</p>
                </div>
              </section>
              <section className='black foe-speeds'>
                <div className='attributes'>
                  <h3 className='section-heading'>Walk Speed:</h3>
                  <p className='walk-speed-value'>{monster.details && monster.details.speed.walk}</p>
                </div>
                <div className='attributes'>
                  <h3 className='section-heading'>Swim Speed:</h3>
                  <p className='swim-speed-value'>{monster.details && monster.details.speed.swim}</p>
                </div>
                <div className='attributes'>
                  <h3 className='section-heading'>Fly Speed:</h3>
                  <p className='fly-speed-value'>{monster.details && monster.details.speed.fly}</p>
                </div>
                <div className='attributes'>
                  <h3 className='section-heading'>Burrow Speed:</h3>
                  <p className='burrow-speed-value'>{monster.details && monster.details.speed.burrow}</p>
                </div>
              </section>
              <section className='black damage-mods'>
                <div>
                  <h3 className='section-heading'>Damage Vulnerabilities:</h3>
                  {monster.details.damageVulnerabilities.length === 0 ? <p className='dmg-vulnerability-value'>none</p> : damageVulnerabilitiesArray}
                </div>
                <div>
                  <h3 className='section-heading'>Damage Resistances:</h3>
                  {monster.details.damageResistances.length === 0 ? <p className='dmg-resistance-value'>none</p> : damageResistancesArray}
                </div>
                <div>
                  <h3 className='section-heading'>Damage Immunities:</h3>
                  {monster.details.damageImmunities.length === 0 ? <p className='dmg-immunity-value'>none</p> : damageImmunitiesArray}
                </div>
                <div>
                  <h3 className='section-heading'>Condition Immunities:</h3>
                  {monster.details.conditionImmunities.length === 0 ? <p className='condition-immunity-value'>none</p> : conditionImmunitiesArray}
                </div>
              </section>
              <section className='black senses'>
                <div>
                  <h3 className='section-heading'>Blindsight:</h3>
                  <p className='blindsight-value'>{monster.details && monster.details.senses.blindsight}</p>
                </div>
                <div>
                  <h3 className='section-heading'>Darkvision:</h3>
                  <p className='darkvision-value'>{monster.details && monster.details.senses.darkvision}</p>
                </div>
                <div>
                  <h3 className='section-heading'>Passive Perception:</h3>
                  <p className='passive-perception-value'>{monster.details && monster.details.senses.passivePerception}</p>
                </div>
              </section>
              <section className='proficiencies'>{proficienciesArray}</section>
              <section className='special-abilities'>{specialAbilitiesArray}</section>
              <section className='standard-actions'>{standardActionsArray}</section>
              <section className='legendary-actions'>{legendaryActionsArray}</section>
            </details>
          );
        });

        setSelectedMonsters(monsters);
        setLoading(false);
      }
      fetchMonsterDetails();
    }
  }, [selectedEncounter]);

  return (
    <div className='EncounterDetails'>
      {selectedEncounter ? (
        <section className='main-details'>
          <section className='non-monster base-box'>
            <section className='encounter-header'>
              <h2 className='encounter-name'>{selectedEncounter.encounterName}</h2>
              <div className='party-stats'>
                <h3 className='party-size-heading'>Party Size:</h3>
                <p className='party-size-value'>{selectedEncounter.partySize}</p>
                <h3 className='party-level-heading'>Party Level:</h3>
                <p className='party-level-value'>{selectedEncounter && selectedEncounter.partyLevel}</p>
              </div>
            </section>
            <section className='encounter-desc'>
              <h3 className='section-heading'>Short Summary:</h3>
              <p className='short-summary-value'>{selectedEncounter.summary}</p>
              <h3 className='section-heading'>Encounter Description:</h3>
              <p className='encounter-description-value'>{selectedEncounter.description}</p>
              <h3 className='section-heading'>Treasure and Rewards:</h3>
              <p className='treasure-value'>{selectedEncounter.treasure}</p>
            </section>
          </section>
          <section className='base-box encounter-foes'>
            <h2 className='enemies-heading'>Your Enemies</h2>
            {loading ? (
              <p className='loading-message'>Loading...</p>
            ) : (
              selectedMonsters
            )}
          </section>
        </section>
      ) : (
        <p className='loading-message'>Loading...</p>
      )}
    </div>
  );
};

EncounterDetails.propTypes = {
};