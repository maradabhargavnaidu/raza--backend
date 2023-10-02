const taskdb = require("../models/Task.model");

const addTask = async (req, res) => {
  const { title, description } = req.body;
  console.log(req.body);
  try {
    const TaskList = new taskdb({
      title,
      description,
    });
    const task = await TaskList.save().then(() =>
      res.status(200).send({ data: "Task added Successfully!!" })
    );
  } catch (err) {
    res.status(500).send(err);
  }
};
module.exports = addTask;
