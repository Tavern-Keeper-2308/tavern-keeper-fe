import { useState } from 'react'; // Import useState hook
import { useNavigate } from 'react-router-dom';
import './Signup.css';
import LoginButton from '../LoginButton/LoginButton';

const Signup = ({ setUserId }) => {
  const navigate = useNavigate();
  const [email, setEmail] = useState(''); // State to store email input
  const [password, setPassword] = useState(''); // State to store password input
  const [error, setError] = useState(null); // State to store error message

  const handleUserClick = async () => {
    try {
      const response = await fetch('https://micro-auth.onrender.com/users/tokens/sign_up', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          email: email,
          password: password
        })
      });

      if (!response.ok) {
        throw new Error('Failed to log in');
      }

      const data = await response.json();
      const token = data.token;
      const userId = data.resource_owner.id; // Assuming the userId is provided in the response

      setUserId(userId); // Set the userId

      localStorage.setItem('token', token); // Store token in localStorage
      navigate('/'); // Navigate to home page
    } catch (error) {
      setError('Failed to signup'); // Set error message
      console.error('Error signing up:', error.message);
    }
  };

  return (
    <div className='signup'>
      <h2 className='greeting'>
        A NEW HAND TOUCHES THE BEACON...
      </h2>
      <div className='signup-container'>
        <div className='signup-form'>
        <div>
          <input
            type='email'
            placeholder='Email'
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div>
          <input
            type='password'
            placeholder='Password'
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          </div>
          {error && <div className='error'>{error}</div>}
          <button className='signup-button' onClick={handleUserClick}>Signup</button>
        </div>
          <h3 className='greeting'>
            I KNOW THAT HAND...
          </h3>
          <LoginButton/>
        </div>
    </div>
  );
};

export default Signup;