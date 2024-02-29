import React from 'react';
import PasswordResetForm from './PasswordResetForm';
import CustomHeader from '../global/CustomHeader';
import CustomFooter from '../global/CustomFooter';
import styles from './Auth.module.css';

function RegistrationPage() {
  return (
    <div>
      <div>
        <CustomHeader />
      </div>
      <div className={styles.container}>
        <PasswordResetForm />
      </div>
      <div>
        <CustomFooter />
      </div>
    </div>
  );
}

export default RegistrationPage;
