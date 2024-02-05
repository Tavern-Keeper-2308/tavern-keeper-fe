import PropTypes from 'prop-types';
import './EncounterPreviewContainer.css';
import EncounterPreviewCard from '../EncounterPreviewCard/EncounterPreviewCard';

export default function EncounterPreviewContainer({encounters}) {
  const allEncounters = encounters.map((encounter) => (
    <EncounterPreviewCard
      key={encounter.id}
      id={encounter.id}
      name={encounter.encounter_name}
      party_size={encounter.party_size}
      party_level={encounter.party_level}
      summary={encounter.summary}
      description={encounter.description}
      treasure={encounter.treasure}
      encounter_monsters={encounter.encounter_monsters}
    />
  ));
  return (
    <div>
      {allEncounters}
    </div>
  )
}

EncounterPreviewContainer.propTypes = {
};