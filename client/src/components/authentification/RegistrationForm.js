import React, { useState } from 'react';
import styles from './RegistrationForm.module.css'

function RegistrationForm() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [username, setUsername] = useState('');
  const [isRegistered, setIsRegistered] = useState(false);

  const handleRegister = () => {
    // Handle registration logic here
    console.log("Registration successful!");
    setIsRegistered(true);
  };

  return (
    <div className={styles.container}>
      <h2>Register an Account</h2>
      <div className={styles.menu}>
        {isRegistered ? (
          <p>Registration successful! Please proceed to login.</p>
        ) : (
          <>
            <input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} />
            <input type="text" placeholder="Username" value={username} onChange={(e) => setUsername(e.target.value)} />
            <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />
            <button onClick={handleRegister}>REGISTER</button>
          </>
        )}
      </div>
    </div>
  );
}

export default RegistrationForm;
