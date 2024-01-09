const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const dotenv = require("dotenv");
const cors = require("cors");
dotenv.config();
/*
A. Users can create book entries by submitting the book name.
B. All users can view a list of all books, displaying both the book name and the
creator's username.
C. Implement functionality for users to 'favorite' books created by other users.
D. Users cannot favorite their own books or the same book more than once.
E. Users can view a list of their favorite books, showing the book name and
creator's username.
*/

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

  app.use(errorHandler);
};

main();
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
