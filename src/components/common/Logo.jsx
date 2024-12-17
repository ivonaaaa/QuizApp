import React from 'react';

const Logo = ({ src, alt }) => {
  return <img className="logo" src={src} alt={alt || 'App Logo'} />;
};

export default Logo;