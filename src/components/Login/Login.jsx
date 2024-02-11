import PropTypes from 'prop-types';
import { useNavigate } from 'react-router-dom';
import './Login.css';

const Login = ({ setUserName }) => {
  const navigate = useNavigate();

  const handleUserClick = (userName) => {
    setUserName(userName);
    navigate('/');
  };

  return (
    <div className='Login'>
      <h2 className='greeting'>
        Welcome Traveler...
      </h2>
      <div className='login-container'>
        <div className='login-button-link'>
          <button className='login-button' onClick={() => handleUserClick("demo-no-encounters")}>DEMO - No Encounters</button>
        </div>

        <div className='login-button-link'>
          <button className='login-button' onClick={() => handleUserClick("demo-one-encounter")}>DEMO - One Encounter</button>
        </div>

        <div className='login-button-link'>
          <button className='login-button' onClick={() => handleUserClick("demo-many-encounters")} >DEMO - Many Encounters</button>
        </div>
      </div>
    </div>
  );
};

Login.propTypes = {
  setUserName: PropTypes.func.isRequired
};

export default Login;