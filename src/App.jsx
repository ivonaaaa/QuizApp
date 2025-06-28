import { useState, useEffect } from "react";
import Login from "./components/login/Login";
import Main from "./components/main/Main";
import Profile from "./components/profile/Profile";
import Quiz from "./components/quiz/Quiz";
import "/src/App.css";

const App = () => {
  const [currentPage, setCurrentPage] = useState("main"); //! ode vrati login kasnije
  const [selectedQuizId, setSelectedQuizId] = useState(null);
  const [currentUser, setCurrentUser] = useState(null);
  const [userId, setUserId] = useState(null);

  useEffect(() => {
    const savedUser = localStorage.getItem("currentUser");
    if (savedUser) {
      const parsedUser = JSON.parse(savedUser);
      setCurrentUser(parsedUser);
      setUserId(parsedUser.id || parsedUser._id);
      setCurrentPage("main");
    } else {
      setCurrentPage("login");
    }
  }, []);

  const navigateTo = (page) => {
    setCurrentPage(page);
  };

  const handleLogin = (userData) => {
    setCurrentUser(userData.user);
    setUserId(userData.user.id);
    localStorage.setItem("currentUser", JSON.stringify(userData.user));
    navigateTo("main");
  };

  const handleLogout = () => {
    setCurrentUser(null);
    setUserId(null);
    setSelectedQuizId(null);
    localStorage.removeItem("currentUser");
    navigateTo("login");
  };

  const renderPage = () => {
    switch (currentPage) {
      case "login":
        return <Login onLogin={handleLogin} />;

      case "main":
        return (
          <Main
            currentUser={currentUser}
            onProfileClick={() => navigateTo("profile")}
            onQuizClick={(quizId) => {
              setSelectedQuizId(quizId);
              navigateTo("quiz");
            }}
          />
        );

      case "profile":
        return (
          <Profile
            currentUser={currentUser}
            userId={userId}
            onLogout={handleLogout}
            onBack={() => navigateTo("main")}
          />
        );

      case "quiz":
        return (
          <Quiz
            currentUser={currentUser}
            userId={userId}
            quizId={selectedQuizId}
            onBackToMain={() => navigateTo("main")}
          />
        );

      default:
        return <Login onLogin={handleLogin} />;
    }
  };

  return <div className="app">{renderPage()}</div>;
};

export default App;
