import React from "react";
import ProfileDetails from "./ProfileDetails";
import Button from "../common/Button";
import "/src/components/profile/Profile.css";

const Profile = ({ onLogout, onBack }) => {
  return (
    <div className="profile-page">
      <ProfileDetails username="Player1" onLogout={onLogout} />
      <Button label="Back to Main" onClick={onBack} />
      <Button label="Logout" onClick={onLogout} style={{ backgroundColor: "red" }} />
    </div>
  );
};

export default Profile;