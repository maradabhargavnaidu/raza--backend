const { Schema, model } = require("mongoose");
const TaskSchema = new Schema({
  title: String,
  description: String,
});

const Taskdb = model("Task", TaskSchema);
module.exports = Taskdb;
