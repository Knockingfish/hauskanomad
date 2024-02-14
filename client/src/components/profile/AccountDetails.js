import React, { useState } from 'react';
import styles from './AccountDetail.module.css'

const AccountDetails = () => {
  // Mock user data (assuming already logged in)
  const [user, setUser] = useState({
    username: 'JohnDoe',
    password: 'password', // For demonstration only, not a secure practice!
    profilePicture: 'path/to/default-profile-picture.jpg',
    address: '123 Main Street, Cityville',
    phoneNumber: '555-1234',
    emailAddress: 'john.doe@example.com',
  });

  // State variables for edited values
  const [editedProfilePicture, setEditedProfilePicture] = useState('');
  const [editedAddress, setEditedAddress] = useState('');
  const [editedPhoneNumber, setEditedPhoneNumber] = useState('');
  const [editedEmailAddress, setEditedEmailAddress] = useState('');
  const [currentPassword, setCurrentPassword] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [confirmNewPassword, setConfirmNewPassword] = useState('');
  const [passwordChangeError, setPasswordChangeError] = useState('');
  const [showPasswordFields, setShowPasswordFields] = useState(false);

  // Function to handle form submission
  const handleSubmit = () => {
    // Update user object with edited values
    setUser({
      ...user,
      profilePicture: editedProfilePicture || user.profilePicture,
      address: editedAddress || user.address,
      phoneNumber: editedPhoneNumber || user.phoneNumber,
      emailAddress: editedEmailAddress || user.emailAddress,
    });

    // Password change logic
    if (newPassword !== confirmNewPassword) {
      setPasswordChangeError('New password and confirmation do not match');
      return;
    }

    if (currentPassword !== user.password) {
      setPasswordChangeError('Current password is incorrect');
      return;
    }

    setUser(prevUser => ({ ...prevUser, password: newPassword }));
    setPasswordChangeError('');
    setShowPasswordFields(false); // Hide password fields after successful change
  };

  // Function to handle profile picture file change
  const handleProfilePictureChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      const url = URL.createObjectURL(file);
      setEditedProfilePicture(url);
    }
  };

  // Function to spawn input field for editing
  const spawnInputField = (fieldName, currentValue, setValue) => {
    const newValue = prompt(`Enter new ${fieldName}:`, currentValue);
    if (newValue !== null) {
      setValue(newValue);
    }
  };

  return (
    <div className={styles.container}>

      {/* Profile Information */}
      <div className={styles.float}>
        <div className={styles.column}>
          <div className={styles.row}>
            <h2>Profile Information</h2>
          </div>
        </div>

        {/* Profile Picture */}
        <div className={styles.column}>
          <div className={styles.row}>
            <h4>Profile Picture</h4>
          </div>
          <div className={styles.row}>
            <img className={styles.profile} src={user.profilePicture} alt="Profile" />
          </div>
          <div className={styles.row}>
            <input type="file" accept="image/*" onChange={handleProfilePictureChange} />
          </div>
        </div>

        {/* Address */}
        <div className={styles.column}>
          <div className={styles.row}>
            <h4>Street Address</h4>
          </div>
          <div className={styles.row}>
            <p>{user.address}</p>
          </div>
          <div className={styles.row}>
            <button onClick={() => spawnInputField('address', user.address, setEditedAddress)}>Change Address</button>
          </div>
        </div>

        {/* Phone Number */}
        <div className={styles.column}>
          <div className={styles.row}>
            <h4>Phone Number</h4>
          </div>
          <div className={styles.row}>
            <p>{user.phoneNumber}</p>
          </div>
          <div className={styles.row}>
            <button onClick={() => spawnInputField('phone number', user.phoneNumber, setEditedPhoneNumber)}>Change Phone Number</button>
          </div>
        </div>

        {/* Email Address */}
        <div className={styles.column}>
          <div className={styles.row}>
            <h4>Email Address</h4>
          </div>
          <div className={styles.row}>
            <p>{user.emailAddress}</p>
          </div>
          <div className={styles.row}>
            <button onClick={() => spawnInputField('email address', user.emailAddress, setEditedEmailAddress)}>Change Email Address</button>
          </div>
        </div>

        {/* Password Change */}
        <div className={styles.column}>
          <div className={styles.row}>
            <h4>Password Change</h4>
          </div>
          <div className={styles.row}>
            <button onClick={() => setShowPasswordFields(true)}>Change Password</button>
          </div>
          <div className={styles.row}>
            {showPasswordFields && (
              <>
                <input type="password" placeholder="Current Password" value={currentPassword} onChange={(e) => setCurrentPassword(e.target.value)} />
                <input type="password" placeholder="New Password" value={newPassword} onChange={(e) => setNewPassword(e.target.value)} />
                <input type="password" placeholder="Confirm New Password" value={confirmNewPassword} onChange={(e) => setConfirmNewPassword(e.target.value)} />
                <button onClick={handleSubmit}>Submit</button>
                {passwordChangeError && <p className={styles.error}>{passwordChangeError}</p>}
              </>
            )}
          </div>
        </div>

        {/* Submit Button */}
        <div className={styles.column2}>
          <div className={styles.row}>
            <button onClick={handleSubmit}>Save Changes</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AccountDetails;
