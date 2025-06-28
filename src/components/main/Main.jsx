import { useEffect, useState } from "react";
import ProfileIcon from "../common/ProfileIcon";
import QuizBox from "./QuizBox";
import Header from "../common/Header";
import Logo from "../common/Logo";
import { GetAllQuizzes } from "../../api/quizApi";
import "/src/components/main/Main.css";

const Main = ({ onProfileClick, onQuizClick }) => {
  const [quizzes, setQuizzes] = useState([]);

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
        title="Welcome to Gaming Quiz App!"
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
    </div>
  );
};

export default Main;
