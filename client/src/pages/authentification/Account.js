// Account.jsx
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import LoginForm from './LoginForm'; // Import the LoginForm component
import axios from 'axios';

function Account() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [loginError, setLoginError] = useState('');

  const handleLogin = async (email, password) => {
    try {
      // Make an API call to your backend for user authentication
      const response = await axios.post('/api/auth', {
        email,
        password
      });
  
      // If login is successful, set the user token and update the state
      const userToken = response.data.token;
      localStorage.setItem('userToken', userToken);
      setIsLoggedIn(true);
    } catch (error) {
      // If there was an error during login, update the login status with the error message
      console.error("Login failed:", error);
      setLoginError(error.message);
    }
  };    

  return (
    <div>
      {/* Render the LoginForm component and pass handleLogin as a prop */}
      <LoginForm onLogin={handleLogin} />
      {loginError && <p>Login failed: {loginError}</p>}
      {isLoggedIn && <p>Login successful! You're now logged in.</p>}
      <Link to="/Forgot_Password">Forgot your password?</Link>
    </div>
  );
}

export default Account;
