import React from 'react';

const ProfileInfo = ({ profilePicture, address, phoneNumber, emailAddress }) => {
  return (
    <div>
      <h2>Profile Information</h2>

      {/* Profile Picture */}
      <div>
        <img src={profilePicture} alt="Profile" />
      </div>

      {/* Address */}
      <div>
        <h3>Street Address</h3>
        <p>{address}</p>
      </div>

      {/* Phone Number */}
      <div>
        <h3>Phone Number</h3>
        <p>{phoneNumber}</p>
      </div>

      {/* Email Address */}
      <div>
        <h3>Email Address</h3>
        <p>{emailAddress}</p>
      </div>
    </div>
  );
};

export default ProfileInfo;
