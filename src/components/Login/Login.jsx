import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import './Login.css';

const Login = () => {
  return (
    <div className='Login'>
      <h2 className='greeting'>
        Welcome Traveler...
      </h2>
      <div className='login-container'>
        <button className='login-button'>DEMO - No Encounters</button>
        <button className='login-button'>DEMO - One Encounter</button>
        <button className='login-button'>DEMO - Many Encounters</button>
      </div>
    </div>
  );
};

Login.propTypes = {
};

export default Login;