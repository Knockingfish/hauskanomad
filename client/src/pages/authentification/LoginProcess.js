import React, { useState } from 'react';
import axios from 'axios';
import styles from './Account.module.css';

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loginStatus, setLoginStatus] = useState(null); // Add a new state variable

  const handleLogin = async () => {
    try {
      // Send a POST request to the login route
      await axios.post('http://localhost:5000/auth/login', { email, password });

      // If the login was successful, update the login status
      setLoginStatus('Login successful!');
      console.log('Login Successful!')
    } catch (error) {
      console.error('Login failed:', error);
      // If there was an error during login, update the login status with the error message
      setLoginStatus(`Login failed: ${error.response.data.message}`);
    }
  };

  return (
    <div>
      <h2>Login</h2>
      <form className={styles.menu}>
        <input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} /><br />
        <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} /><br />
        <button onClick={handleLogin}>LOGIN</button>
      </form>
      <p>{loginStatus}</p> {/* Display the login status */}
    </div>
  );
}

export default Login;
