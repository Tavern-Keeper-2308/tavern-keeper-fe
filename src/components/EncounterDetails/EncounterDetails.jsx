import PropTypes from 'prop-types';
import React, { useEffect, useState } from 'react';
import './EncounterDetails.css';

export default function EncounterDetails({ encounters }) {
  const [selectedMonsters, setSelectedMonsters] = useState([]);

  useEffect(() => {     
    console.log(encounters, "before if")
    if (encounters && encounters[0]) {
      console.log(encounters, "after if")
      const monsters = encounters[0].encounter_monsters.map((monster) => {
        const proficienciesArray = monster.proficiencies.map((prof) => (
          <div className='purple foe-proficiencies' key={prof.proficiency.name}>
            <h3>{prof.proficiency.name}</h3>
            <p>{prof.value}</p>
          </div>
        ));

        const standardActionsArray = monster.actions.map((action) => (
          <div className='purple foe-standard-actions' key={action.name}>
            <h3>Action: {action.name}</h3>
            <p>{action.desc}</p>
          </div>
        ));

        const legendaryActionsArray = monster.legendary_actions.map((action) => (
          <div className='purple foe-legendary-actions' key={action.name}>
            <h3>Legendary Action: {action.name}</h3>
            <p>{action.desc}</p>
          </div>
        ));

        const specialAbilitiesArray = monster.special_abilities.map((ability) => (
          <div className='purple foe-special-abilities' key={ability.name}>
            <h3>Special Ability: {ability.name}</h3>
            <p>{ability.desc}</p>
          </div>
        ));

        return (
          <details key={monster.name}>
            <summary>{monster.name}</summary>
            <section className='purple foe-physical'>
              <h3>Size:</h3>
              <p>{monster.size}</p>
              <h3>Armor Class:</h3>
              <p>{monster.armor_class.value || 0}</p>
              <h3>Hit Points:</h3>
              <p>{monster.hit_points || 0}</p>
            </section>
            <section className='purple foe-stats'>
              <div className='attributes'>
                <h3>Strength</h3>
                <p>{monster.strength || 0}</p>
              </div>
              <div className='attributes'>
                <h3>Dexterity</h3>
                <p>{monster.dexterity || 0}</p>
              </div>
              <div className='attributes'>
                <h3>Constitution</h3>
                <p>{monster.constitution || 0}</p>
              </div>
              <div className='attributes'>
                <h3>Intelligence</h3>
                <p>{monster.intelligence || 0}</p>
              </div>
              <div className='attributes'>
                <h3>Wisdom</h3>
                <p>{monster.wisdom || 0}</p>
              </div>
              <div className='attributes'>
                <h3>Charisma</h3>
                <p>{monster.charisma || 0}</p>
              </div>
            </section>
            <section className='purple foe-speeds'>
              <div className='attributes'>
                <h3>Walk Speed:</h3>
                <p>{monster.speed.walk || "0 ft."}</p>
              </div>
              <div className='attributes'>
                <h3>Swim Speed:</h3>
                <p>{monster.speed.swim || "0 ft."}</p>
              </div>
              <div className='attributes'>
                <h3>Fly Speed:</h3>
                <p>{monster.speed.fly || "0 ft."}</p>
              </div>
              <div className='attributes'>
                <h3>Burrow Speed:</h3>
                <p>{monster.speed.burrow || "0 ft."}</p>
              </div>
            </section>
            <section className='purple damage-mods'>
              <div>
                <h3>Vulnerabilities:</h3>
                <p>{monster.damage_vulnerabilities}</p>
              </div>
              <div>
                <h3>Resistances:</h3>
                <p>{monster.damage_resistances}</p>
              </div>
              <div>
                <h3>Immunities:</h3>
                <p>{monster.damage_immunities}</p>
              </div>
            </section>
            <section className='purple senses'>
              <div>
                <h3>Blindsight:</h3>
                <p>{monster.senses.blindsight || "none"}</p>
              </div>
              <div>
                <h3>Darkvision:</h3>
                <p>{monster.senses.darkvision || "none"}</p>
              </div>
              <div>
                <h3>Passive Perception:</h3>
                <p>{monster.senses.passive_perception || 0}</p>
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
    }
  }, [encounters]);

  return (
    <section className='main-details'>
      <section className='non-monster base-box'>
        <section className='encounter-header'>
          <h2 className='encounter-name'>{encounters[0] && encounters[0].encounter_name}</h2>
          <div className='party-stats'>
            <h3>Party Size:</h3>
            <p>{encounters[0] && encounters[0].party_size}</p>
            <h3>Party Level:</h3>
            <p>{encounters[0] && encounters[0].party_level}</p>
          </div>
        </section>
        <section className='encounter-desc'>
          <h3>Short Summary:</h3>
          <p>{encounters[0] && encounters[0].summary}</p>
          <h3>Encounter Description:</h3>
          <p>{encounters[0] && encounters[0].description}</p>
          <h3>Treasure and Rewards:</h3>
          <p>{encounters[0] && encounters[0].treasure}</p>
        </section>
      </section>
      <section className='base-box encounter-foes'>
        <h2>Your Enemies</h2>
        {selectedMonsters}
      </section>
    </section>
  )
}

EncounterDetails.propTypes = {
};