import React, { useState } from 'react';
import Button from '../common/Button';
import InputField from '../common/InputField';

const LoginForm = ({ onSubmit }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!email || !password) {
      setErrorMessage('All fields are required');
      return;
    }
    onSubmit({ email, password });
  };

  return (
    <form className="login-form" onSubmit={handleSubmit}>
      <InputField
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="Email"
      />
      <InputField
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        placeholder="Password"
      />
      {errorMessage && <p className="error">{errorMessage}</p>}
      <Button label="Login" onClick={handleSubmit} />
    </form>
  );
};

export default LoginForm;