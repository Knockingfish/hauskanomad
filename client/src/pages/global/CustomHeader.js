import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import LogoImage from './HauskaNomadLogo.png';
import styles from './CustomHeader.module.css';

function CustomHeader({ isLoggedIn }) {
  const [darkMode, setDarkMode] = useState(false);
  const [showMenu, setShowMenu] = useState(false); // State to toggle the visibility of the menu
  const location = useLocation();

  const handleLogout = () => {
    // Handle logout functionality here
  };

  const toggleDarkMode = () => {
    setDarkMode(!darkMode); // Toggle dark mode state
    // Toggle the 'dark-mode' class on the root element
    document.documentElement.classList.toggle('dark_mode', !darkMode);
  };

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  return (
    <header className={`${styles.container} ${darkMode ? styles.dark_mode : ''}`}>
      <div className={styles.first_section}>
        <Link to="/">
          <img className={styles.logo} src={LogoImage} alt="Logo" />
        </Link>
      </div>
      {/* Hamburger menu */}
      <div className={styles.hamburger} onClick={toggleMenu}>
        <div className={`${styles.hamburger_line} ${showMenu ? styles.open : ''}`}></div>
        <div className={`${styles.hamburger_line} ${showMenu ? styles.open : ''}`}></div>
        <div className={`${styles.hamburger_line} ${showMenu ? styles.open : ''}`}></div>
      </div>
      <div className={`${styles.second_section} ${showMenu ? styles.show_menu : ''}`}>
        <div className={styles.theme} onClick={toggleDarkMode}>⏻</div>
        <div className={styles.menu}>
          {isLoggedIn ? (
            <>
              <button onClick={handleLogout}>Logout</button>
            </>
          ) : (
            <>
              <Link className={`${styles.menu_item} ${location.pathname === '/profile' ? styles.active : ''}`} to="/profile">PROFILE</Link>
              <Link className={`${styles.menu_item} ${location.pathname === '/login' ? styles.active : ''}`} to="/login">LOGIN</Link>
              <Link className={`${styles.menu_item} ${location.pathname === '/register' ? styles.active : ''}`} to="/register">REGISTER</Link>
            </>
          )}
        </div>
        <nav className={styles.menu}>
          <a className={`${styles.menu_item} ${location.pathname === '/source' ? styles.active : ''}`} href="https://github.com/Knockingfish/hauskanomad">SOURCE</a>
          <Link className={`${styles.menu_item} ${location.pathname === '/about' ? styles.active : ''}`} to="/about">ABOUT US</Link>
          <Link className={`${styles.menu_item} ${location.pathname === '/' ? styles.active : ''}`} to="/">HOME</Link>
        </nav>
      </div>
    </header>
  );
}

export default CustomHeader;
