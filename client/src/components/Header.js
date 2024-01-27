import React from 'react';
import { Link } from 'react-router-dom';

function Header() {
  return (
    <nav>
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/travel-listings">Travel Listings</Link></li>
        <li><Link to="/booking-form">Booking Form</Link></li>
      </ul>
    </nav>
  );
}

export default Header;
