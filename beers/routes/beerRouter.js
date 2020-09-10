const express = require('express')
const beerRouter = express.Router()
const uuid = require("uuid").v4;

const beers = [
  { brand: "", type: "", _id: uuid() },
//   { brand: "Harpoon", type: "IPA", _id: uuid() },
//   { brand: "Ambar", type: "Lager", _id: uuid() },
//   { brand: "Sierra Nevada", type: "Pale Ale", _id: uuid() },
//   { brand: "Laughing Lab", type: "Scottish Ale", _id: uuid() },
//   { brand: "Stella Artois", type: "Belgian Pilsner", _id: uuid() },
];

beerRouter.get("/", (req, res) => {
  res.send(beers);
});

beerRouter.get("/:beerId", (req, res, next) => {
    const beerId = req.params.beerId
    const foundBeer = beers.find(beer => beer._id === beerId)
    if(!foundBeer){
      const error = new Error("The server returned a response of undefined - Invalid ID")
      return next(error)
    }
    res.send(foundBeer)
})

beerRouter.delete('/:beerId', (req, res) => {
    const beerId = req.params.beerId
    const beerIndex = beers.findIndex(beer => beer._id === beerId)
    beers.splice(beerIndex ,1 )
    res.send(`Successfully deleted ${beerIndex.brand}`)
})

beerRouter.post("/", (req, res) => {
  const newBeer = req.body;
  newBeer._id = uuid();
  beers.push(newBeer);
  res.send(newBeer)
});

beerRouter.put("/:beerId", (req, res) => {
  const beerId = req.params.beerId;
  const updateObject = req.body
  const beerIndex = beers.findIndex((beer) => beer._id === beerId);
  const updatedBeer = Object.assign(beers[beerIndex], updateObject);
  res.send(updatedBeer);
});

module.exports = beerRouter