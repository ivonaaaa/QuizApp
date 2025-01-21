import React from "react";
import ProfileDetails from "./ProfileDetails";
import Button from "../common/Button";
import Header from "../common/Header";
import "/src/components/profile/Profile.css";

const Profile = ({ onLogout, onBack }) => {
  return (
    <div className="profile-page">
      <Header image="/header-image.jpg" text="Get insight into your results." />
      <Button  className="back-to-main" label="Back" onClick={onBack} />
      <ProfileDetails username="Player1" />
      <Button className="logout" label="Log out" onClick={onLogout} />
    </div>
  );
};

export default Profile;