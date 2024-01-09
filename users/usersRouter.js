const express = require("express");

const { getUsers, createUser } = require("./usersController");

const errorRouter = require("../utils/errorRouter");
const errorHandler = require("../errorHandler");
const usersRouter = express.Router();

usersRouter.get("/", errorRouter(getUsers));
usersRouter.post("/create", errorRouter(createUser));
usersRouter.use(errorHandler);

module.exports = usersRouter;
