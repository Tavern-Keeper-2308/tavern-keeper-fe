import PropTypes from 'prop-types';
import './EncounterDetails.css';

export default function EncounterDetails({ name, party_size, party_level, summary, description, treasure, encounter_monsters }) {
  

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
      </section>
    </section>
  )
}

EncounterDetails.propTypes = {
};