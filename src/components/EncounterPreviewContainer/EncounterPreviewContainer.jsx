import PropTypes from 'prop-types';
import './EncounterPreviewContainer.css';
import EncounterPreviewCard from '../EncounterPreviewCard/EncounterPreviewCard';

const EncounterPreviewContainer = ({ encounters }) => {

  return (
    <div className='EncounterPreviewContainer'>
      <EncounterPreviewCard encounters={encounters} />
    </div>
  );
};

EncounterPreviewContainer.propTypes = {
};

export default EncounterPreviewContainer;