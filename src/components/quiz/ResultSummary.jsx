import Button from "../common/Button";

const ResultSummary = ({
  score,
  total,
  onRestart,
  quizResult,
  percentageScore,
}) => {
  const displayScore = quizResult?.result?.correctAnswers ?? score;
  const displayPercentage =
    percentageScore ?? Math.round((score / total) * 100);

  return (
    <div className="result-summary">
      <img
        src="../../../images/game_over.png"
        alt="Game over image"
        className="game-over"
      />

      <div className="score-display">
        <div className="score-circle">
          <span>{displayPercentage}%</span>
        </div>

        <p className="score-text">
          You got <strong>{displayScore}</strong> out of{" "}
          <strong>{total}</strong> questions correct
        </p>
      </div>

      <Button
        label="Take Quiz Again"
        onClick={onRestart}
        className="restart-button"
      />
    </div>
  );
};

export default ResultSummary;
