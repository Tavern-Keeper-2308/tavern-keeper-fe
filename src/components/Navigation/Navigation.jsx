import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';
import './Navigation.css';
import EncounterBuilderButton from '../EncounterBuilderButton/EncounterBuilderButton';
import LogoutButton from '../LogoutButton/LogoutButton';

const Navigation = () => {
  return (
    <div className='Navigation'>
      <LogoutButton />
      <EncounterBuilderButton />
    </div>
  );
};

Navigation.propTypes = {
};

export default Navigation;