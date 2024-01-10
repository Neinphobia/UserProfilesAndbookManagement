const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const dotenv = require("dotenv");
const cors = require("cors");
const jwt = require("jsonwebtoken");

const usersRouter = require("./users/usersRouter");
const booksRouter = require("./books/booksRouter");
const { connectDatabase } = require("./database/database");
const errorHandler = require("./errorHandler");
const authRoutes = require("./auth/auth");
dotenv.config();
/*
1s
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
const User = require("./models/userModel");
const secret = process.env.SECRET_KEY;
const main = async () => {
  await connectDatabase(); //first need to connect.

  //auth middleware first:
  app.use(async (req, res, next) => {
    const excludedPaths = [
      "/auth/register",
      "/auth/login",
      "/books/",
      "/books",
    ];

    if (excludedPaths.includes(req.path)) {
      return next();
    }

    const token = req.headers.authorization;

    if (!token) {
      console.log("no token");
      return res.status(401).json({ message: "Unauthorized" });
    }

    try {
      const decodedToken = jwt.verify(token.replace("Bearer ", ""), secret);

      // Assuming the user ID is present in the decoded token
      const user = await User.findById(decodedToken.userId);

      if (!user) {
        return res.status(401).json({ message: "Invalid user" });
      }

      req.user = user;
      next();
    } catch (error) {
      console.log(error);
      return res.status(401).json({ message: "Invalid token" });
    }
  });

  //

  app.use("/auth", authRoutes);
  app.use("/users", usersRouter);
  app.use("/books", booksRouter);

  app.use(errorHandler);
};

main();
//docker-compose up --build
//havent used this command
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
