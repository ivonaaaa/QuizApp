import LoginForm from "./LoginForm";
import { loginUser } from "../../api/userApi";
import "/src/components/login/Login.css";

const Login = ({ onLogin }) => {
  const handleLogin = async ({ email, password }) => {
    try {
      const user = await loginUser({ email, password });
      if (user) onLogin();
      else alert("Invalid credentials");
    } catch (err) {
      console.error(err);
      alert("Login failed");
    }
  };

  return (
    <div className="login-page">
      <LoginForm onSubmit={handleLogin} />
    </div>
  );
};

export default Login;
