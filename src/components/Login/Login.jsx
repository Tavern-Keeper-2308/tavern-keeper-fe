// import PropTypes from 'prop-types';
// import { useNavigate } from 'react-router-dom';
// import './Login.css';

// const Login = ({ setUserName }) => {
//   const navigate = useNavigate();

//   const handleUserClick = (userName) => {
//     setUserName(userName);
//     navigate('/');
//   };

//   return (
//     <div className='Login'>
//       <h2 className='greeting'>
//         Welcome Traveler...
//       </h2>
//       <div className='login-container'>
//         <div className='login-button-link'>
//           <button className='login-button' onClick={() => handleUserClick("demo-no-encounters")}>DEMO - No Encounters</button>
//         </div>

//         <div className='login-button-link'>
//           <button className='login-button' onClick={() => handleUserClick("demo-one-encounter")}>DEMO - One Encounter</button>
//         </div>

//         <div className='login-button-link'>
//           <button className='login-button' onClick={() => handleUserClick("demo-many-encounters")} >DEMO - Many Encounters</button>
//         </div>
//       </div>
//     </div>
//   );
// };

// Login.propTypes = {
//   setUserName: PropTypes.func.isRequired
// };

// export default Login;



// import PropTypes from 'prop-types';
// import { useState } from 'react'; // Import useState hook
// import { useNavigate } from 'react-router-dom';
// import './Login.css';

// const Login = ({ setUserName }) => {
//   const navigate = useNavigate();
//   const [email, setEmail] = useState(''); // State to store email input
//   const [password, setPassword] = useState(''); // State to store password input
//   const [userName, setUserNameField] = useState(''); // State to store userName input
//   const [error, setError] = useState(null); // State to store error message

//   const handleUserClick = async () => {
//     try {
//       const response = await fetch('http://localhost:4000/users/tokens/sign_in', {
//         method: 'POST',
//         headers: {
//           'Content-Type': 'application/json'
//         },
//         body: JSON.stringify({
//           email: email,
//           password: password
//         })
//       });

//       if (!response.ok) {
//         throw new Error('Failed to log in');
//       }

//       const data = await response.json();
//       const token = data.token;

//       // Set the username to 'demo-many-encounters'
//       setUserName(userName);

//       localStorage.setItem('token', token); // Store token in localStorage
//       navigate('/'); // Navigate to home page
//     } catch (error) {
//       setError('Failed to log in'); // Set error message
//       console.error('Error logging in:', error.message);
//     }
//   };

//   return (
//     <div className='Login'>
//       <h2 className='greeting'>
//         Welcome Traveler...
//       </h2>
//       <div className='login-container'>
//         <div className='login-form'>
//           <input
//             type='email'
//             placeholder='Email'
//             value={email}
//             onChange={(e) => setEmail(e.target.value)}
//           />
//           <input
//             type='password'
//             placeholder='Password'
//             value={password}
//             onChange={(e) => setPassword(e.target.value)}
//           />
//           <input
//             type='text'
//             placeholder='User Name' // Adding a field for userName
//             value={userName}
//             onChange={(e) => setUserNameField(e.target.value)}
//           />
//           {error && <div className='error'>{error}</div>}
//           <button className='login-button' onClick={handleUserClick}>Login</button>
//         </div>
//       </div>
//     </div>
//   );
// };

// Login.propTypes = {
//   setUserName: PropTypes.func.isRequired
// };

// export default Login;



// import PropTypes from 'prop-types';
import { useState } from 'react'; // Import useState hook
import { useNavigate } from 'react-router-dom';
import './Login.css';
import SignupButton from '../SignupButton/SignupButton';

const Login = ({ setUserId }) => {
  const navigate = useNavigate();
  const [email, setEmail] = useState(''); // State to store email input
  const [password, setPassword] = useState(''); // State to store password input
  const [error, setError] = useState(null); // State to store error message

  const handleUserClick = async () => {
    try {
      const response = await fetch('http://localhost:4000/users/tokens/sign_in', {
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
      setError('Failed to log in'); // Set error message
      console.error('Error logging in:', error.message);
    }
  };

  return (
    <div className='Login'>
      <h2 className='greeting'>
        Welcome Traveler...
      </h2>
      <div className='login-container'>
        <div className='login-form'>
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
          <button className='login-button' onClick={handleUserClick}>Login</button>
        </div>
        <div className='greeting'>
            A New Face?...
        </div>
          <SignupButton />
      </div>
    </div>
  );
};

export default Login;
