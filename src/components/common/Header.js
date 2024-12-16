import React from 'react';

const Header = ({ title, image }) => {
  return (
    <header className="header">
      {image && <img src={image} alt="Header" />}
      <h1>{title}</h1>
    </header>
  );
};

export default Header;