import Button from "../common/Button";
import Header from "../common/Header";
import ProfileDetails from "./ProfileDetails";
import ResultDetails from "./ResultDetails";
import "/src/components/profile/Profile.css";

const Profile = ({ currentUser, onLogout, onBack }) => {
  return (
    <div className="profile-page">
      <Header image="/header-image.jpg" text="Get insight into your results." />
      <Button className="back-to-main" label="Back" onClick={onBack} />
      <ProfileDetails currentUser={currentUser} />
      <ResultDetails userId={currentUser.id} />
      <Button className="logout" label="Log out" onClick={onLogout} />
    </div>
  );
};

export default Profile;
