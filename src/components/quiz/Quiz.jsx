import { useState, useEffect } from "react";
import QuizCard from "./QuizCard";
import ResultSummary from "./ResultSummary";
import Button from "../common/Button";
import { GetAllQuestions } from "../../api/questionApi";
import { GetAllAnswers } from "../../api/answerApi";
import "/src/components/quiz/Quiz.css";

const Quiz = ({ onBackToMain }) => {
  const [questions, setQuestions] = useState([]);
  const [loading, setLoading] = useState(true);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [showSummary, setShowSummary] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const [questionsData, answerData] = await Promise.all([
          GetAllQuestions(),
          GetAllAnswers(),
        ]);

        const questionsWithAnswers = questionsData.map((question) => ({
          ...question,
          answers: answerData.filter(
            (answer) => answer.QuestionId === question._id
          ),
        }));

        setQuestions(questionsWithAnswers);
        setLoading(false);
      } catch (err) {
        console.error("Failed to load questions:", err);
      }
    };
    fetchData();
  }, []);

  const handleAnswer = (isCorrect) => {
    if (isCorrect) setScore((prev) => prev + 1);

    if (currentQuestionIndex < questions.length - 1)
      setCurrentQuestionIndex((prev) => prev + 1);
    else setShowSummary(true);
  };

  return (
    <div className="quiz-page">
      <Button
        label="Back to Homepage"
        onClick={onBackToMain}
        className="back-button"
      />
      {loading ? (
        <p>Loading questions...</p>
      ) : !showSummary ? (
        <QuizCard
          question={questions[currentQuestionIndex].questionText}
          answers={questions[currentQuestionIndex].answers}
          onAnswer={(answerId) => {
            const isCorrect = questions[currentQuestionIndex].answers.find(
              (a) => a._id === answerId
            )?.isCorrect;

            handleAnswer(isCorrect);
          }}
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
