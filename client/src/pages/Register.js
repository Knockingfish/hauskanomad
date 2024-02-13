import React from 'react';
import RegistrationForm from '../components/authentification/RegistrationForm';
import CustomHeader from '../components/global/CustomHeader';
import CustomFooter from '../components/global/CustomFooter';
import styles from './Auth.module.css';

function RegistrationPage() {
  return (
    <div>
      <div className={styles.scrollarea}>
        <CustomHeader />
      </div>
      <div className={styles.container}>
        <RegistrationForm />
      </div>
      <CustomFooter />
    </div>
  );
}

export default RegistrationPage;
