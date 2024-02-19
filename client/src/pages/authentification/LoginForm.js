import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import styles from './Account.module.css'
import LoginProcess from './LoginProcess';

function LoginForm() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <div className={styles.container}>
      <div className={styles.float}>
        {isLoggedIn ? (
          <p>Login successful! You're now logged in.</p>
        ) : (
          <LoginProcess setIsLoggedIn={setIsLoggedIn} />
        )}
        <Link className={styles.link} to="/forgot-password">Forgot your password?</Link>
      </div>
    </div>
  );
}

export default LoginForm;
