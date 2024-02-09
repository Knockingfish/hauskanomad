import React, { useState } from 'react';
import ProfileInfo from './ProfileInfo'; 

const AccountDetails = () => {
  const [username, setUsername] = useState('JohnDoe');
  const [password, setPassword] = useState('');
  const [profilePicture, setProfilePicture] = useState('path/to/default-profile-picture.jpg');
  const [address, setAddress] = useState('123 Main Street, Cityville');
  const [phoneNumber, setPhoneNumber] = useState('555-1234');
  const [emailAddress, setEmailAddress] = useState('john.doe@example.com');

  const handleChangePassword = (newPassword) => {
    // Logic to update the password in the backend
    console.log('Password changed to:', newPassword);
  };

  return (
    <div>
      <h2>Account Details</h2>

      {/* Displaying Profile Information */}
      <ProfileInfo
        profilePicture={profilePicture}
        address={address}
        phoneNumber={phoneNumber}
        emailAddress={emailAddress}
      />

      <p>Username: {username}</p>
      <label>
        Change Password:
        <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
      </label>
      <button onClick={() => handleChangePassword(password)}>Change Password</button>
    </div>
  );
};

export default AccountDetails;

