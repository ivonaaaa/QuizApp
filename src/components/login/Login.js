import React from 'react';
import Box from '../common/Box';
import LoginForm from '../login/LoginForm';

const Login = () => {
  return (
    <div className="login-page">
      <Box className="login-box">
        <LoginForm onSubmit={(data) => console.log(data)} />
      </Box>
    </div>
  );
};

export default Login;