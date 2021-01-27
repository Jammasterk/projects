const express= require('express')
const taskRouter = express.Router()
const { v4: uuidv4 } = require("uuid");

const tasks = [
  {
    todo: "Start Scrum board project",
    _id: uuidv4(),
  },
];

taskRouter.get("/:taskId", (req, res) => {
  const taskId = req.params.taskId
  const foundTask = tasks.find(task => task._id === taskId)
  res.send(foundTask)
})

taskRouter.get("/", (req, res) => {
  res.send(tasks);
});

taskRouter.post("/", (req, res) => {
  const newTask = req.body;
  newTask._id = uuidv4()
  tasks.push(newTask);
  res.send(newTask);
});

taskRouter.delete("/:taskId", (req, res) => {
  const taskId = req.params.taskId
  const taskIndex = tasks.findIndex(task => task._id === taskId)
  tasks.splice(taskIndex,1 )
  res.send(`Successfully removed ${taskIndex.todo} from database`)

})

taskRouter.put('/:taskId', (req, res) => {
  const taskId = req.params.taskId
  const updateObject = req.body
  const taskIndex = tasks.findIndex(task => task._id === taskId)
  const updatedTask = Object.assign(tasks[taskIndex], updateObject)
  res.send(updatedTask)
})

module.exports = taskRouter