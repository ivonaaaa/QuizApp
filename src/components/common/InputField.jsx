import React from 'react';
import "/src/App.css";

const InputField = ({ type, value, onChange, isValid, placeholder }) => {
  return (
    <div className="input-field">
      <input
        type={type}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        className={isValid ? 'valid' : 'invalid'}
      />
    </div>
  );
};

export default InputField;