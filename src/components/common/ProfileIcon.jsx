import React from 'react';

const ProfileIcon = ({ onClick, src, alt }) => {
  return (
    <div className="profile-icon" onClick={onClick}>
      <img src={src} alt={alt || 'Profile'} />
    </div>
  );
};

export default ProfileIcon;