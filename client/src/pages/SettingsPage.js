import React from 'react';
import GeneralSettings from '../component/GeneralSettings'; 
import BookingConfiguration from '../component/BookingConfiguration';
import PaymentSettings from '../component/PaymentSettings'; 


const SettingsPage = () => {
  return (
    <div>
      <h1>Settings</h1>
      
      {/* Rendering different sections of settings */}
      <GeneralSettings />
      <BookingConfiguration />
      <PaymentSettings />
      
    </div>
  );
};

export default SettingsPage;
