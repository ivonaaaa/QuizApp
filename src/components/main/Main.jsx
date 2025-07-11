import { useEffect, useState } from "react";
import ProfileIcon from "../common/ProfileIcon";
import QuizBox from "./QuizBox";
import Header from "../common/Header";
import Logo from "../common/Logo";
import { GetAllQuizzes } from "../../api/quizApi";
import "/src/components/main/Main.css";

const Main = ({ currentUser, onProfileClick, onQuizClick }) => {
  const [quizzes, setQuizzes] = useState([]);
  const userName =
    currentUser.email.split("@")[0].charAt(0).toUpperCase() +
    currentUser.email.split("@")[0].slice(1);
  const title = "Welcome to Gaming Quiz App, " + userName + "!";

  useEffect(() => {
    const fetchQuizzes = async () => {
      try {
        const data = await GetAllQuizzes();
        setQuizzes(data);
      } catch (err) {
        console.error("Failed to fetch quizzes:", err);
      }
    };
    fetchQuizzes();
  }, []);

  return (
    <div className="main-page">
      <img
        src="../../../images/orange.png"
        alt="joystick"
        className="sticker"
      ></img>
      <img
        src="../../../images/stick.png"
        alt="stick"
        className="sticker"
        id="stick"
      ></img>
      <Header
        title={title}
        image="/header-image.jpg"
        text="Choose a quiz and test your knowledge on gaming industry."
      />
      <Logo />
      <ProfileIcon onClick={onProfileClick} />
      <div className="quizzes-container">
        {quizzes.map((quiz) => (
          <QuizBox
            key={quiz._id}
            title={quiz.title}
            description={quiz.description}
            onSelect={() => onQuizClick(quiz._id)}
          />
        ))}
      </div>
      <footer>
        <p>
          © 2025 Gaming Quiz App. All rights reserved. Designed and built by
          Ivona Ercegovac as a part of{" "}
          <a href="https://www.pmfst.unist.hr/" target="_blank">
            Faculty of Science in Split
          </a>{" "}
          project.
        </p>
      </footer>
    </div>
  );
};

export default Main;
