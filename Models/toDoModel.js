const mongoose = require("mongoose");

const toDoSchema = mongoose.Schema({
  title: {
    type: String,
    required: [true, "Please Enter Your Title"],
  },
});

const ToDo = mongoose.model("ToDo", toDoSchema);

module.exports = { ToDo };
