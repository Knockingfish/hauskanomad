// ForgotPasswordPage.js
import React, { useState } from 'react';
import { Link } from 'react-router-dom'; // Assuming you're using React Router for navigation
import CustomHeader from '../global/CustomHeader';
import CustomFooter from '../global/CustomFooter';
import styles from './ForgotPassword.module.css'

function ForgotPasswordPage() {
  const [email, setEmail] = useState('');

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Simulate checking if there is an account with the provided email
    // For demonstration purposes, you can log the email to the console
    console.log('Checking email:', email);
    // Ideally, here you would perform the logic to check if the email exists
    // and send a password reset email
  };

  return (
    <div>
      <div className={styles.scrollarea}>
          <CustomHeader />
      </div>
      <div className={styles.container}>
        <div className={styles.float}>
          <h2>Forgot Password</h2>
            <form className={styles.menu} onSubmit={handleSubmit}>
              <input
                className={styles.bar}
                type="email"
                value={email}
                onChange={handleEmailChange}
                placeholder='Enter your email...'
              />
              <button className={styles.submit} type="submit">SUBMIT</button>
            </form>
            <Link className={styles.link} to="/login">Back to login</Link>
        </div>
      </div>
      <div>
        <CustomFooter />
      </div>
    </div>
  );
}

export default ForgotPasswordPage;
