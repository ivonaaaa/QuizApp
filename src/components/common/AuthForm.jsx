import { useState } from "react";
import Logo from "./Logo";
import Button from "./Button";
import InputField from "./InputField";
import "/src/styles/App.css";

const AuthForm = ({ onLogin, onRegister }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = (e) => {
    e.preventDefault();
    if (!email || !password) {
      alert("Invalid credentials. Try again.");
      return;
    }
    onLogin({ email, password });
  };

  const handleRegister = (e) => {
    e.preventDefault();
    if (!email || !password) {
      alert("Please enter email and password");
      return;
    }
    onRegister({ email, password });
  };

  return (
    <form className="auth-form">
      <Logo className="logo" />
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
      <div className="button-group">
        <Button label="Login" onClick={handleLogin} />
        <Button label="Register" onClick={handleRegister} />
      </div>
    </form>
  );
};

export default AuthForm;
