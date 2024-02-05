import PropTypes from 'prop-types';
import './EncounterDetails.css';

export default function EncounterDetails({ id, name, party_size, party_level, summary, description, treasure, encounter_monsters }) {
  const selectedMonsters = encounter_monsters.map((monster) => (
    <details>
      <summary>{monster.name}</summary>
      <h3>Size:</h3>
      <p>{monster.size}</p>
      <h3>Type:</h3>
      <p>{monster.type}</p>
      <h3>Alignment:</h3>
      <p>{monster.alignment}</p>
      <h3>Challenge Rating:</h3>
      <p>{monster.challenge_rating}</p>
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