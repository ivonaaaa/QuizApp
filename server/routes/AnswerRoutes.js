const express = require("express");
const router = express.Router();
const { Question } = require("../models/Schema");
const { Answer } = require("../models/Schema");
const { Result } = require("../models/Schema");

router.get("/", async (req, res) => {
  try {
    const answers = await Answer.find();
    res.status(200).json(answers);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

router.get("/:id", async (req, res) => {
  const answerId = req.params.id;
  try {
    const answer = await Answer.findById(answerId);
    if (!answer) return res.status(404).json({ message: "Answer not found" });
    res.status(200).json(answer);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

router.get("/byQuestion/:questionId", async (req, res) => {
  try {
    const answers = await Answer.find({ QuestionId: req.params.questionId });
    res.status(200).json(answers);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

router.post("/submit", async (req, res) => {
  try {
    const { userId, quizId, userAnswers } = req.body;
    if (!userId || !quizId || !userAnswers || !Array.isArray(userAnswers))
      return res.status(400).json({ message: "Missing required fields" });

    const questions = await Question.find({ QuizId: quizId });
    if (questions.length === 0)
      return res.status(404).json({ message: "No questions found for quiz" });

    const questionIds = questions.map((q) => q._id.toString());

    const correctAnswers = await Answer.find({
      QuestionId: { $in: questionIds },
    });
    if (correctAnswers.length === 0)
      return res.status(404).json({ message: "No correct answers found" });

    const correctAnswerMap = new Map();
    correctAnswers.forEach((answer) => {
      if (answer.isCorrect) {
        correctAnswerMap.set(answer.QuestionId.toString(), answer.answerText);
      }
    });

    let score = 0;
    const totalQuestions = questions.length;

    userAnswers.forEach((userAnswer) => {
      const questionId = userAnswer.questionId;
      const userAnswerText = userAnswer.answerText;
      const correctAnswer = correctAnswerMap.get(questionId);
      if (correctAnswer === userAnswerText) score++;
    });

    const percentageScore = Math.round((score / totalQuestions) * 100);

    const existingResult = await Result.findOne({
      UserId: userId,
      QuizId: quizId,
    });

    let result;
    if (existingResult) {
      existingResult.Score = percentageScore;
      result = await existingResult.save();
    } else {
      result = new Result({
        UserId: userId,
        QuizId: quizId,
        Score: percentageScore,
      });
      result = await result.save();
    }

    res.status(201).json({
      message: "Quiz submitted successfully",
      result: {
        score: percentageScore,
        correctAnswers: score,
        totalQuestions: totalQuestions,
        resultId: result._id,
      },
    });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

module.exports = router;
