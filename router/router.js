const { Router } = require("express");
const router = Router();

const addTask = require("../controller/AddTask.controller");
const getTask = require("../controller/GetTask.controller");
const DeleteTask = require("../controller/DeleteTask.controller");
const getOne = require("../controller/Getone.controller");
const UpdateTask = require("../controller/UpdateTask.controller");
//MAIN ROUTE
router.get("/", (req, res) => res.send("Server Running Successfully !"));

//GET ALL TASKS
router.get("/alltasks", getTask);

//ADD TASK
router.post("/addtask", addTask);
//DELETE TASK
router.post("/deletetask", DeleteTask);
//GETONE
router.get("/getone/:id", getOne);

router.post("/update/:id", UpdateTask);
module.exports = router;
