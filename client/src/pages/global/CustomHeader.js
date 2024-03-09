import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import LogoImage from './HauskaNomadLogo.png';
import styles from './CustomHeader.module.css';
import { useDarkMode } from './DarkModeContext';

function CustomHeader() {
  const [localDarkMode, setLocalDarkMode] = useState(false);
  const [showMenu, setShowMenu] = useState(false);
  const location = useLocation();
  const { darkMode: globalDarkMode, toggleDarkMode: toggleGlobalDarkMode } = useDarkMode();

  // Controls light/dark mode for icons; for image files.
  useEffect(() => {
    setLocalDarkMode(globalDarkMode);
  }, [globalDarkMode]);

  // Logs user out if the button is clicked
  const handleLogout = () => {
    localStorage.removeItem('isLoggedIn');
  };

  // Controls light/dark mode for CSS
  const toggleLocalDarkMode = () => {
    setLocalDarkMode(!localDarkMode);
    document.documentElement.classList.toggle('dark_mode', !localDarkMode);
  };

  const isLoggedIn = localStorage.getItem('isLoggedIn') === 'true'; // Read login status from local storage

  return (
    <>
      <header className={`${styles.container} ${localDarkMode ? styles.dark_mode : ''}`}>
      {/* Logo section */}
        <div className={styles.first_section}>
          <Link to="/">
            <img className={styles.logo} src={LogoImage} alt="Logo" />
          </Link>
        </div>
      {/* Menu bar section */}
        <div className={`${styles.second_section}`}>
          <div className={styles.theme} onClick={() => {
            toggleLocalDarkMode();
            toggleGlobalDarkMode();
          }}>
          <img
            className={styles.theme_icon}
            src={localDarkMode ? '/theme_dark.png' : '/theme_light.png'}
            alt="theme"
          />
          </div>
          <div className={styles.menu}>
          {isLoggedIn ? (
            <>
              <Link className={styles.menu_item1} onClick={handleLogout}>LOGOUT</Link>
              <Link className={`${styles.menu_item2} ${location.pathname === "/profile" ? styles.active : ""}`} to="/profile">PROFILE</Link>
            </>
          ) : (
            <>
            <Link className={`${styles.menu_item1} ${location.pathname === "/login" ? styles.active : ""}`} to="/login">LOGIN</Link>
            <Link className={`${styles.menu_item2} ${location.pathname === "/register" ? styles.active : ""}`} to="/register">REGISTER</Link>
            </>
          )}
          <a className={styles.menu_item3} href="https://github.com/Knockingfish/hauskanomad">SOURCE</a>
          <Link className={`${styles.menu_item4} ${location.pathname === "/about_us" ? styles.active : ""}`} to="/about_us">ABOUT US</Link>
          <Link className={`${styles.menu_item5} ${location.pathname === "/" ? styles.active : ""}`} to="/">HOME</Link>
        </div>
      {/* Hamburger menu section */}
        <div className={styles.third_section}>
          <div className={styles.hamburger} onClick={() => setShowMenu(!showMenu)}>
          <img
          className={styles.hamburger_icon}
          src={localDarkMode ? '/down_dark.png' : '/down_light.png'}
          alt="ham"
          />
          </div>
          {showMenu && (
            <div className={styles.fourth_section}>
            <div className={styles.burger_menu}>
            {isLoggedIn ? (
              <>
              <Link className={`${styles.burger_menu_item2} ${location.pathname === "/profile" ? styles.active : ""}`} to="/profile">PROFILE</Link>
              <Link className={styles.burger_menu_item1} onClick={handleLogout}>LOGOUT</Link>
              </>
            ) : (
              <>
              <Link className={`${styles.burger_menu_item1} ${location.pathname === "/login" ? styles.active : ""}`} to="/login">LOGIN</Link>
              <Link className={`${styles.burger_menu_item2} ${location.pathname === "/register" ? styles.active : ""}`} to="/register">REGISTER</Link>
              </>
            )}
            <a className={styles.burger_menu_item3} href="https://github.com/Knockingfish/hauskanomad">SOURCE</a>
            <Link className={`${styles.burger_menu_item4} ${location.pathname === "/about_us" ? styles.active : ""}`} to="/about_us">ABOUT US</Link>
            <Link className={`${styles.burger_menu_item5} ${location.pathname === "/" ? styles.active : ""}`} to="/">HOME</Link>
            </div>
            </div>
          )}
          </div>
        </div>
      </header>
    </>
  );
}

export default CustomHeader;
