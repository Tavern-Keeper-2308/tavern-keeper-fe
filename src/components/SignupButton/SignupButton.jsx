import { NavLink } from 'react-router-dom';
import './SignupButton.css';
import { useNavigate } from 'react-router-dom';

const SignupButton = () => {
  const navigate = useNavigate();
  const handleSignupClick = () => {
    navigate('/signup');
  };

  return (
    <NavLink className='signup-link' to={'/signup'} onClick={() => handleSignupClick()}>
      <button className='SignupButton'>
        Signup
      </button>
    </NavLink>
  );
};


export default SignupButton;