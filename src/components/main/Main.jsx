import React from "react";
import ProfileIcon from "../common/ProfileIcon";
import QuizBox from "./QuizBox";
import Header from "../common/Header";
import Logo from "../common/Logo";
import "/src/App.css";

const Main = ({ onProfileClick, onQuizClick }) => {
  return (
    <div className="main-page">
      <Header title="Welcome to Gaming Quiz App!" image="/header-image.jpg" />
      <Logo />
      <ProfileIcon onClick={onProfileClick} />
      <QuizBox
        themeName="Game Knowledge"
        description="Test your gaming knowledge"
        onSelect={onQuizClick}
      />
    </div>
  );
};

export default Main;