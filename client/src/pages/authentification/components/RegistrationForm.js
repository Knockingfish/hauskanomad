import React, { useState } from 'react';
import axios from 'axios';
import styles from './Account.module.css';

const RegistrationForm = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [username, setUsername] = useState('');
  const [registrationStatus, setRegistrationStatus] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      // Send a POST request to the registration route
      await axios.post('http://localhost:5000/api/register', { email, password, username });

      // If the registration was successful, update the registration status
      setRegistrationStatus('Registration successful!');
    } catch (error) {
      // Check if error.response exists before accessing its properties
      if (error.response && error.response.data && error.response.data.message) {
        // If there was an error during registration, update the registration status with the error message
        setRegistrationStatus(`Registration failed: ${error.response.data.message}`);
      } else {
        // If error.response doesn't exist or doesn't have expected properties, handle the error accordingly
        setRegistrationStatus(`Registration failed: ${error.message}`);
      }
    }
  };


  return (
    <div className={styles.float}>
      <div className={styles.title}>Register</div>
      <form className={styles.menu} onSubmit={handleSubmit}>
        <input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} />
        <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />
        <input type="text" placeholder="Username" value={username} onChange={(e) => setUsername(e.target.value)} />
        <button type="submit">Register</button>
      </form>
      <p className={styles.register}>{registrationStatus}</p>
    </div>
  );
};

export default RegistrationForm;
