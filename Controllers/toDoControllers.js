const { ToDo } = require("../Models/toDoModel");

exports.createToDo = async (req, res) => {
  const toDo = new ToDo({
    title: req.body.title,
  });
  if (!req.body) {
    res.status(404).json({
      statusbar: "error",
      message: "Please enter a title",
    });
  }
  await toDo.save();

  res.status(200).json({
    statusbar: "success",
    message: "Success",
  });
};

exports.getTodo = async (req, res) => {
  const toDo = await ToDo.find();

  res.status(200).json({
    statusbar: "success",
    results: toDo.length,
    data: toDo,
  });
};
