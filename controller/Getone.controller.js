const taskdb = require("../models/Task.model");

const getOne = async (req, res) => {
  const { id } = req.params;
  const getone = await taskdb.findById(id);
  res.status(200).send(getone);
};
module.exports = getOne;
