import "/src/App.css";

const QuizCard = ({
  question,
  answers,
  onAnswer,
  selectedAnswerId,
  isAnswerCorrect,
}) => {
  return (
    <div className="quiz-card">
      <h3 className="quiz-question">{question}</h3>
      <div className="answers-container">
        {answers.map((answer) => {
          let className = "";
          if (selectedAnswerId === answer._id)
            className = isAnswerCorrect ? " correct" : " incorrect";

          return (
            <button
              key={answer._id}
              onClick={() => onAnswer(answer._id)}
              className={`answer-button ${className}`}
            >
              {answer.answerText}
            </button>
          );
        })}
      </div>
    </div>
  );
};

export default QuizCard;
