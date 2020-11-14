// const express = require('express')
// const mediaRouter = express.Router()
// const Media = require('../models/media')



// // Get all Media

// mediaRouter.get('/', (req, res, next) => {
//     Media.find((err, medias) => {
//         if(err){
//             res.status(500)
//             return next(err)
//         }
//         return res.status(201).send(medias)
//     })
// })

// // Get media by user

// mediaRouter.get('/user', (req, res, next) => {
//     Media.find({user: req.user._id}, (err, medias) => {
//         if(err){
//             res.status(500)
//             return next(err)
//         }
//         return res.status(201).send(medias)
//     })
// })

// // add new media

// mediaRouter.post('/', (req,res,next) => {
//     req.body.user = req.user._id
//     const newMedia = new Media(req.body)
//     newMedia.save((err, savedMedia) => {
//         if(err){
//             res.status(500)
//             return next(err)
//         }
//         return res.status(200).send(savedMedia)
//     })
// })

// // update media

// mediaRouter.put("/:mediaId", (req, res, next) => {
//     Media.findOneAndUpdate(
//         {_id: req.params.mediaId, user: req.user._id},
//         req.body,
//         {new: true},
//         (err, updateMedia) => {
//             if(err){
//                 res.status(500)
//                 return next(err)
//             }
//             return res.status(200).send(updateMedia)
//         }
//     )
// })

// // delete media

// mediaRouter.delete("/:mediaId", (req, res, next) => {
//     Media.findOneAndDelete(
//         {_id: req.params.mediaId, user: req.user._id},
//         (err, deleteMedia) => {
//             if(err){
//                 res.status(500)
//                 return next(err)
//             }
//             return res.status(200).send(`Successfully deleted ${deleteMedia.title}`)
//         }
//     )
// })

const express = require("express");
const app = express();
const mediaRouter = express.Router();
const fileUpload = require("express-fileupload");

app.use(fileUpload());


app.post("/image", (req, res) => {
  if (req.files === null) {
    return res.status(400).json9({ msg: "No file was uploaded" });
  }

  const file = req.files.file;

  file.mv(`${__dirname}/client/public/uploads/${file.name}`, (err) => {
    if (err) {
      console.error(err);
      return res.status(500).send(err);
    }
    res.json({ fileName: file.name, filePath: `/uploads/${file.name}` });
  });
});


module.exports = mediaRouter