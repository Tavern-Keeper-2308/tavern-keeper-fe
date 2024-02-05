import PropTypes from 'prop-types';
import './EncounterDetails.css';

export default function EncounterDetails({ id, name, party_size, party_level, summary, description, treasure, encounter_monsters }) {
  const selectedMonsters = encounter_monsters.map((monster) => (
    <details>
      <summary>{monster.name}</summary>
      <div className='foe-physical'>
        <h3>Size:</h3>
        <p>{monster.size}</p>
        <h3>Armor Class:</h3>
        <p>{monster.armor_class.value}</p>
        <h3>Hit Points:</h3>
        <p>{monster.hit_points}</p>
      </div>
      <div className='foe-stats'>
        <h3>Strength</h3>
        <p></p>
        <h3>Dexterity</h3>
        <p></p>
        <h3>Constitution</h3>
        <p></p>
        <h3>Intelligence</h3>
        <p></p>
        <h3>Wisdom</h3>
        <p></p>
        <h3>Charisma</h3>
        <p></p>
      </div>
      <div className='foe-speeds'>
        <h3>Walk Speed:</h3>
        <p>{monster.speed.walk}</p>
        <h3>Swim Speed:</h3>
        <p>{monster.speed.swim}</p>
        <h3>Fly Speed:</h3>
        <p>{monster.speed.fly}</p>
        <h3>Burrow Speed:</h3>
        <p>{monster.speed.burrow}</p>
      </div>
      
    </details>
  ));

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