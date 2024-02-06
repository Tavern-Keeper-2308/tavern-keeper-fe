import PropTypes from 'prop-types';
import './EncounterDetails.css';

export default function EncounterDetails({ id, name, party_size, party_level, summary, description, treasure, encounter_monsters }) {

  const selectedMonsters = encounter_monsters.map((monster) => {
    const proficienciesArray = monster.proficiencies.map((prof) => {
      return (
        <div className='purple foe-proficiencies'>
          <h3>{prof.proficiency.name}</h3>
          <p>{prof.value}</p>
        </div>
      )
    })

    const standardActionsArray = monster.actions.map((action) => {
      return (
        <div className='purple foe-standard-actions'>
          <h3>Action: {action.name}</h3>
          <p>{action.desc}</p>
        </div>
      )
    })

    const legendaryActionsArray = monster.legendary_actions.map((action) => {
      return (
        <div className='purple foe-legendary-actions'>
          <h3>Legendary Action: {action.name}</h3>
          <p>{action.desc}</p>
        </div>
      )
    })

    const specialAbilitiesArray = monster.special_abilities.map((ability) => {
      return (
        <div className='purple foe-special-abilities'>
          <h3>Special Ability: {ability.name}</h3>
          <p>{ability.desc}</p>
        </div>
      )
    })

    return (
    <details>
      <summary>{monster.name}</summary>
      <section className='purple foe-physical'>
        <h3>Size:</h3>
        <p>{monster.size}</p>
        <h3>Armor Class:</h3>
        <p>{monster.armor_class.value}</p>
        <h3>Hit Points:</h3>
        <p>{monster.hit_points}</p>
      </section>
      <section className='purple foe-stats'>
        <div className='attributes'>
          <h3>Strength</h3>
          <p>{monster.strength}</p>
        </div>
        <div className='attributes'>
          <h3>Dexterity</h3>
          <p>{monster.dexterity}</p>
        </div>
        <div className='attributes'>
          <h3>Constitution</h3>
          <p>{monster.constitution}</p>
        </div>
        <div className='attributes'>
          <h3>Intelligence</h3>
          <p>{monster.intelligence}</p>
        </div>
        <div className='attributes'>
          <h3>Wisdom</h3>
          <p></p>
        </div>
        <div className='attributes'>
          <h3>Charisma</h3>
          <p>{monster.charisma}</p>
        </div>
      </section>
      <section className='purple foe-speeds'>
        <div className='attributes'>
          <h3>Walk Speed:</h3>
          <p>{monster.speed.walk}</p>
        </div>
        <div className='attributes'>
          <h3>Swim Speed:</h3>
          <p>{monster.speed.swim}</p>
        </div>
        <div className='attributes'>
          <h3>Fly Speed:</h3>
          <p>{monster.speed.fly}</p>
        </div>
        <div className='attributes'>
          <h3>Burrow Speed:</h3>
          <p>{monster.speed.burrow}</p>
        </div>
      </section>
      <section className='purple damage-mods'>
        <h3>Vulnerabilities:</h3>
        <p>{monster.damage_vulnerabilities}</p>
        <h3>Resistances:</h3>
        <p>{monster.damage_resistances}</p>
        <h3>Immunities:</h3>
        <p>{monster.damage_immunities}</p>
      </section>
      <section className='purple senses'>
        <h3>Blindsight:</h3>
        <p>{monster.senses.blindsight}</p>
        <h3>Darkvision:</h3>
        <p>{monster.senses.darkvision}</p>
        <h3>Passive Perception:</h3>
        <p>{monster.senses.passive_perception}</p>
      </section>
      <section className='proficiencies'>{proficienciesArray}</section>
      <section className='special-abilities'>{specialAbilitiesArray}</section>
      <section className='standard-actions'>{standardActionsArray}</section>
      <section className='legendary-actions'>{legendaryActionsArray}</section>
    </details>
  )});

  return (
    <section className='main-details'>
      <section className='base-box encounter-header'>
        <h2 className='encounter-name'>{name}</h2>
        <div className='party-stats'>
          <h3>Party Size:</h3>
          <p>{party_size}</p>
          <h3>Party Level:</h3>
          <p>{party_level}</p>
        </div>
      </section>
      <section className='base-box encounter-desc'>
        <h2>Encounter Description</h2>
        <h3>Short Summary:</h3>
        <p>{summary}</p>
        <h3>Encounter Description:</h3>
        <p>{description}</p>
        <h3>Treasure and Rewards:</h3>
        <p>{treasure}</p>
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