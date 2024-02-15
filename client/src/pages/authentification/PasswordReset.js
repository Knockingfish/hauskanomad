import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate instead of useHistory
import CustomHeader from '../global/CustomHeader';
import CustomFooter from '../global/CustomFooter';
import styles from './PasswordReset.module.css';

function PasswordResetPage() {
  const navigate = useNavigate(); // Initialize the useNavigate hook
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleConfirmPasswordChange = (e) => {
    setConfirmPassword(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Perform password validation here
    if (password !== confirmPassword) {
      alert("Passwords don't match");
      return;
    }
    // If passwords match, perform password reset logic here
    // For demonstration purposes, let's just redirect to the login page
    navigate('/login'); // Use navigate to redirect to the login page
  };

  return (
    <div>
      <div className={styles.scrollarea}>
          <CustomHeader />
      </div>
      <div className={styles.container}>
        <div className={styles.float}>
          <h2>Reset Password</h2>
          <form className={styles.menu} onSubmit={handleSubmit}>
              <input
                className={styles.bar}
                type="password"
                value={password}
                placeholder="New password..."
                onChange={handlePasswordChange}
              />
              <input
                className={styles.bar}
                type="password"
                value={confirmPassword}
                placeholder="Confirm new password..."
                onChange={handleConfirmPasswordChange}
              />
            <button className={styles.submit} type="submit">RESET PASSWORD</button>
          </form>
        </div>
      </div>
      <div className={styles.scrollarea}>
        <CustomFooter />
      </div>
    </div>
  );
}

export default PasswordResetPage;
