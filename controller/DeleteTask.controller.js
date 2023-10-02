const taskdb = require("../models/Task.model");

const DeleteTask = async (req, res) => {
  const { id } = req.body;
  try {
    const deleteuser = await taskdb.findByIdAndDelete(id);
    res.status(200).send("deleted Successfully");
  } catch (err) {
    console.log(err);
  }
};
module.exports = DeleteTask;
