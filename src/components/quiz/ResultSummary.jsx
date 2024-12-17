import React from 'react';

const ResultSummary = ({ score, total, onRestart }) => {
  return (
    <div className="result-summary">
      <h3>Your Score: {score}/{total}</h3>
      <button onClick={onRestart}>Restart Quiz</button>
    </div>
  );
};

export default ResultSummary;