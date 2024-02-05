import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';
import './LogoutButton.css';

const LogoutButton = () => {
  return (
    <NavLink to={'/login'}>
      <button className='LogoutButton'>
        Logout
      </button>
    </NavLink>
  );
};

LogoutButton.propTypes = {
};

export default LogoutButton;