import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import LogoImage from '../../assets/HauskaNomadLogo.png';
import styles from './CustomHeader.module.css';

function CustomHeader({ isLoggedIn }) {
  const [darkMode, setDarkMode] = useState(false);

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
          <div className={styles.menu_item}>
            <Link className={styles.menu_text} activeClassName="active" to="/">HOME</Link>
          </div>
          <div className={styles.menu_item}>
            <Link className={styles.menu_text} activeClassName="active" to="/about">ABOUT US</Link>
          </div>
          <div className={styles.menu_item}>
            <Link className={styles.menu_text} activeClassName="active" to="/blog">BLOG</Link>
          </div>
          <div className={styles.menu_item}>
            <a className={styles.menu_text} href="https://github.com/Knockingfish/hauskanomad">SOURCE</a>
          </div>
        </nav>
        <div className={styles.menu}>
          {isLoggedIn ? (
            <div className={styles.menu_item}>
              <button onClick={handleLogout}>Logout</button>
            </div>
          ) : (
            <>
              <div className={styles.menu_item}>
                <Link className={styles.menu_text} to="/login">LOGIN</Link>
              </div>
              <div className={styles.menu_item}>
                <Link className={styles.menu_text} to="/register">REGISTER</Link>
              </div>
              <div className={styles.menu_item}>
                <Link className={styles.menu_text} to="/profile">PROFILE</Link>
              </div>
            </>
          )}
        </div>
        <div className={styles.theme_toggle} onClick={toggleDarkMode}>⏻</div>
      </div>
    </header>
  );
}

export default CustomHeader;
