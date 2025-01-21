import React from "react";
import LoginForm from "./LoginForm";
import "/src/components/login/Login.css";

const Login = ({ onLogin }) => {
  const handleLogin = (credentials) => {
    console.log("User logged in:", credentials);
    onLogin();
  };

  return (
    <div className="login-page">
      <LoginForm onSubmit={handleLogin} />
    </div>
  );
};

export default Login;