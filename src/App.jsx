import React, { useState } from "react";
import Login from "./components/login/Login";
import Main from "./components/main/Main";
import Profile from "./components/profile/Profile";
import Quiz from "./components/quiz/Quiz";
import "/src/App.css";

const App = () => {
  const [currentPage, setCurrentPage] = useState("login");

  const navigateTo = (page) => {
    setCurrentPage(page);
  };

  const renderPage = () => {
    switch (currentPage) {
      case "login":
        return <Login onLogin={() => navigateTo("main")} />;
      case "main":
        return (
          <Main
            onProfileClick={() => navigateTo("profile")}
            onQuizClick={() => navigateTo("quiz")}
          />
        );
      case "profile":
        return <Profile onLogout={() => navigateTo("login")} onBack={() => navigateTo("main")} />;
      case "quiz":
        return <Quiz onBack={() => navigateTo("main")} />;
      default:
        return <Login onLogin={() => navigateTo("main")} />;
    }
  };

  return <div className="app">{renderPage()}</div>;
};

export default App;