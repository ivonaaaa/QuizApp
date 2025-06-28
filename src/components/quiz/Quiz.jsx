import { useState, useEffect } from "react";
import QuizCard from "./QuizCard";
import ResultSummary from "./ResultSummary";
import Button from "../common/Button";
import { GetQuestionsByQuizId } from "../../api/questionApi";
import { GetAnswersByQuestionId } from "../../api/answerApi";
import { SubmitQuizAnswers } from "../../api/answerApi";
import "/src/components/quiz/Quiz.css";

const Quiz = ({ onBackToMain, userId, quizId }) => {
  const [questions, setQuestions] = useState([]);
  const [loading, setLoading] = useState(true);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [showSummary, setShowSummary] = useState(false);
  const [userAnswers, setUserAnswers] = useState([]);
  const [submitting, setSubmitting] = useState(false);
  const [quizResult, setQuizResult] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      if (!quizId) {
        setLoading(false);
        return;
      }

      try {
        const questionsData = await GetQuestionsByQuizId(quizId);
        const questionsWithAnswers = await Promise.all(
          questionsData.map(async (question) => {
            const answers = await GetAnswersByQuestionId(question._id).catch(
              () => []
            );
            return { ...question, answers };
          })
        );

        setQuestions(questionsWithAnswers);
        setLoading(false);
      } catch (err) {
        console.error("Failed to load questions:", err);
        setLoading(false);
      }
    };

    fetchData();
  }, [quizId]);

  const handleAnswer = async (answerId) => {
    const currentQuestion = questions[currentQuestionIndex];
    const selectedAnswer = currentQuestion.answers.find(
      (a) => a._id === answerId
    );
    const isCorrect = selectedAnswer?.isCorrect;

    const userAnswer = {
      questionId: currentQuestion._id,
      answerText: selectedAnswer?.answerText,
      answerId: answerId,
      isCorrect: isCorrect,
    };
    const updatedUserAnswers = [...userAnswers, userAnswer];
    setUserAnswers(updatedUserAnswers);

    if (isCorrect) setScore((prev) => prev + 1);
    if (currentQuestionIndex < questions.length - 1)
      setCurrentQuestionIndex((prev) => prev + 1);
    else {
      await submitQuizAnswers(userId, quizId, updatedUserAnswers);
      setShowSummary(true);
    }
  };

  const submitQuizAnswers = async (userId, quizId, finalUserAnswers) => {
    setSubmitting(true);
    try {
      const formattedAnswers = finalUserAnswers.map((answer) => ({
        questionId: answer.questionId,
        answerText: answer.answerText,
      }));
      const result = await SubmitQuizAnswers(userId, quizId, formattedAnswers);
      setQuizResult(result);

      if (result.result && result.result.score !== undefined)
        setScore(result.result.correctAnswers);
    } catch (err) {
      console.error("Error submitting quiz:", err);
      alert("Failed to submit quiz");
    } finally {
      setSubmitting(false);
    }
  };

  const handleRestart = () => {
    setCurrentQuestionIndex(0);
    setScore(0);
    setShowSummary(false);
    setUserAnswers([]);
    setQuizResult(null);
  };

  if (loading) {
    return (
      <div className="quiz-page">
        <Button
          label="Back to Homepage"
          onClick={onBackToMain}
          className="back-button"
        />
        <p>Loading questions...</p>
      </div>
    );
  }

  if (questions.length === 0) {
    return (
      <div className="quiz-page">
        <p>No questions available for this quiz.</p>
      </div>
    );
  }

  return (
    <div className="quiz-page">
      <Button
        label="Back to Homepage"
        onClick={onBackToMain}
        className="back-button"
      />

      {submitting && <p>Submitting your answers...</p>}

      {!showSummary ? (
        <div>
          <div className="quiz-progress">
            <p>
              Question {currentQuestionIndex + 1} of {questions.length}
            </p>
            <div className="progress-bar">
              <div
                className="progress-fill"
                style={{
                  width: `${
                    ((currentQuestionIndex + 1) / questions.length) * 100
                  }%`,
                }}
              />
            </div>
          </div>

          <QuizCard
            question={questions[currentQuestionIndex].questionText}
            answers={questions[currentQuestionIndex].answers}
            onAnswer={handleAnswer}
            disabled={submitting}
          />
        </div>
      ) : (
        <ResultSummary
          score={score}
          total={questions.length}
          onRestart={handleRestart}
          quizResult={quizResult}
          percentageScore={quizResult?.result?.score}
        />
      )}
    </div>
  );
};

export default Quiz;
