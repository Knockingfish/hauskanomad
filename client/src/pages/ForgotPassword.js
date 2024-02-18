import React from 'react';
import ForgotPasswordForm from './authentification/ForgotPasswordForm';
import CustomHeader from './global/CustomHeader';
import CustomFooter from './global/CustomFooter';
import styles from './Auth.module.css';

function RegistrationPage() {
  return (
    <div>
      <div>
        <CustomHeader />
      </div>
      <div className={styles.container}>
        <ForgotPasswordForm />
      </div>
      <div>
        <CustomFooter />
      </div>
    </div>
  );
}

export default RegistrationPage;
