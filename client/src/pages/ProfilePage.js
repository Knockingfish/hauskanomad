import React, { useEffect, useState } from 'react';
import AccountDetails from './profile/AccountDetails';
import ReservationManagement from './profile/ReservationManagement';
import CustomHeader from './global/CustomHeader';
import CustomFooter from './global/CustomFooter';
import styles from './ProfilePage.module.css';

const ProfilePage = () => {
  const [activeSection, setActiveSection] = useState('account');

  useEffect(() => {
    document.title = 'Profile';
  }, []);

  return (
    <div>
      <div className={styles.scrollarea}>
        <CustomHeader />
      </div>

      <div className={styles.container}>
        <nav className={styles.top_panel}>
          <button className={`${styles.section} ${activeSection === 'account' ? styles.active : ''}`} onClick={() => setActiveSection('account')}>Account</button>
          <button className={`${styles.section} ${activeSection === 'reservation' ? styles.active : ''}`} onClick={() => setActiveSection('reservation')}>Reservation</button>
        </nav>
        <div className={styles.content}>
          {activeSection === 'account' && <AccountDetails />}
          {activeSection === 'reservation' && <ReservationManagement />}
        </div>
      </div>
      <div className={styles.scrollarea}>
        <CustomFooter />
      </div>
    </div>
  );
};

export default ProfilePage;
