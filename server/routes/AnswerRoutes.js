const express = require("express");
const router = express.Router();
const { Answer } = require("../models/Schema");

router.get("/", async (req, res) => {
  try {
    const answers = await Answer.find();
    res.status(200).json(answers);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

router.get("/id:", async (req, res) => {
  const answerId = req.params.id;
  try {
    const answer = await Answer.findById(answerId);
    if (!answer) return res.status(404).json({ message: "Answer not found" });
    res.status(200).json(answer);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// router.post("/", async (req, res) => {
//   //logika za slanje odgovora kako bi mogli dobit rezultate
// });

module.exports = router;
