import { useState, useEffect } from "react";
import Auth from "./components/auth/auth";
import Main from "./components/main/Main";
import Profile from "./components/profile/Profile";
import Quiz from "./components/quiz/Quiz";
import "/src/App.css";

const App = () => {
  const [currentPage, setCurrentPage] = useState("login");
  const [selectedQuizId, setSelectedQuizId] = useState(null);
  const [currentUser, setCurrentUser] = useState(null);

  useEffect(() => {
    const savedUser = localStorage.getItem("currentUser");
    if (savedUser) {
      const parsedUser = JSON.parse(savedUser);
      setCurrentUser(parsedUser);
      setCurrentPage("main");
    } else setCurrentPage("login");
  }, []);

  const navigateTo = (page) => {
    setCurrentPage(page);
  };

  const handleLogin = (userData) => {
    setCurrentUser(userData.user);
    localStorage.setItem("currentUser", JSON.stringify(userData.user));
    navigateTo("main");
  };

  const handleLogout = () => {
    setCurrentUser(null);
    setSelectedQuizId(null);
    localStorage.removeItem("currentUser");
    navigateTo("login");
  };

  const renderPage = () => {
    switch (currentPage) {
      case "login":
        return <Auth onLogin={handleLogin} />;

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
            onLogout={handleLogout}
            onBack={() => navigateTo("main")}
          />
        );

      case "quiz":
        return (
          <Quiz
            currentUser={currentUser}
            quizId={selectedQuizId}
            onBackToMain={() => navigateTo("main")}
          />
        );

      default:
        return <Auth onLogin={handleLogin} />;
    }
  };

  return <div className="app">{renderPage()}</div>;
};

export default App;
