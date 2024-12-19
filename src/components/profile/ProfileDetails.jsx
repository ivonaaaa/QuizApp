import React from 'react';
import ProfileIcon from '../common/ProfileIcon';
import "/src/App.css";

const ProfileDetails = ({ username, onLogout }) => {
  return (
    <div className="profile-details">
      <ProfileIcon />
      <h2>{username}</h2>
    </div>
  );
};

export default ProfileDetails;