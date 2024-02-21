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
      await axios.post('http://localhost:5000/auth/register', { email, password, username });

      // If the registration was successful, update the registration status
      setRegistrationStatus('Registration successful!');
    } catch (error) {
      // If there was an error during registration, update the registration status with the error message
      setRegistrationStatus(`Registration failed: ${error.response.data.message}`);
    }
  };

  return (
    <div>
      <form className={styles.menu} onSubmit={handleSubmit}>
        <input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} />
        <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />
        <input type="text" placeholder="Username" value={username} onChange={(e) => setUsername(e.target.value)} />
        <button type="submit">Register</button>
      </form>
      <p>{registrationStatus}</p>
    </div>
  );
};

export default RegistrationForm;
