import ProfileIcon from "../common/ProfileIcon";
import "/src/App.css";

const ProfileDetails = ({ currentUser }) => {
  return (
    <div className="profile-details">
      <ProfileIcon />
      <h1>{currentUser.username}</h1>
      <p>{currentUser.email}</p>
    </div>
  );
};

export default ProfileDetails;
