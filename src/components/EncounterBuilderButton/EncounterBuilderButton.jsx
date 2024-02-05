import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';
import './EncounterBuilderButton.css';
import EncounterBuilder from '../EncounterBuilder/EncounterBuilder';

const EncounterBuilderButton = () => {
  return (
    <NavLink to={"/encounterbuilder"}>
      <button className='EncounterBuilderButton'>
        Build New Encounter
      </button>
    </NavLink>
  );
};

EncounterBuilderButton.propTypes = {
};

export default EncounterBuilderButton;