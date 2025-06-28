import "/src/App.css";

const QuizCard = ({ question, answers, onAnswer, disabled = false }) => {
  return (
    <div className="quiz-card">
      <h3 className="quiz-question">{question}</h3>
      <div className="answers-container">
        {answers.map((answer) => (
          <button
            key={answer._id}
            onClick={() => onAnswer(answer._id)}
            disabled={disabled}
            className="answer-button"
          >
            {answer.answerText}
          </button>
        ))}
      </div>
    </div>
  );
};

export default QuizCard;
