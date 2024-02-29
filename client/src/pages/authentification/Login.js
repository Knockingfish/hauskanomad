import React from 'react';
import LoginForm from './components/LoginForm';
import CustomHeader from '../global/CustomHeader';
import CustomFooter from '../global/CustomFooter';
import styles from './Auth.module.css';

function LoginPage() {
  return (
    <div>
      <div>
          <CustomHeader />
      </div>
      <div className={styles.container}>
        <LoginForm />
      </div>
      <div>
        <CustomFooter />
      </div>
    </div>
  );
}

export default LoginPage;
