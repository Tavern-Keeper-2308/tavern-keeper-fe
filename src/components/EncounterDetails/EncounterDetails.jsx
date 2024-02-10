import PropTypes from 'prop-types';
import React, { useEffect, useState } from 'react';
import { useApolloClient, gql } from '@apollo/client';
import { v4 as uuid } from 'uuid';
import './EncounterDetails.css';

export default function EncounterDetails({ selectedEncounter }) {
  const [selectedMonsters, setSelectedMonsters] = useState([]);
  const [monsterIndex, setMonsterIndex] = useState(null);
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
            <div key={vulnerability}>
              <p>{vulnerability}</p>
            </div>
          ));

          const damageResistancesArray = monster.details.damageResistances.map((resistance) => (
            <div key={resistance}>
              <p>{resistance}</p>
            </div>
          ));

          const damageImmunitiesArray = monster.details.damageImmunities.map((immunity) => (
            <div key={immunity}>
              <p>{immunity}</p>
            </div>
          ));

          const conditionImmunitiesArray = monster.details.damageImmunities.map((immunity) => (
            <div key={immunity}>
              <p>{immunity}</p>
            </div>
          ));

          const proficienciesArray = monster.details.proficiencies && monster.details.proficiencies.map((prof) => (
            <div className='black foe-proficiencies' key={prof?.name}>
              <h3>{prof?.name}</h3>
              <p>{prof?.value}</p>
            </div>
          ));

          const specialAbilitiesArray = monster.details.specialAbilities && monster.details.specialAbilities.map((ability) => (
            <div className='black foe-special-abilities' key={ability?.name}>
              <h3>Special Ability: {ability?.name}</h3>
              <p>{ability?.desc}</p>
            </div>
          ));

          const standardActionsArray = monster.details.actions && monster.details.actions.map((action) => (
            <div className='black foe-standard-actions' key={action?.name}>
              <h3>Action: {action?.name}</h3>
              <p>{action?.desc}</p>
            </div>
          ));

          const legendaryActionsArray = monster.details.legendaryActions && monster.details.legendaryActions.map((action) => (
            <div className='black foe-legendary-actions' key={action?.name}>
              <h3>Legendary Action: {action?.name}</h3>
              <p>{action?.desc}</p>
            </div>
          ));

          return (
            <details key={uuid()} index={monster.monsterIndex}>
              <summary>{monster.details.monsterName}</summary>
              <section className='black foe-physical'>
                <h3>Size:</h3>
                <p>{monster.details && monster.details.size}</p>
                <h3>Armor Class:</h3>
                <p>{monster.details && monster.details.armorClass}</p>
                <h3>Hit Points:</h3>
                <p>{monster.details && monster.details.hitPoints}</p>
              </section>
              <section className='black foe-stats'>
                <div className='attributes'>
                  <h3>Strength</h3>
                  <p>{monster.details && monster.details.strength}</p>
                </div>
                <div className='attributes'>
                  <h3>Dexterity</h3>
                  <p>{monster.details && monster.details.dexterity}</p>
                </div>
                <div className='attributes'>
                  <h3>Constitution</h3>
                  <p>{monster.details && monster.details.constitution}</p>
                </div>
                <div className='attributes'>
                  <h3>Intelligence</h3>
                  <p>{monster.details && monster.details.intelligence}</p>
                </div>
                <div className='attributes'>
                  <h3>Wisdom</h3>
                  <p>{monster.details && monster.details.wisdom}</p>
                </div>
                <div className='attributes'>
                  <h3>Charisma</h3>
                  <p>{monster.details && monster.details.charisma}</p>
                </div>
                <div className='attributes'>
                  <h3>Proficiency Bonus</h3>
                  <p>{monster.details && monster.details.proficiencyBonus}</p>
                </div>
              </section>
              <section className='black foe-speeds'>
                <div className='attributes'>
                  <h3>Walk Speed:</h3>
                  <p>{monster.details && monster.details.speed.walk}</p>
                </div>
                <div className='attributes'>
                  <h3>Swim Speed:</h3>
                  <p>{monster.details && monster.details.speed.swim}</p>
                </div>
                <div className='attributes'>
                  <h3>Fly Speed:</h3>
                  <p>{monster.details && monster.details.speed.fly}</p>
                </div>
                <div className='attributes'>
                  <h3>Burrow Speed:</h3>
                  <p>{monster.details && monster.details.speed.burrow}</p>
                </div>
              </section>
              <section className='black damage-mods'>
                <div>
                  <h3>Damage Vulnerabilities:</h3>
                  {monster.details.damageVulnerabilities.length === 0 ? <p>none</p> : damageVulnerabilitiesArray}
                </div>
                <div>
                  <h3>Damage Resistances:</h3>
                  {monster.details.damageResistances.length === 0 ? <p>none</p> : damageResistancesArray}
                </div>
                <div>
                  <h3>Damage Immunities:</h3>
                  {monster.details.damageImmunities.length === 0 ? <p>none</p> : damageImmunitiesArray}
                </div>
                <div>
                  <h3>Condition Immunities:</h3>
                  {monster.details.conditionImmunities.length === 0 ? <p>none</p> : conditionImmunitiesArray}
                </div>
              </section>
              <section className='black senses'>
                <div>
                  <h3>Blindsight:</h3>
                  <p>{monster.details && monster.details.senses.blindsight}</p>
                </div>
                <div>
                  <h3>Darkvision:</h3>
                  <p>{monster.details && monster.details.senses.darkvision}</p>
                </div>
                <div>
                  <h3>Passive Perception:</h3>
                  <p>{monster.details && monster.details.senses.passive_perception}</p>
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
      };
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
                <h3>Party Size:</h3>
                <p>{selectedEncounter.partySize}</p>
                <h3>Party Level:</h3>
                <p>{selectedEncounter && selectedEncounter.partyLevel}</p>
              </div>
            </section>
            <section className='encounter-desc'>
              <h3>Short Summary:</h3>
              <p>{selectedEncounter.summary}</p>
              <h3>Encounter Description:</h3>
              <p>{selectedEncounter.description}</p>
              <h3>Treasure and Rewards:</h3>
              <p>{selectedEncounter.treasure}</p>
            </section>
          </section>
          <section className='base-box encounter-foes'>
            <h2>Your Enemies</h2>
            {selectedMonsters}
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