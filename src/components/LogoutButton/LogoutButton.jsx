import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';
import './LogoutButton.css';

const LogoutButton = () => {
  return (
    <button className='LogoutButton'>
      Logout
    </button>
  );
};

LogoutButton.propTypes = {
};

export default LogoutButton;