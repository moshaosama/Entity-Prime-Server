const express = require("express");
const toDoController = require("../Controllers/toDoControllers");
const toDoRouter = express.Router();

toDoRouter
  .route("/")
  .post(toDoController.createToDo)
  .get(toDoController.getTodo);

module.exports = { toDoRouter };
