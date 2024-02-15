import React from 'react';
import RegistrationForm from './authentification/RegistrationForm';
import CustomHeader from './global/CustomHeader';
import CustomFooter from './global/CustomFooter';
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
      <div className={styles.scrollarea}>
        <CustomFooter />
      </div>
    </div>
  );
}

export default RegistrationPage;
