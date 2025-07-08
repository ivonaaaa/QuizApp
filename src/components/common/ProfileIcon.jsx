import "/src/App.css";

const ProfileIcon = ({ onClick, src, alt }) => {
  return (
    <div className="profile-icon" onClick={onClick}>
      <img src="\images\GQA_profile.png" alt={alt || "Profile"} />
    </div>
  );
};

export default ProfileIcon;
