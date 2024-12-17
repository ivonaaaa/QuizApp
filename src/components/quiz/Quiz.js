import React, { useState } from 'react';
import QuizCard from '../quiz/QuizCard';
import ResultSummary from '../quiz/ResultSummary';
import Button from '../common/Button';

const Quiz = ({ questions, onBackToMain }) => {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [showSummary, setShowSummary] = useState(false);

  const handleAnswer = (isCorrect) => {
    if (isCorrect) setScore((prev) => prev + 1);

    if (currentQuestionIndex < questions.length - 1) {
      setCurrentQuestionIndex((prev) => prev + 1);
    } else {
      setShowSummary(true);
    }
  };

  return (
    <div className="quiz-page">
      <Button label="Back" onClick={onBackToMain} className="back-button" />
      {!showSummary ? (
        <QuizCard
          question={questions[currentQuestionIndex].text}
          answers={questions[currentQuestionIndex].answers}
          onAnswer={handleAnswer}
        />
      ) : (
        <ResultSummary
          score={score}
          total={questions.length}
          onRestart={() => {
            setCurrentQuestionIndex(0);
            setScore(0);
            setShowSummary(false);
          }}
        />
      )}
    </div>
  );
};

export default Quiz;