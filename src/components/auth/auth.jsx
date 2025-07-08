import AuthForm from "../common/AuthForm";
import { loginUser, registerUser } from "../../api/userApi";
import "/src/components/auth/Auth.css";

const Auth = ({ onLogin }) => {
  const handleLogin = async ({ email, password }) => {
    try {
      const user = await loginUser({ email, password });
      if (user) onLogin(user);
    } catch (err) {
      console.error(err);
      alert("Login failed");
    }
  };

  const handleRegister = async ({ email, password }) => {
    try {
      const user = await registerUser({ email, password });
      if (user) onLogin(user);
    } catch (err) {
      alert("Registration failed");
    }
  };

  return (
    <div className="auth-page">
      <AuthForm onLogin={handleLogin} onRegister={handleRegister} />
    </div>
  );
};

export default Auth;
