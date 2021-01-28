const express = require('express')
const descriptionRouter = express.Router()
const Description = require('../models/description')

descriptionRouter.get("/", (req, res, next) => {
    Description.find((err, descriptions) => {
        if(err){
            res.status(500)
            return next(err)
        }
        return res.status(200).send(descriptions)
    })
})

descriptionRouter.get("/user", (req, res, next) => {
  Description.find({user: req.user._id}, (err, descriptions) => {
    if(err){
      res.status(500)
      return next(err)
    }
    res.status(200).send(descriptions)
  })
})

descriptionRouter.post("/", (req, res, next) => {
  req.body.user = req.user._id;
  const newDescription = new Description(req.body);
  newDescription.save((err, savedDescription) => {
    if (err) {
      res.status(500);
      return next(err);
    }
    return res.status(200).send(savedDescription);
  });
});

descriptionRouter.put("/:descriptionId", (req, res, next) => {
  Description.findOneAndUpdate(
    { _id: req.params.descriptionId, user: req.user._id },
    req.body,
    { new: true },
    (err, updatedDescription) => {
      if (err) {
        res.status(500);
        return next(err);
      }
      return res
        .status(200)
        .send(`Successfully updated ${updatedDescription.description}`);
    }
  );
});

descriptionRouter.delete("/:descriptionId", (req, res, next) => {
    Description.findOneAndDelete(
      { _id: req.params.descriptionId, user: req.user._id },
      (err, deletedDescription) => {
        if (err) {
          res.status(500);
          return next(err);
        }
        return res
          .status(200)
          .send(
            `Successfully deleted ${deletedDescription.description} from database`
          );
      }
    );
})

module.exports = descriptionRouter