import React from 'react';
import "/src/App.css";

const Header = ({ title, image, text }) => {
  return (
    <header className="header">
      {image && <img src="\images\GQA_gradient.png" alt="Header" />}
      <h1>{title}</h1>
      <p>{text}</p>
    </header>
  );
};

export default Header;