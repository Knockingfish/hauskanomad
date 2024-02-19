// LoginForm.jsx
import React, { useState } from 'react';
import axios from 'axios';

function LoginForm() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loginError, setLoginError] = useState('');
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLogin = async () => {
    try {
      // Handle login logic here
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
      <h2>Login</h2>
      <div>
        <input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} /><br />
        <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} /><br />
        <button onClick={handleLogin}>LOGIN</button>
      </div>
      {loginError && <p>Login failed: {loginError}</p>}
      {isLoggedIn && <p>Login successful! You're now logged in.</p>}
    </div>
  );
}

export default LoginForm;