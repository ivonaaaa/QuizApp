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
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedAnswerId, setSelectedAnswerId] = useState(null);
  const [isAnswerCorrect, setIsAnswerCorrect] = useState(null);

  const [score, setScore] = useState(0);
  const [showSummary, setShowSummary] = useState(false);
  const [userAnswers, setUserAnswers] = useState([]);
  const [quizResult, setQuizResult] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
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
      } catch (err) {
        console.error("Failed to load questions:", err);
      }
    };

    fetchData();
  }, [quizId]);

  const handleAnswer = async (answerId) => {
    if (selectedAnswerId) return;

    const currentQuestion = questions[currentQuestionIndex];
    const selectedAnswer = currentQuestion.answers.find(
      (a) => a._id === answerId
    );
    const isCorrect = selectedAnswer?.isCorrect;

    setSelectedAnswerId(answerId);
    setIsAnswerCorrect(isCorrect);

    const userAnswer = {
      questionId: currentQuestion._id,
      answerText: selectedAnswer?.answerText,
      answerId: answerId,
      isCorrect: isCorrect,
    };
    const updatedUserAnswers = [...userAnswers, userAnswer];
    setUserAnswers(updatedUserAnswers);

    if (isCorrect) setScore((score) => score + 1);

    setTimeout(async () => {
      setSelectedAnswerId(null);
      setIsAnswerCorrect(null);

      if (currentQuestionIndex < questions.length - 1)
        setCurrentQuestionIndex((prev) => prev + 1);
      else {
        await submitQuizAnswers(userId, quizId, updatedUserAnswers);
        setShowSummary(true);
      }
    }, 1000);
  };

  const submitQuizAnswers = async (userId, quizId, finalUserAnswers) => {
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
    }
  };

  const handleRestart = () => {
    setCurrentQuestionIndex(0);
    setScore(0);
    setShowSummary(false);
    setUserAnswers([]);
    setQuizResult(null);
  };

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
                  width: `${(currentQuestionIndex / questions.length) * 100}%`,
                }}
              />
            </div>
          </div>

          <QuizCard
            question={questions[currentQuestionIndex].questionText}
            answers={questions[currentQuestionIndex].answers}
            onAnswer={handleAnswer}
            selectedAnswerId={selectedAnswerId}
            isAnswerCorrect={isAnswerCorrect}
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
