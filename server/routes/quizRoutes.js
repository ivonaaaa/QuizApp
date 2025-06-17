const express = require("express");
const router = express.Router();
const { Quiz } = require("../models/Schema");

router.get("/", async (req, res) => {
  try {
    const quizzes = await Quiz.find();
    res.status(200).json(quizzes);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

router.get("/id:", async (req, res) => {
  const quizId = req.params.id;
  try {
    const quiz = await User.findById(quizId);
    if (!quiz) return res.status(404).json({ message: "Quiz not found" });
    res.status(200).json(user);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

module.exports = router;
