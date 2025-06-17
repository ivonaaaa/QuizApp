import Button from "../common/Button";
import "/src/App.css";

const QuizBox = ({ title, description, onSelect }) => {
  return (
    <div className="quiz-box">
      <h2>{title}</h2>
      <p>{description}</p>
      <Button label="Start" onClick={onSelect} />
    </div>
  );
};

export default QuizBox;
