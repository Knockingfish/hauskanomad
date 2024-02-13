import React, { useEffect, useState } from 'react';
import AccountDetails from '../components/profile/AccountDetails';
import ReservationManagement from '../components/profile/ReservationManagement';
import ProfileInfo from '../components/profile/ProfileInfo';
import CustomHeader from '../components/global/CustomHeader';
import CustomFooter from '../components/global/CustomFooter';

const ProfilePage = () => {
  const [activeSection, setActiveSection] = useState('account');

  useEffect(() => {
    document.title = 'Profile';
  }, []);

  return (
    <div>
    <CustomHeader />
      {/* Navigation Section */}
      <nav>
        <button onClick={() => setActiveSection('account')}>Account</button>
        <button onClick={() => setActiveSection('reservation')}>Reservation</button>
      </nav>

      {/* Rendering Active Section */}
      {activeSection === 'account' && <AccountDetails />}
      {activeSection === 'reservation' && <ReservationManagement />}
      {activeSection === 'reservation' && <ProfileInfo />}
    <CustomFooter />
    </div>
  );
};


export default ProfilePage;
