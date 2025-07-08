import "/src/App.css";

const Logo = ({ src, alt }) => {
  return (
    <img className="logo" src="\images\GQA_logo.jpg" alt={alt || "App Logo"} />
  );
};

export default Logo;
