// W
import React from 'react';
import { Link } from 'react-router-dom';

// 99% of this will need to be replaced at some point
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
