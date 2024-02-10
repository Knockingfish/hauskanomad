import React from 'react';
import { Link } from 'react-router-dom';
import LogoImage from '../../assets/HauskaNomadLogo.png';
import "./Header.css";

function Header({ isLoggedIn }) {
  const handleLogout = () => {
    // Handle logout functionality here
  };

  return (
    <header>
      <div className="first_section">
        <Link to="/">
          <img className="logo" src={LogoImage} alt="Logo" />
        </Link>
      </div>
      <div className="second_section">
        <nav className="menu">
          <div><Link className="menu_item" activeClassName="active" to="/">HOME</Link></div>
          <div><Link className="menu_item" activeClassName="active" to="/about">ABOUT US</Link></div>
          <div><Link className="menu_item" activeClassName="active" to="/blog">BLOG</Link></div>
          <div><a className="menu_item" href="https://github.com/Knockingfish/hauskanomad">SOURCE</a></div>
        </nav>
        <div className="register">
            {isLoggedIn ? (
              <>
                <button onClick={handleLogout}>Logout</button>
              </>
            ) : (
              <>
                <Link className="menu_item" to="/login">LOGIN</Link>
                <Link className="menu_item" to="/register">REGISTER</Link>
                <Link className="menu_item" to="/profile">PROFILE</Link>
              </>
            )}
            <div className="theme_toggle">⏻</div>
        </div>
      </div>
    </header>
  );
}

export default Header;
