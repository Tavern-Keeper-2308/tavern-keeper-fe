import PropTypes from 'prop-types';
import { useState } from 'react';
import './EncounterPreviewContainer.css';
import EncounterPreviewCard from '../EncounterPreviewCard/EncounterPreviewCard';

const EncounterPreviewContainer = ({ encounters, setSelectedEncounter }) => {

  const selectEncounter = (encounter) => {
    setSelectedEncounter(encounter);
  }

  const encounterPreviews = encounters && encounters.map(encounter => (
    <EncounterPreviewCard
      key={encounter.id}
      id={encounter.id}
      name={encounter.encounterName}
      summary={encounter.summary}
      partySize={encounter.partySize}
      partyLevel={encounter.partyLevel}
      monsters={encounter.encounterMonsters}
      onClick={() => selectEncounter(encounter)}
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