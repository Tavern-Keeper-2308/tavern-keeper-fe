import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { v4 as uuid } from 'uuid';
import './EncounterPreviewCard.css';

const EncounterPreviewCard = ({ id, name, summary, partySize, partyLevel, monsters, onClick }) => {
  return (
    <Link className='preview-card-link' to={`/details/${id}`} onClick={onClick}>
      <div className='EncounterPreviewCard'>
        <h2 className='preview-encounter-name'>{name}</h2>
        <h3 className='preview-section-title'>Encounter Summary</h3>
        <p className='preview-encounter-summary'>{summary}</p>
        <h3 className='preview-section-title'>Monster(s)</h3>
        <ul className='preview-monster-list'>
          {monsters && monsters.map(monster => (
            <li className='preview-monster-name' key={uuid()}>{monster.monsterName}</li>
          ))}
        </ul>
        <div className='preview-small-stat'>
          <div className='preview-party-size'>
            <h3 className='preview-section-title'>Party Size</h3>
            <p className='preview-party-size-value'>{partySize}</p>
          </div>
          <div className='preview-party-level'>
            <h3 className='preview-section-title'>Party Level</h3>
            <p className='preview-party-level-value'>{partyLevel}</p>
          </div>
        </div>
      </div>
    </Link>
  );
};

EncounterPreviewCard.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  summary: PropTypes.string.isRequired,
  partySize: PropTypes.number.isRequired,
  partyLevel: PropTypes.number.isRequired,
  monsters: PropTypes.array.isRequired,
  onClick: PropTypes.func.isRequired
};

export default EncounterPreviewCard;