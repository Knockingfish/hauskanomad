import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import LogoImage from './HauskaNomadLogo.png';
import styles from './CustomHeader.module.css';
import { useDarkMode } from './DarkModeContext';

function CustomHeader({ isLoggedIn }) {
  const [localDarkMode, setLocalDarkMode] = useState(false);
  const [showMenu, setShowMenu] = useState(false); // State to toggle the visibility of the menu
  const location = useLocation();
  const { darkMode: globalDarkMode, toggleDarkMode: toggleGlobalDarkMode } = useDarkMode();
  const { darkMode } = useDarkMode();

  useEffect(() => {
    // Set the local dark mode state based on the global dark mode state
    setLocalDarkMode(globalDarkMode);
  }, [globalDarkMode]);

  const handleLogout = () => {
    // Handle logout functionality here
  };

  const toggleLocalDarkMode = () => {
    setLocalDarkMode(!localDarkMode); // Toggle local dark mode state
    // Toggle the 'dark-mode' class on the root element
    document.documentElement.classList.toggle('dark_mode', !localDarkMode);
  };

  const toggleMenu = () => {
    setShowMenu(prevShowMenu => !prevShowMenu); // Toggle the showMenu state based on its previous value
  };  

  return (
    <header className={`${styles.container} ${localDarkMode ? styles.dark_mode : ''}`}>
      <div className={styles.first_section}>
        <Link to="/">
          <img className={styles.logo} src={LogoImage} alt="Logo" />
        </Link>
      </div>
      <div className={`${styles.second_section}`}>
        <div className={styles.theme} onClick={() => {
          toggleLocalDarkMode();
          toggleGlobalDarkMode(); // Toggle global dark mode state
        }}>
          <img
            className={styles.theme_icon}
            src={darkMode ? '/theme_dark.png' : '/theme_light.png'}
            alt="theme"
          />
        </div>
        <div className={styles.menu}>
          {isLoggedIn ? (
            <button className={styles.menu_item2} onClick={handleLogout}>Logout</button>
          ) : (
            <>
              <Link className={`${styles.menu_item1} ${location.pathname === "/profile" ? styles.active : ""}`} to="/profile">PROFILE</Link>
              <Link className={`${styles.menu_item2} ${location.pathname === "/login" ? styles.active : ""}`} to="/login">LOGIN</Link>
              <Link className={`${styles.menu_item3} ${location.pathname === "/register" ? styles.active : ""}`} to="/register">REGISTER</Link>
            </>
          )}
          <a className={styles.menu_item4} href="https://github.com/Knockingfish/hauskanomad">SOURCE</a>
          <Link className={`${styles.menu_item5} ${location.pathname === "/about_us" ? styles.active : ""}`} to="/about_us">ABOUT US</Link>
          <Link className={`${styles.menu_item6} ${location.pathname === "/" ? styles.active : ""}`} to="/">HOME</Link>
        </div>
        <div className={styles.third_section}>
            <div className={styles.hamburger} onClick={toggleMenu}>
              <img
                className={styles.hamburger_icon}
                src={darkMode ? '/down_dark.png' : '/down_light.png'}
                alt="ham"
              />
            </div>
            {showMenu && (
              <div className={styles.fourth_section}>
                <div className={styles.burger_menu}>
                  {isLoggedIn ? (
                    <button onClick={handleLogout}>Logout</button>
                  ) : (
                    <>
                      <Link className={`${styles.burger_menu_item1} ${location.pathname === "/profile" ? styles.active : ""}`} to="/profile">PROFILE</Link>
                      <Link className={`${styles.burger_menu_item2} ${location.pathname === "/login" ? styles.active : ""}`} to="/login">LOGIN</Link>
                      <Link className={`${styles.burger_menu_item3} ${location.pathname === "/register" ? styles.active : ""}`} to="/register">REGISTER</Link>
                    </>
                  )}
                  <a className={styles.burger_menu_item4} href="https://github.com/Knockingfish/hauskanomad">SOURCE</a>
                  <Link className={`${styles.burger_menu_item5} ${location.pathname === "/about_us" ? styles.active : ""}`} to="/about_us">ABOUT US</Link>
                  <Link className={`${styles.burger_menu_item6} ${location.pathname === "/" ? styles.active : ""}`} to="/">HOME</Link>
                </div>
              </div>
              )}
            </div>
          </div>
    </header>
  );
}  

export default CustomHeader;
