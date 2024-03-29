import React from 'react';
import styles from './CustomFooter.module.css'

const Footer = () => {
  return (
    <footer className={styles.custom_footer}>
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
      <div className={styles.foot_container}>
        <a className={styles.foot_link} href="https://www.flaticon.com/free-icons/moon" title="moon icons">Moon icons created by Good Ware - Flaticon</a>
        <a className={styles.foot_link} href="https://www.flaticon.com/free-icons/sun" title="sun icons">Sun icons created by Good Ware - Flaticon</a>
        <a className={styles.foot_link} href="https://www.flaticon.com/free-icons/arrow" title="arrow icons">Arrow icons created by Freepik - Flaticon</a>
      </div>
    </footer>
  );
};

export default Footer;
