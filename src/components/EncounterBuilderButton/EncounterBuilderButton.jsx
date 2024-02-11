import { NavLink } from 'react-router-dom';
import './EncounterBuilderButton.css';

const EncounterBuilderButton = () => {
  return (
    <NavLink to={'/encounterbuilder'}>
      <button className='EncounterBuilderButton'>
        Build New Encounter
      </button>
    </NavLink>
  );
};

export default EncounterBuilderButton;