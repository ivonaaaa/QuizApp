const express = require("express");
const router = express.Router();
const { Result } = require("../models/Schema");

router.get("/", async (req, res) => {
  try {
    const results = await Result.find();
    res.status(200).json(results);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

router.get("/:id", async (req, res) => {
  const resultId = req.params.id;
  try {
    const result = await Result.findById(resultId);
    if (!result) return res.status(404).json({ message: "Result not found" });
    res.status(200).json(result);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

module.exports = router;
