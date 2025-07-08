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

module.exports = router;
