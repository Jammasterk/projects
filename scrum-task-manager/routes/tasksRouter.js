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

// get by user

taskRouter.get("/user", (req, res, next) => {
  Task.find({user: req.user._id}, (err, tasks) => {
    if(err){
      res.status(500)
      return next(err)
    }
    res.status(200).send(tasks)
  })
})

taskRouter.post("/", (req, res, next) => {
  req.body.user = req.user._id
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
    { _id: req.params.taskId, user: req.user._id },
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
  Task.findOneAndDelete({_id: req.params.taskId, user: req.user._id},(err, deletedTask) => {
    if(err){
      res.status(500)
      return next(err)
    }
    return res.status(200).send(`Successfully deleted ${deletedTask.todo}`)
  })
})

module.exports = taskRouter