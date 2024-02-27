import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';
import './LogoutButton.css';

const LogoutButton = ({ setUserId }) => {
  const handleLogoutClick = () => {
    setUserId(null);
  };

  return (
    <NavLink className='logout-link' to={'/login'} onClick={() => handleLogoutClick()}>
      <button className='LogoutButton'>
        Logout
      </button>
    </NavLink>
  );
};

LogoutButton.propTypes = {
  setUserId: PropTypes.func.isRequired
};

export default LogoutButton;