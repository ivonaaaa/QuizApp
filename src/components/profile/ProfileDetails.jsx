import ProfileIcon from "../common/ProfileIcon";
import "/src/App.css";

const ProfileDetails = ({ currentUser }) => {
  const userName =
    currentUser.email.split("@")[0].charAt(0).toUpperCase() +
    currentUser.email.split("@")[0].slice(1);

  return (
    <div className="profile-details">
      <ProfileIcon />
      <h1>{userName}</h1>
      <p>{currentUser.email}</p>
    </div>
  );
};

export default ProfileDetails;
