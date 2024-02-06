import PropTypes from 'prop-types';
import './EncounterPreviewContainer.css';
import EncounterPreviewCard from '../EncounterPreviewCard/EncounterPreviewCard';
import { encounterPreviewData } from '../../mockDataset';

const EncounterPreviewContainer = () => {

  return (
    <div className='EncounterPreviewContainer'>
      <EncounterPreviewCard encounterPreviewData={encounterPreviewData} />
    </div>
  );
};

EncounterPreviewContainer.propTypes = {
};

export default EncounterPreviewContainer;