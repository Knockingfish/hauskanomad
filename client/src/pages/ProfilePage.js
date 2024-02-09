import React, { useState } from 'react';
import AccountDetails from '../components/profile/AccountDetails';
import ReservationManagement from '../components/profile/ReservationManagement';
import ProfileInfo from '../components/profile/ProfileInfo';

const ProfilePage = () => {
  const [activeSection, setActiveSection] = useState('account');

  return (
    <div>
      {/* Navigation Section */}
      <nav>
        <button onClick={() => setActiveSection('account')}>Account</button>
        <button onClick={() => setActiveSection('reservation')}>Reservation</button>
      </nav>

      {/* Rendering Active Section */}
      {activeSection === 'account' && <AccountDetails />}
      {activeSection === 'reservation' && <ReservationManagement />}
      {activeSection === 'reservation' && <ProfileInfo />}
    </div>
  );
};

export default ProfilePage;
