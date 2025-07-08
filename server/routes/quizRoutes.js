const express = require("express");
const router = express.Router();
const { Quiz } = require("../models/Schema");
const { verifyToken } = require("../middleware/middleware");

router.get("/", verifyToken, async (req, res) => {
  try {
    const quizzes = await Quiz.find();
    res.status(200).json(quizzes);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

module.exports = router;
