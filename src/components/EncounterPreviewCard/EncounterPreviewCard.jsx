import PropTypes from 'prop-types';
import { useParams, Link } from 'react-router-dom';
import './EncounterPreviewCard.css';

const EncounterPreviewCard = ({ encounterPreviewData }) => {
  const encounterName = encounterPreviewData.data.encounter[0].encounter_name;
  const encounterSummary = encounterPreviewData.data.encounter[0].summary;
  const encounterMonster1 = encounterPreviewData.data.encounter[0].encounter_monsters[0].monster_name;
  const encounterMonster2 = encounterPreviewData.data.encounter[0].encounter_monsters[1].monster_name;
  const encounterMonster3 = encounterPreviewData.data.encounter[0].encounter_monsters[2].monster_name;
  const encounterPartySize = encounterPreviewData.data.encounter[0].party_size;
  const encounterPartyLevel = encounterPreviewData.data.encounter[0].party_level;

  return (
    <div className='EncounterPreviewCard'>
      <h2 className='preview-encounter-name'>{encounterName}</h2>
      <h3 className='preview-section-title'>Encounter Summary</h3>
      <p className='preview-encounter-summary'>{encounterSummary}</p>
      <h3 className='preview-section-title'>Monster(s)</h3>
      <ul className='preview-monster-list'>
        <li className='preview-monster-name'>{encounterMonster1}</li>
        <li className='preview-monster-name'>{encounterMonster2}</li>
        <li className='preview-monster-name'>{encounterMonster3}</li>
      </ul>
      <div className='preview-small-stat'>
        <div className='preview-party-size'>
          <h3 className='preview-section-title'>Party Size</h3>
          <p className='preview-party-size-value'>{encounterPartySize}</p>
        </div>
        <div className='preview-party-level'>
          <h3 className='preview-section-title'>Party Level</h3>
          <p className='preview-party-level-value'>{encounterPartyLevel}</p>
        </div>
      </div>
    </div>
  );
};

EncounterPreviewCard.propTypes = {
};

export default EncounterPreviewCard;