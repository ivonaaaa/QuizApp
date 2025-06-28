import "/src/App.css";

const QuizCard = ({ question, answers, onAnswer }) => {
  return (
    <div className="quiz-card">
      <h3>{question}</h3>
      {answers.map((answer) => (
        <button key={answer._id} onClick={() => onAnswer(answer._id)}>
          {answer.answerText}
        </button>
      ))}
    </div>
  );
};

export default QuizCard;
