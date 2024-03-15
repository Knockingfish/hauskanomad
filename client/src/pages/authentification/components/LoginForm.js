import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom'; // Import useNavigate
import styles from './Account.module.css';

function LoginForm() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [error, setError] = useState('');
  const navigate = useNavigate(); // Initialize useNavigate hook

  // Store login status in local storage to track persistently.
  // Even if the page is reloaded, the use remains logged in.
  useEffect(() => {
    const loggedInStatus = localStorage.getItem('isLoggedIn');
    if (loggedInStatus) {
      setIsLoggedIn(true);
    }
  }, []);

  // Make a backend request to login the user by checking their input credentials against the database.
  const handleLogin = async () => {
    try {
      const response = await fetch('http://localhost:5000/api/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, password }),
      });

      const data = await response.json();

      // Debugging messages~~.
      if (response.ok) {
        alert("Login successful!");
        setIsLoggedIn(true);
        localStorage.setItem('isLoggedIn', true);
        navigate('/'); // Redirect to home page using navigate
      } else {
        setError(data.message);
      }
    } catch (error) {
      alert("Error logging in:", error);
      setError('An error occurred while logging in.');
    }
  };

  // Would handle logging out, but this page is not generally accessible once the user has logged in.
  const handleLogout = () => {
    localStorage.removeItem('isLoggedIn');
    setIsLoggedIn(false);
  };

  return (
    <div className={styles.container}>
      <div className={styles.float}>
        <h2 className={styles.title}>Login</h2>
        {/* Conditional rendering of menu based on login status */}
        <div className={styles.menu}>
        {isLoggedIn ? (
          <>
            <p>Login successful! You're now logged in.</p>
            <button onClick={handleLogout}>LOGOUT</button>
          </>
        ) : (
          <>
            <input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} /><br />
            <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} /><br />
            <button onClick={handleLogin}>LOGIN</button>
          {error && <p className={styles.error}>{error}</p>}
          </>
        )}
      </div>
      </div>
    </div>
  );
}

export default LoginForm;
