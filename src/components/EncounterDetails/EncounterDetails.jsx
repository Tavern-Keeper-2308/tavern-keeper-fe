import PropTypes from 'prop-types';
import './EncounterDetails.css';

export default function EncounterDetails({ name, party_size, party_level, summary, description, treasure, encounter_monsters }) {
  const selectedMonsters = encounter_monsters.map((monster) => (
    <article>
      <h3>{monster.name}</h3>
      <p>{monster.size}</p>
      <p>{monster.type}</p>
      <p>{monster.alignment}</p>
      <p>{monster.challenge_rating}</p>
    </article>
  ));

  return (
    <section className='details'>
      <section className='encounter-header'>
        <h2 className='encounter-name'>{name}</h2>
        <div className='party-stats'>
          <h3>Party Size:</h3>
          <p>{party_size}</p>
          <h3>Party Level:</h3>
          <p>{party_level}</p>
        </div>
      </section>
      <section className='encounter-desc'>
        <h2>Encounter Description</h2>
        <h3>Short Summary:</h3>
        <p>{summary}</p>
        <h3>Encounter Description:</h3>
        <p>{description}</p>
        <h3>Treasure and Rewards:</h3>
        <p>{treasure}</p>
      </section>
      <section>
        <h2>Your Critters</h2>
        {selectedMonsters}
      </section>
    </section>
  )
}

EncounterDetails.propTypes = {
};