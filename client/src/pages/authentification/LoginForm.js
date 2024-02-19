import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import styles from './Account.module.css';

function LoginForm() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [loginError, setLoginError] = useState(null);

  const handleLogin = async () => {
    try {
      // Send a POST request to the login route with the user's credentials
      const response = await axios.post('http://localhost:5000/auth/login', { email, password });

      // If the login was successful, update the state to reflect that the user is logged in
      setIsLoggedIn(true);
    } catch (error) {
      // If there was an error during login, update the state with the error message
      setLoginError(error.response.data.message);
    }
  };

  return (
    <div className={styles.container}>
      <div className={styles.float}>
        <h2>Login</h2>
        <div className={styles.menu}>
          {isLoggedIn ? (
            <p>Login successful! You're now logged in.</p>
          ) : (
            <>
              {loginError && <p>{loginError}</p>}
              <input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} /><br />
              <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} /><br />
              <button onClick={handleLogin}>LOGIN</button>
            </>
          )}
        </div>
        <Link className={styles.link} to="/Forgot_Password">Forgot your password?</Link>
      </div>
    </div>
  );
}

export default LoginForm;
