import React from 'react';
import { Link } from 'react-router-dom';
import LogoImage from '../assets/HauskaNomadLogo.png'; // Importing the logo image

function Header({ isLoggedIn }) {
  const handleLogout = () => {
    // Handle logout functionality here
  };

  return (
    <header>
      <div className="logo-container">
        {/* Using the imported logo image */}
        <Link to="/">
          <img src={LogoImage} alt="Logo" />
        </Link>
      </div>
      <nav>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/about">About Us</Link></li>
          <li><Link to="/blog">Blog</Link></li>
          <li><Link to="/profile">Profile</Link></li>
          <li><a href="https://github.com">Source</a></li>
        </ul>
      </nav>
      <div className="user-actions">
        {isLoggedIn ? (
          <>
            <button onClick={handleLogout}>Logout</button>
          </>
        ) : (
          <>
            <Link to="/login">Login</Link>
            <Link to="/register">Register</Link>
          </>
        )}
      </div>
      <div className="theme-toggle">
        <button>Dark/Light Mode</button>
      </div>
    </header>
  );
}

export default Header;
