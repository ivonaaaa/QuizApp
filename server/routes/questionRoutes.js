const express = require("express");
const router = express.Router();
const { Question } = require("../models/Schema");

router.get("/", async (req, res) => {
  try {
    const questions = await Question.find();
    res.status(200).json(questions);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

router.get("/:id", async (req, res) => {
  const questionId = req.params.id;
  try {
    const question = await Question.findById(questionId);
    if (!question)
      return res.status(404).json({ message: "Question not found" });
    res.status(200).json(question);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

router.get("/byQuiz/:quizId", async (req, res) => {
  const quizId = req.params.quizId;
  try {
    const questions = await Question.find({ QuizId: quizId });
    res.status(200).json(questions);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

module.exports = router;
