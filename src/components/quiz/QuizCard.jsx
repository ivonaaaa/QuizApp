import React from 'react';
import "/src/App.css";

const QuizCard = ({ question, answers, onAnswer }) => {
  return (
    <div className="quiz-card">
      <h3>{question}</h3>
      {answers.map((answer) => (
        <button key={answer.id} onClick={() => onAnswer(answer.id)}>
          {answer.text}
        </button>
      ))}
    </div>
  );
};

export default QuizCard;