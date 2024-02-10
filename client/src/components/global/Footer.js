import React from 'react';
import "./Header.css";

const Footer = () => {
  return (
    <footer>
      <div className="foot_container">
        <div className="foot_item">Contact us: info@hauskanomad.com</div>
        <div className="foot_item">Phone: +358 55 0866841</div>
        <div className="foot_item">Address: Helsinki, Finland</div>
      </div>
      <div className="foot_container">
      Social Media:
        <div className="foot_link_container">
          <a className="foot_link" href="https://facebook.com">Facebook</a>
          <a className="foot_link" href="https://twitter.com">Twitter</a>
          <a className="foot_link" href="https://instagram.com">Instagram</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
