import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import LogoImage from './HauskaNomadLogo.png';
import styles from './CustomHeader.module.css';

function CustomHeader({ isLoggedIn }) {
  const [containerWidth, setContainerWidth] = useState(window.screen.width);
  const [darkMode, setDarkMode] = useState(false);
  const location = useLocation();

  useEffect(() => {
    function updateWidth() {
      setContainerWidth(window.screen.width);
    }

    window.addEventListener('resize', updateWidth);

    return () => window.removeEventListener('resize', updateWidth);
  }, []);

  const handleLogout = () => {
    // Handle logout functionality here
  };

  const toggleDarkMode = () => {
    setDarkMode(!darkMode); // Toggle dark mode state
    // Toggle the 'dark-mode' class on the root element
    document.documentElement.classList.toggle('dark_mode', !darkMode);
  };

  return (
    <header className={`${styles.container} ${darkMode ? styles.dark_mode : ''}`} style={{ width: containerWidth }}>
      <div className={styles.first_section}>
        <Link to="/">
          <img className={styles.logo} src={LogoImage} alt="Logo" />
        </Link>
      </div>
      <div className={styles.second_section}>
        <div className={styles.theme} onClick={toggleDarkMode}>THEME</div>
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
