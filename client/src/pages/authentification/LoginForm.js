import React, { useState } from 'react';
import styles from './LoginForm.module.css'

function LoginForm() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLogin = () => {
    // Handle login logic here
    console.log("Login successful!");
    setIsLoggedIn(true);
  };

  return (
    <div className={styles.container}>
      <h2>Login</h2>
      <div className={styles.menu}>
        {isLoggedIn ? (
            <p>Login successful! You're now logged in.</p>
        ) : (
            <>
            <input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} /><br />
            <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} /><br />
            <button onClick={handleLogin}>LOGIN</button>
            </>
        )}
      </div>
    </div>
  );
}

export default LoginForm;
