import { NavLink } from 'react-router-dom';
import './LoginButton.css';
import { useNavigate } from 'react-router-dom';

const LoginButton = () => {
  const navigate = useNavigate();
  const handleLoginClick = () => {
    navigate('/login');
  };

  return (
    <NavLink className='Login-link' to={'/login'} onClick={() => handleLoginClick()}>
      <button className='LoginButton'>
        Login
      </button>
    </NavLink>
  );
};


export default LoginButton;