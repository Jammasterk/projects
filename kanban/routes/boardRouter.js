const express = require('express')
const boardRouter = express.Router()
const Board = require("../models/board")

boardRouter.get('/', (req, res, next) => {
    Board.find((err, boards) => {
        if(err){
            res.status(500)
            return next(err)
        }
        return res.status(200).send(boards)
    })
})

boardRouter.get('/user', (req, res, next) => {
    Board.find({user: req.user._id}, (err, boards) => {
        if(err){
            res.status(500)
            return next(err)
        }
        return res.status(200).send(boards)
    })
})

boardRouter.post("/", (req, res, next) => {
    req.body.user = req.user._id
    const newBoard = new Board(req.body)
    newBoard.save((err, savedBoard) => {
        if(err){
            res.status(500)
            return next(err)
        }
        return res.status(200).send(savedBoard)
    })
})

boardRouter.put("/:boardId", (req, res,next) => {
    Board.findOneAndUpdate({_id: req.params.boardId, user: req.user._id},
    req.body,
    {new: true},
    (err, updatedBoard) => {
        if(err){
            res.status(500)
            return next(err)
        }

        return res.status(200).send(`Successfully updated ${updatedBoard.boardName}`)
    })
})


boardRouter.delete("/:boardId", (req, res, next) => {
    Board.findOneAndDelete(
        {_id: req.params.boardId, user: req.user._id},
        (err, deletedBoard) => {
            if(err){
                res.status(400)
                return next(err)
            }
            return res.status(200).send(`Successfully deleted ${deletedBoard.boardName}`)
        }
    )
})

module.exports = boardRouter