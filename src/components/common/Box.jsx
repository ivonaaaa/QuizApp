import React from 'react';
import "/src/App.css";

const Box = ({ children, className }) => {
  return <div className={`box ${className}`}>{children}</div>;
};

export default Box;