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
        <Link className='login-button-link' to={'/'}>
          <button className='login-button'>DEMO - No Encounters</button>
        </Link>

        <Link className='login-button-link' to={'/'}>
          <button className='login-button'>DEMO - One Encounter</button>
        </Link>

        <Link className='login-button-link' to={'/'}>
          <button className='login-button'>DEMO - Many Encounters</button>
        </Link>
      </div>
    </div>
  );
};

Login.propTypes = {
};

export default Login;