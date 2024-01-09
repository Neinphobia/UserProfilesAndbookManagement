const express = require("express");

const { getBooks, createBook } = require("./booksController");

const booksRouter = express.Router();

booksRouter.get("/", getBooks);
booksRouter.post("/", createBook);
module.exports = booksRouter;
