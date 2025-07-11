const express = require("express");
const router = express.Router();
const { Result } = require("../models/Schema");
const { verifyToken } = require("../middleware/middleware");

router.get("/user/:userId", verifyToken, async (req, res) => {
  try {
    const results = await Result.find({ UserId: req.params.userId }).populate(
      "QuizId"
    );
    res.status(200).json(results);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

module.exports = router;
