const taskdb = require("../models/Task.model");

const UpdateTask = async (req, res) => {
  const { title, description } = req.body;
  const { id } = req.params;
  console.log(id);
  try {
    const updateTask = await taskdb
      .findByIdAndUpdate(id, {
        title,
        description,
      })
      .then((result) => res.send(result));
  } catch (err) {
    console.log(err);
  }
};
module.exports = UpdateTask;
