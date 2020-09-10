const express = require('express')
const liquorRouter = express.Router()
const uuid = require("uuid").v4;

const liquors = [
  { brand: "1892", type: "Tequila", notes: "", _id: uuid() },
  { brand: "Svedka", type: "Vodka", notes: "", _id: uuid() },
  { brand: "Jim beam", type: "Whisky", notes: "", _id: uuid() },
  { brand: "Bacardi", type: "Rum", notes: "", _id: uuid() },
  { brand: "Banhez", type: "Mescal", notes: "", _id: uuid() }
];

liquorRouter.get('/', (req, res) => {
  res.send(liquors)
})

liquorRouter.get('/:liquorId', (req, res, next) => {
    const liquorId = req.params.liquorId
    const foundLiquor = liquors.find(liquor => liquor._id === liquorId)
    if(!foundLiquor){
      const error = new Error('The server response of undefined - Invalid ID')
      return next(error)
    }
    res.send(foundLiquor)
})

liquorRouter.delete('/:liquorId', (req, res, next) => {
  const liquorId = req.params.liquorId
  const liquorIndex = liquors.findIndex(liquor => liquor._id === liquorId)
  liquors.splice(liquorIndex, 1)
  res.send(`Successfully deleted ${liquorIndex.brand} from database`)
})

liquorRouter.post('/', (req, res, next) => {
  const newLiquor = req.body
  newLiquor._id = uuid()
  liquors.push(newLiquor)
  res.send(newLiquor)
})

liquorRouter.put('/:liquorId', (req, res) => {
  const liquorId = req.params.liquorId
  const updateObject = req.body
  const liquorIndex = liquors.findIndex(liquor => liquor._id === liquorId)
  const updateLiquor = Object.assign(liquors[liquorIndex], updateObject)
  res.send(updateLiquor)
})

module.exports = liquorRouter