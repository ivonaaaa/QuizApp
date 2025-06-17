const mongoose = require("mongoose");

const connectToDatabase = async () => {
  mongoose.connect(process.env.MONGO_URL, {
    family: 4,
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });

  const database = mongoose.connection;

  database.on("error", (error) => {
    console.error("Error with connectiong:", error);
  });
  database.once("open", function () {
    console.log("Connected to the database!");
  });
};

module.exports = connectToDatabase;
