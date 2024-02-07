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
        <button className='login-button'>user1</button>
        <button className='login-button'>user2</button>
        <button className='login-button'>user3</button>
      </div>
    </div>
  );
};

Login.propTypes = {
};

export default Login;