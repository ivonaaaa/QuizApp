const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const { use } = require("react");

const app = express();
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

mongoose.connect(
  "mongodb://localhost:27017/QuizAppDB",
  { family: 4 },
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  }
);

const database = mongoose.connection;

database.on("error", (error) => {
  console.error("Error with connectiong:", error);
});
database.once("open", function () {
  console.log("Connected to the database!");
});

const { Schema } = mongoose;

const userSchema = new Schema({
  email: { type: String, required: true },
  password: { type: String, required: true },
  username: String,
});
const User = mongoose.model("User", userSchema);

app.post("/users", async (req, res) => {
  const newUser = new User({
    email: req.body.email,
    password: req.body.password,
    username: req.body.email.split("@")[0],
  });
  try {
    const savedUser = await newUser.save();
    res.status(201).json(savedUser);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

//
//
//
//
//
app.get("/", (req, res) => {
  res.send("Hi from the Express server! :D");
});

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server listens to requests on port ${PORT}.`);
});
