import React from 'react';
import ProfileIcon from '../common/ProfileIcon';

const ProfileDetails = ({ username, onLogout }) => {
  return (
    <div className="profile-details">
      <ProfileIcon />
      <h2>{username}</h2>
      <button onClick={onLogout}>Logout</button>
    </div>
  );
};

export default ProfileDetails;