const express= require('express')
const taskRouter = express.Router()
const Task = require('../models/task')

// get all

taskRouter.get("/", (req, res, next) => {
  Task.find((err, tasks) => {
      if(err){
        res.status(500)
        return next(err)
      }
      return res.status(200).send(tasks)
  })
})

taskRouter.get("/", (req, res) => {
  res.send(tasks);
});

taskRouter.post("/", (req, res, next) => {
  const newTask = new Task(req.body)
  newTask.save((err, savedTask) => {
    if(err){
      res.status(500)
      return next(err)
    }
    return res.status(200).send(savedTask)
  })
});

taskRouter.put("/:taskId", (req, res, next) => {
  Task.findOneAndUpdate(
    { _id: req.params.taskId },
    req.body,
    { new: true },
    (err, updatedTask) => {
      if (err) {
        res.status(500);
        return next(err);
      }
      return res.status(200).send(updatedTask);
    }
  );
});

taskRouter.delete("/:taskId", (req, res, next) => {
  Task.findOneAndDelete({_id: req.params.taskId},(err, deletedTask) => {
    if(err){
      res.status(500)
      return next(err)
    }
    return res.status(200).send(`Successfully deleted ${deletedTask.todo}`)
  })
})

module.exports = taskRouter