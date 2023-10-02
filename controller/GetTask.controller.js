const taskdb = require("../models/Task.model");

const GetTask = async (req, res) => {
  try {
    const Tasks = await taskdb.find();
    res.status(200).send(Tasks);
  } catch (err) {
    res.status(500).send(err);
  }
};

module.exports = GetTask;
