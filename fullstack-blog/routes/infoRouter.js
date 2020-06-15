const express = require('express')
const infoRouter = express.Router()
const {uuid} = require('uuidv4')


const info = [
  { gender: "male", employed: false, _id: uuid()},
  { gender: "female", employed: false, _id: uuid()},
  { gender: "male", employed: true, _id: uuid()},
  { gender: "male", employed: true, _id:uuid()}
];

//Get All
infoRouter.get("/",(req, res) => {
    res.send(info);
  })

  infoRouter.get("/:userId",(req, res) => {
      const infoId = req.params.infoId
      const foundInfo = info.find(infos => infos.id === infoId)
      res.send(foundInfo)
  })
  
  infoRouter.post("/info", (req, res) => {
    const newInfo = req.body;
    newInfo._id = uuid();
    console.log(req);
    info.push(newInfo);
    res.send(`Successfully added ${info.gender} to database`);
  });

module.exports = infoRouter