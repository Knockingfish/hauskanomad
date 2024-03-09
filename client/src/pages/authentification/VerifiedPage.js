import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import styles from './VerifiedPage.module.css';

const VerifiedPage = () => {
  const navigate = useNavigate();

  // Use useEffect to run code after the component is mounted
  useEffect(() => {
    const timeoutId = setTimeout(() => {
      // Redirect to "/login" after 5 seconds
      navigate("/login");
    }, 5000);

    // Clean up the timeout when the component is unmounted
    return () => {
      clearTimeout(timeoutId);
    };
  }, [navigate]); // Run this effect whenever navigate changes

  const handleSkip = () => {
    // Redirect immediately to "/"
    navigate("/login");
  };

  return (
	  <div className={styles.padding}>
	    <div className={styles.container}>
	      <div className={styles.header}>Email Verified Successfully!</div>
	      <div className={styles.message}>
		      <p>Your email has been successfully verified.</p>
		      <p>Redirecting to the home page in 5 seconds...</p>
	      </div>
	      <button className={styles.button} onClick={handleSkip}>SKIP</button>
	    </div>
      </div>
  );
};

export default VerifiedPage;
