const mongoose = require("mongoose");

const connectToDatabase = async () => {
  mongoose.connect("mongodb://localhost:27017/QuizAppDB", {
    family: 4,
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });

  database.on("error", (error) => {
    console.error("Error with connectiong:", error);
  });
  database.once("open", function () {
    console.log("Connected to the database!");
  });
};

module.exports = connectToDatabase;
