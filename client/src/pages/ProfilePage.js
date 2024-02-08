import React, { useState } from 'react';
import AccountDetails from '../component/AccountDetails';
import ReservationManagement from '../component/ReservationManagement';

const ProfilePage = () => {
  const [activeSection, setActiveSection] = useState('account'); // To track the active section

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
    </div>
  );
};

export default ProfilePage;
