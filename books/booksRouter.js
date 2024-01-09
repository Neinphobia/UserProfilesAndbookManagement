const express = require("express");

const { getBooks, createBook } = require("./booksController");
const errorRouter = require("../utils/errorRouter");
const errorHandler = require("../errorHandler");
const booksRouter = express.Router();

//nicer in nestJs but for this task i dont have much time to fully acknowledge typescript and nestJs

booksRouter.get("/", errorRouter(getBooks)); //Book listing
booksRouter.post("/create", errorRouter(createBook)); //book create
//favoriting book

booksRouter.use(errorHandler); //not sure if i wanna use this middleware here

// ● Usernames are immutable (cannot be changed post-registration). Means that i wil not implement put request
// ● Email addresses must be unique.
// ● Users can favorite a maximum of 10 books. Research.
// ● Document all API endpoints with request and response examples.Ideally wanna use swagger

module.exports = booksRouter;
