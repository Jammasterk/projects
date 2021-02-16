const express = require("express")
const todoRouter = express.Router()
const Todo = require("../models/todo")

todoRouter.get('/user', (req, res, next) => {
    Todo.find((err, todos) => {
        if(err){
            res.status(500)
            return next(err)
        }
        return res.status(201).send(todos)
    })
})

todoRouter.post('/', (req, res, next) => {
    res.body.user = req.user._id
    const newTodo = new Todo(req.body)
    newTodo.save((err, savedTodo) => {
        if(err){
            res.status(500)
            return next(err)
            
        }
    })
})