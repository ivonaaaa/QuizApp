require("dotenv").config();

const connectToDatabase = require("./config/database");
connectToDatabase();

const express = require("express");
const cors = require("cors");
const infoMid = require("./error/middleware");

const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(infoMid);

const userRoutes = require("./routes/userRoutes");
const quizRoutes = require("./routes/quizRoutes");
const questionRoutes = require("./routes/questionRoutes");
const answerRoutes = require("./routes/answerRoutes");
const resultRoutes = require("./routes/resultRoutes");

app.use("/users", userRoutes);
app.use("/quizzes", quizRoutes);
app.use("/questions", questionRoutes);
app.use("/answers", answerRoutes);
app.use("/results", resultRoutes);

const PORT = process.env.PORT;
app.listen(PORT, () => {
  console.log(`Server listens to requests on port ${PORT}.`);
});
