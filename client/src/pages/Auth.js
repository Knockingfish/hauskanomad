import React, { useState } from 'react';
import { Link } from 'react-router-dom';

// Registration Component
function Registration() {
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
    <div>
      <h2>Register an Account</h2>
      {isRegistered ? (
        <p>Registration successful! Please <Link to="/login">login</Link>.</p>
      ) : (
        <>
          <input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} /><br />
          <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} /><br />
          <input type="text" placeholder="Username" value={username} onChange={(e) => setUsername(e.target.value)} /><br />
          <button onClick={handleRegister}>Register</button>
        </>
      )}
    </div>
  );
}

// Login Component
function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLogin = () => {
    // Handle login logic here
    console.log("Login successful!");
    setIsLoggedIn(true);
  };

  return (
    <div>
      <h2>Login</h2>
      {isLoggedIn ? (
        <p>Login successful! You're now logged in.</p>
      ) : (
        <>
          <input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} /><br />
          <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} /><br />
          <button onClick={handleLogin}>Login</button>
        </>
      )}
    </div>
  );
}

// Reset Password Component
function ResetPassword() {
  const [email, setEmail] = useState('');
  const [username, setUsername] = useState('');
  const [isReset, setIsReset] = useState(false);

  const handleResetPassword = () => {
    // Handle reset password logic here
    console.log("Password reset request received.");
    setIsReset(true);
  };

  return (
    <div>
      <h2>Reset Password</h2>
      {isReset ? (
        <p>Password reset request received. Please check your email for further instructions.</p>
      ) : (
        <>
          <input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} /><br />
          <input type="text" placeholder="Username" value={username} onChange={(e) => setUsername(e.target.value)} /><br />
          <button onClick={handleResetPassword}>Reset Password</button>
        </>
      )}
    </div>
  );
}

export { Registration, Login, ResetPassword };
