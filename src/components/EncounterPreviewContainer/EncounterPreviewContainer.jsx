import PropTypes from 'prop-types';
import './EncounterPreviewContainer.css';
import EncounterPreviewCard from '../EncounterPreviewCard/EncounterPreviewCard';

const EncounterPreviewContainer = () => {
  return (
    <div className='EncounterPreviewContainer'>
      <EncounterPreviewCard />
      <EncounterPreviewCard />
      <EncounterPreviewCard />
      <EncounterPreviewCard />
      <EncounterPreviewCard />
      <EncounterPreviewCard />
      <EncounterPreviewCard />
      <EncounterPreviewCard />
      <EncounterPreviewCard />
      <EncounterPreviewCard />
      <EncounterPreviewCard />
      <EncounterPreviewCard />
    </div>
  );
};

EncounterPreviewContainer.propTypes = {
};

export default EncounterPreviewContainer;