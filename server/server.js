const express = require("express");
const cors = require("cors");

require("dotenv").config();
const connectToDatabase = require("./config/database");
connectToDatabase();

//! zadnja predavanja???
//const router = express.Router();

const app = express();
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//! zahtjevi al ovo cu prebacit sve u routes
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

const PORT = process.env.PORT;
app.listen(PORT, () => {
  console.log(`Server listens to requests on port ${PORT}.`);
});
