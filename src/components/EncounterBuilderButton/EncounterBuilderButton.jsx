import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import './EncounterBuilderButton.css';

const EncounterBuilderButton = () => {
  return (
    <button className='EncounterBuilderButton'>
      Build New Encounter
    </button>
  );
};

EncounterBuilderButton.propTypes = {
};

export default EncounterBuilderButton;