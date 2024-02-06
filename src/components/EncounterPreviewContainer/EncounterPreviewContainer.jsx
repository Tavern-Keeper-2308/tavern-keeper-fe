import PropTypes from 'prop-types';
import './EncounterPreviewContainer.css';
import EncounterPreviewCard from '../EncounterPreviewCard/EncounterPreviewCard';

const EncounterPreviewContainer = ({ encounters }) => {
  const encounterPreviews = encounters && encounters.map(encounter => (
    <EncounterPreviewCard
      key={encounter.encounter_id}
      id={encounter.encounter_id}
      name={encounter.encounter_name}
      summary={encounter.summary}
      partySize={encounter.party_size}
      partyLevel={encounter.party_level}
      monsters={encounter.encounter_monsters}
    />
  ));

  return (
    <div className='EncounterPreviewContainer'>
      {encounterPreviews}
    </div>
  );
};

EncounterPreviewContainer.propTypes = {
};

export default EncounterPreviewContainer;