const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const dotenv = require("dotenv");
const cors = require("cors");
dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;
app.use(bodyParser.json());
app.use(express.json());
app.use(cors());

const main = async () => {
  const booksRouter = require("./books/booksRouter");
  const { connectDatabase } = require("./database/database");
  const errorHandler = require("./errorHandler").default;

  app.use("/books", booksRouter);
  await connectDatabase();
};

main();
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
