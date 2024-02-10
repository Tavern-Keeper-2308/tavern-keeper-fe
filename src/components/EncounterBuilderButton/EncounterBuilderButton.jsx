import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';
import './EncounterBuilderButton.css';

const EncounterBuilderButton = () => {
  return (
    <NavLink className='build-new-encounter-link' to={'/encounterbuilder'}>
      <button className='EncounterBuilderButton'>
        Build New Encounter
      </button>
    </NavLink>
  );
};

EncounterBuilderButton.propTypes = {
};

export default EncounterBuilderButton;