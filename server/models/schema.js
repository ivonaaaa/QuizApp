const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  username: { type: String, required: true, unique: true },
  createdAt: { type: Date, default: Date.now },
});
const User = mongoose.model("User", userSchema);

const quizSchema = new mongoose.Schema({
  title: { type: String, required: true, unique: true },
  description: { type: String, required: true },
});
const Quiz = mongoose.model("Quiz", quizSchema);

const questionSchema = new mongoose.Schema({
  questionText: { type: String, required: true },
  QuizId: { type: mongoose.Schema.Types.ObjectId, ref: "Quiz", required: true },
});
const Question = mongoose.model("Question", questionSchema);

const answerSchema = new mongoose.Schema({
  answerText: { type: String, required: true },
  isCorrect: { type: Boolean, required: true },
  QuestionId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Question",
    required: true,
  },
});
const Answer = mongoose.model("Answer", answerSchema);

const resultSchema = new mongoose.Schema({
  Score: { type: Number, required: true },
  UserId: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
  QuizId: { type: mongoose.Schema.Types.ObjectId, ref: "Quiz", required: true },
});
const Result = mongoose.model("Result", resultSchema);

module.exports = {
  User,
  Quiz,
  Question,
  Answer,
  Result,
};
