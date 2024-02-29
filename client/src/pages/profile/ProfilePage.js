import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate for redirection
import AccountDetails from './components/AccountDetails';
import ReservationManagement from './components/ReservationManagement';
import CustomHeader from '../global/CustomHeader';
import CustomFooter from '../global/CustomFooter';
import styles from './ProfilePage.module.css';

const ProfilePage = () => {
  const [activeSection, setActiveSection] = useState('account');
  const navigate = useNavigate(); // Get the navigate function for redirection

  useEffect(() => {
    document.title = 'HauskaNomad - Profile';

    // Check localStorage for isLoggedIn status
    const isLoggedIn = localStorage.getItem('isLoggedIn');

    // If user is not logged in, redirect to home page
    if (isLoggedIn !== 'true') {
      navigate('/'); // Redirect to the home page
    }
  }, [navigate]); // Make sure to include navigate in the dependencies array

  return (
    <div>
      <div className={styles.end_container}>
        <CustomHeader />
      </div>

      <div className={styles.container}>
        <nav className={styles.top_panel}>
          <button className={`${styles.section} ${activeSection === 'account' ? styles.active : ''}`} onClick={() => setActiveSection('account')}>Account</button>
          <button className={`${styles.section} ${activeSection === 'reservation' ? styles.active : ''}`} onClick={() => setActiveSection('reservation')}>Reservation</button>
        </nav>
        <div>
          {activeSection === 'account' && <AccountDetails />}
          {activeSection === 'reservation' && <ReservationManagement />}
        </div>
      </div>
      <div className={styles.end_container}>
        <CustomFooter />
      </div>
    </div>
  );
};

export default ProfilePage;
