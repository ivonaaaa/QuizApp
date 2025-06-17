require("dotenv").config();

const connectToDatabase = require("./config/database");
connectToDatabase();

const express = require("express");
const cors = require("cors");
const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//! endpointovi
const userRoutes = require("./routes/userRoutes");
app.use("/users", userRoutes);

const PORT = process.env.PORT;
app.listen(PORT, () => {
  console.log(`Server listens to requests on port ${PORT}.`);
});
