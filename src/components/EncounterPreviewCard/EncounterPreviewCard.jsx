import PropTypes from 'prop-types';
import { useParams, Link } from 'react-router-dom';
import './EncounterPreviewCard.css';
import EncounterDetails from '../EncounterDetails/EncounterDetails';

export default function EncounterPreviewCard({ id, name, party_size, party_level, summary, description, treasure, encounter_monsters }) {
  return (
    <div>
      <EncounterDetails name={name} party_size={party_size} party_level={party_level} summary={summary} description={description} treasure={treasure} encounter_monsters={encounter_monsters} /> 
    </div>
  )
}

EncounterPreviewCard.propTypes = {
};