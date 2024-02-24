import PropTypes from 'prop-types';
import { useLocation } from 'react-router-dom';
import './Navigation.css';
import EncounterBuilderButton from '../EncounterBuilderButton/EncounterBuilderButton';
import LogoutButton from '../LogoutButton/LogoutButton';

const Navigation = ({ userId }) => {
  const location = useLocation();

  return (
    <div className='Navigation'>
      {location.pathname !== '/login' &&
        <div className='navigation-buttons'>
          <EncounterBuilderButton />
          <LogoutButton userId={userId} />
        </div>}
    </div>
  );
};

Navigation.propTypes = {
  userId: PropTypes.func.isRequired
};

export default Navigation;