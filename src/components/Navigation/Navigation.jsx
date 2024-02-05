import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';
import './Navigation.css';
import EncounterBuilderButton from '../EncounterBuilderButton/EncounterBuilderButton';

const Navigation = () => {
  return (
    <div className='Navigation'>
      <EncounterBuilderButton />
    </div>
  );
};

Navigation.propTypes = {
};

export default Navigation;