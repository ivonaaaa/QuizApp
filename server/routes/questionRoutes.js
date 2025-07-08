const express = require("express");
const router = express.Router();
const { Question } = require("../models/Schema");
const { verifyToken } = require("../middleware/middleware");

router.get("/byQuiz/:quizId", verifyToken, async (req, res) => {
  const quizId = req.params.quizId;
  try {
    const questions = await Question.find({ QuizId: quizId });
    res.status(200).json(questions);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

module.exports = router;
