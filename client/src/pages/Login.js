import React from 'react';
import LoginForm from '../components/authentification/LoginForm';
import CustomHeader from '../components/global/CustomHeader';
import CustomFooter from '../components/global/CustomFooter';
import styles from './Auth.module.css';

function LoginPage() {
  return (
    <div>
      <div className={styles.scrollarea}>
          <CustomHeader />
      </div>
      <div className={styles.container}>
        <LoginForm />
      </div>
      <div className={styles.scrollarea}>
        <CustomFooter />
      </div>
    </div>
  );
}

export default LoginPage;
