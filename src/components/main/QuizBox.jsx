import Lottie from "lottie-react";
import sparkle from "../../../images/sparkle.json";
import "./Main.css";

const QuizBox = ({ title, description, onSelect }) => {
  return (
    <div className="quiz-box" onClick={onSelect}>
      <h2>{title}</h2>
      <p>{description}</p>
      <div className="sparkle-wrapper">
        <Lottie animationData={sparkle} loop={true} />
      </div>
    </div>
  );
};

export default QuizBox;
