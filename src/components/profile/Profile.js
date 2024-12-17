import React from 'react';
import ProfileDetails from '../profile/ProfileDetails';
import Button from '../common/Button';

const Profile = ({ user, onLogout, onBackToMain }) => {
  return (
    <div className="profile-page">
      <Button label="Back" onClick={onBackToMain} className="back-button" />
      <ProfileDetails username={user.username} onLogout={onLogout} />
      <Button label="Logout" onClick={onLogout} className="logout-button" style={{ backgroundColor: 'red' }} />
    </div>
  );
};

export default Profile;