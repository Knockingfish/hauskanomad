// LoginForm.js
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import styles from './Account.module.css';

function LoginForm() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [error, setError] = useState('');

  const handleLogin = async () => {
    try {
      const response = await fetch('http://localhost:5000/auth/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, password }),
      });

      const data = await response.json();

      if (response.ok) {
        console.log("Login successful!");
        setIsLoggedIn(true);
      } else {
        setError(data.message); // Set error message received from the server
      }
    } catch (error) {
      console.error("Error logging in:", error);
      setError('An error occurred while logging in.'); // Set a generic error message
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
      <input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} /><br />
      <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} /><br />
      <button onClick={handleLogin}>LOGIN</button>
      {error && <p className={styles.error}>{error}</p>} {/* Display error message if present */}
      </>
    )}
    </div>
    <Link className={styles.link} to="/Forgot_Password">Forgot your password?</Link>
    </div>
    </div>
  );
}

export default LoginForm;
