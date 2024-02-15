import React, { useState, useEffect } from 'react';
import styles from './CustomFooter.module.css'

const Footer = () => {
  const [containerWidth, setContainerWidth] = useState(window.screen.width);

  useEffect(() => {
    function updateWidth() {
      setContainerWidth(window.screen.width);
    }

    window.addEventListener('resize', updateWidth);

    return () => window.removeEventListener('resize', updateWidth);
  }, []);

  return (
    <footer className={styles.custom_footer} style={{ width: containerWidth }}>
      <div className={styles.foot_container}>
        <div className={styles.foot_item}>Contact us: info@hauskanomad.com</div>
        <div className={styles.foot_item}>Phone: +358 55 0866841</div>
        <div className={styles.foot_item}>Address: Helsinki, Finland</div>
      </div>
      <div className={styles.foot_container}>
        Social Media:
        <a className={styles.foot_link} href="https://facebook.com">Facebook</a>
        <a className={styles.foot_link} href="https://twitter.com">Twitter</a>
        <a className={styles.foot_link} href="https://instagram.com">Instagram</a>
      </div>
    </footer>
  );
};

export default Footer;
