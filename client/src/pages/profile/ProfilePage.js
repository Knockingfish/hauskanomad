import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate for redirection
import ReservationManagement from './components/ReservationManagement';
import CustomHeader from '../global/CustomHeader';
import CustomFooter from '../global/CustomFooter';
import styles from './ProfilePage.module.css';

const ProfilePage = () => {
  const navigate = useNavigate(); // Get the navigate function for redirection

  useEffect(() => {
    document.title = 'HauskaNomad - Profile';

    // Check localStorage for isLoggedIn status
    const isLoggedIn = localStorage.getItem('isLoggedIn');

    // If user is not logged in, redirect to login page
    if (isLoggedIn !== 'true') {
      navigate('/login'); // Redirect to the login page
    }
  }, [navigate]); // Make sure to include navigate in the dependencies array

  return (
    <div>
      <div className={styles.end_container}>
        <CustomHeader />
      </div>
      <div className={styles.container}>
        <ReservationManagement />
      </div>
      <div className={styles.end_container}>
        <CustomFooter />
      </div>
    </div>
  );
};

export default ProfilePage;
