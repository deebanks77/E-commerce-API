require("dotenv").config();
require("express-async-errors");
const express = require("express");
const app = express();

// morgan => http reqest logger, it helps with debugging
const morgan = require("morgan");

// database
const connectDB = require("./db/connect");

// middleware
const notFoundMiddleware = require("./middleware/not-found");
const errorHandlerMiddleware = require("./middleware/error-handler");
// const fullAuth = require("./middleware/full-auth");
// const authentication = require("./middleware/authentication");

app.use(morgan("tiny"));
app.use(express.json());

app.use("/", (req, res) => {
  res.send("Index.js");
});

app.use(notFoundMiddleware);
app.use(errorHandlerMiddleware);

const PORT = process.env.PORT || 5000;

const start = async () => {
  try {
    await connectDB(process.env.MONGO_URI);
    app.listen(PORT, () => {
      console.log(`server is running on port ${PORT}`);
    });
  } catch (error) {
    console.log(error);
  }
};

start();
