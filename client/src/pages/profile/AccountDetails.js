import React, { useState, useRef, useEffect } from 'react';
import styles from './AccountDetail.module.css';

const AccountDetails = () => {
  const fileInputRef = useRef(null);
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

  useEffect(() => {
    // Update user object with edited values
    setUser({
      ...user,
      profilePicture: editedProfilePicture || user.profilePicture,
      address: editedAddress || user.address,
      phoneNumber: editedPhoneNumber || user.phoneNumber,
      emailAddress: editedEmailAddress || user.emailAddress,
    });
  }, [editedProfilePicture, editedAddress, editedPhoneNumber, editedEmailAddress]);

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

  const handleButtonClick = () => {
    fileInputRef.current.click();
  };

  const handleResetPasswordToggle = () => {
    setShowPasswordFields((prevShowPasswordFields) => !prevShowPasswordFields);
  };

  const handleSubmit = () => {
    // Password change logic
    if (newPassword !== confirmNewPassword) {
      setPasswordChangeError('New password and confirmation do not match');
      return;
    }

    if (currentPassword !== user.password) {
      setPasswordChangeError('Current password is incorrect');
      return;
    }

    setUser((prevUser) => ({ ...prevUser, password: newPassword }));
    setPasswordChangeError('');
    setShowPasswordFields(false); // Hide password fields after successful change
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
            <div className={styles.profile_container}>
              <img className={styles.profile} src={user.profilePicture} alt="Pic" />
            </div>
            <button className={styles.click} onClick={handleButtonClick}>
              PROFILE PICTURE
            </button>
            <input
              ref={fileInputRef}
              type="file"
              accept="image/*"
              onChange={handleProfilePictureChange}
              className={styles.input}
            />
          </div>
        </div>

        {/* Address */}
        <div className={styles.column}>
          <div className={styles.row}>
            <h4>Street Address</h4>
          </div>
          <div className={styles.row}>
            <p className={styles.field}>{user.address}</p>
            <button
              className={styles.click}
              onClick={() => spawnInputField('address', user.address, setEditedAddress)}
            >
              STREET ADDRESS
            </button>
          </div>
        </div>

        {/* Phone Number */}
        <div className={styles.column}>
          <div className={styles.row}>
            <h4>Phone Number</h4>
          </div>
          <div className={styles.row}>
            <p className={styles.field}>{user.phoneNumber}</p>
            <button
              className={styles.click}
              onClick={() => spawnInputField('phone number', user.phoneNumber, setEditedPhoneNumber)}
            >
              PHONE NUMBER
            </button>
          </div>
        </div>

        {/* Email Address */}
        <div className={styles.column}>
          <div className={styles.row}>
            <h4>Email Address</h4>
          </div>
          <div className={styles.row}>
            <p className={styles.field}>{user.emailAddress}</p>
            <button
              className={styles.click}
              onClick={() => spawnInputField('email address', user.emailAddress, setEditedEmailAddress)}
            >
              EMAIL ADDRESS
            </button>
          </div>
        </div>

        {/* Password Change */}
        <div className={styles.column}>
          <div className={styles.row}>
            <h4>Password Change</h4>
          </div>
          <div className={styles.row}>
            <button className={styles.click} onClick={handleResetPasswordToggle}>
              {showPasswordFields ? 'HIDE PASSWORD RESET' : 'RESET PASSWORD'}
            </button>
          </div>
          <div className={styles.password}>
            {showPasswordFields && (
              <div className={styles.password_column}>
                <input
                  className={styles.password_input}
                  type="password"
                  placeholder="Current Password"
                  value={currentPassword}
                  onChange={(e) => setCurrentPassword(e.target.value)}
                />
                <input
                  className={styles.password_input}
                  type="password"
                  placeholder="New Password"
                  value={newPassword}
                  onChange={(e) => setNewPassword(e.target.value)}
                />
                <input
                  className={styles.password_input}
                  type="password"
                  placeholder="Confirm New Password"
                  value={confirmNewPassword}
                  onChange={(e) => setConfirmNewPassword(e.target.value)}
                />
                <button className={styles.password_click} onClick={handleSubmit}>
                  SUBMIT
                </button>
                {passwordChangeError && <p className={styles.error}>{passwordChangeError}</p>}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AccountDetails;
