import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import LogoImage from '../../assets/HauskaNomadLogo.png';
import styles from './CustomHeader.module.css';

function CustomHeader({ isLoggedIn }) {
  const [darkMode, setDarkMode] = useState(false);
  const location = useLocation();

  const handleLogout = () => {
    // Handle logout functionality here
  };

  const toggleDarkMode = () => {
    setDarkMode(!darkMode); // Toggle dark mode state
    // Toggle the 'dark-mode' class on the root element
    document.documentElement.classList.toggle('dark_mode', !darkMode);
  };

  return (
    <header className={`${styles.custom_header} ${darkMode ? styles.dark_mode : ''}`}>
      <div className={styles.first_section}>
        <Link to="/">
          <img className={styles.logo} src={LogoImage} alt="Logo" />
        </Link>
      </div>
      <div className={styles.second_section}>
        <nav className={styles.menu}>
          <div><Link className={`${styles.menu_item} ${location.pathname === '/' ? styles.active : ''}`} to="/">HOME</Link></div>
          <div><Link className={`${styles.menu_item} ${location.pathname === '/about' ? styles.active : ''}`} to="/about">ABOUT US</Link></div>
          <div><Link className={`${styles.menu_item} ${location.pathname === '/blog' ? styles.active : ''}`} to="/blog">BLOG</Link></div>
          <div><a className={`${styles.menu_item} ${location.pathname === '/source' ? styles.active : ''}`} href="https://github.com/Knockingfish/hauskanomad">SOURCE</a></div>
        </nav>
        <div className={styles.menu}>
            {isLoggedIn ? (
              <>
                <button onClick={handleLogout}>Logout</button>
              </>
            ) : (
              <>
                <Link className={`${styles.menu_item} ${location.pathname === '/register' ? styles.active : ''}`} to="/register">REGISTER</Link>
                <Link className={`${styles.menu_item} ${location.pathname === '/login' ? styles.active : ''}`} to="/login">LOGIN</Link>
                <Link className={`${styles.menu_item} ${location.pathname === '/profile' ? styles.active : ''}`} to="/profile">PROFILE</Link>
              </>
            )}
        </div>
        <div className={styles.theme} onClick={toggleDarkMode}>THEME</div>
      </div>
    </header>
  );
}

export default CustomHeader;
