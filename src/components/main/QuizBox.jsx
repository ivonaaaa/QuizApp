import React from 'react';
import Button from '../common/Button';

const QuizBox = ({ themeName, description, onSelect }) => {
  return (
    <div className="quiz-box">
      <h2>{themeName}</h2>
      <p>{description}</p>
      <Button label="Start Quiz" onClick={onSelect} />
    </div>
  );
};

export default QuizBox;