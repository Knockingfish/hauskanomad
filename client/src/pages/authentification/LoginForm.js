import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import styles from './Account.module.css';

function LoginForm() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [error, setError] = useState('');

  useEffect(() => {
    const loggedInStatus = localStorage.getItem('isLoggedIn');
    if (loggedInStatus) {
      setIsLoggedIn(true);
    }
  }, []);

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
        localStorage.setItem('isLoggedIn', true);
      } else {
        setError(data.message);
      }
    } catch (error) {
      console.error("Error logging in:", error);
      setError('An error occurred while logging in.');
    }
  };

  const handleLogout = () => {
    localStorage.removeItem('isLoggedIn');
    setIsLoggedIn(false);
  };

  return (
    <div className={styles.container}>
    <div className={styles.float}>
    <h2>Login</h2>
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
    <Link className={styles.link} to="/Forgot_Password">Forgot your password?</Link>
    </div>
    </div>
  );
}

export default LoginForm;


//// LoginForm.js
//import React, { useState, useEffect } from 'react';
//import { Link } from 'react-router-dom';
//import styles from './Account.module.css';
//
//function LoginForm() {
//  const [email, setEmail] = useState('');
//  const [password, setPassword] = useState('');
//  const [isLoggedIn, setIsLoggedIn] = useState(false);
//  const [error, setError] = useState('');
//
//  useEffect(() => {
//    // Check if user is logged in when component mounts
//    const loggedInStatus = localStorage.getItem('isLoggedIn');
//    if (loggedInStatus) {
//      setIsLoggedIn(true);
//    }
//  }, []);
//
//  const handleLogin = async () => {
//    try {
//      const response = await fetch('http://localhost:5000/auth/login', {
//        method: 'POST',
//        headers: {
//          'Content-Type': 'application/json',
//        },
//        body: JSON.stringify({ email, password }),
//      });
//
//      const data = await response.json();
//
//      if (response.ok) {
//        console.log("Login successful!");
//        setIsLoggedIn(true);
//        localStorage.setItem('isLoggedIn', true); // Set isLoggedIn flag in localStorage
//      } else {
//        setError(data.message); // Set error message received from the server
//      }
//    } catch (error) {
//      console.error("Error logging in:", error);
//      setError('An error occurred while logging in.'); // Set a generic error message
//    }
//  };
//
//  const handleLogout = () => {
//    localStorage.removeItem('isLoggedIn');
//    setIsLoggedIn(false);
//  };
//
//  return (
//    <div className={styles.container}>
//    <div className={styles.float}>
//    <h2>Login</h2>
//    <div className={styles.menu}>
//    {isLoggedIn ? (
//      <>
//      <p>Login successful! You're now logged in.</p>
//      <button onClick={handleLogout}>LOGOUT</button>
//      </>
//    ) : (
//      <>
//      <input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} /><br />
//      <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} /><br />
//      <button onClick={handleLogin}>LOGIN</button>
//      {error && <p className={styles.error}>{error}</p>} {/* Display error message if present */}
//      </>
//    )}
//    </div>
//    <Link className={styles.link} to="/Forgot_Password">Forgot your password?</Link>
//    </div>
//    </div>
//  );
//}
//
//export default LoginForm;
