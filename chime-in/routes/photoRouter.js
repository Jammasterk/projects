const express = require("express")
const cloudinary = require("../utils/cloudinary");
const Photo = require('../models/photoSchema')
const upload = require("../utils/multer");
const photoRouter = express.Router();

// photoRouter.post("/photo", upload.single("image"), async (req, res) => {
//   try {
//     // Upload image to cloudinary
//     const result = await cloudinary.uploader.upload(req.file.path);

//     // Create new user
//     let user = new Photo({
//       name: req.body.name,
//       avatar: result.secure_url,
//       cloudinary_id: result.public_id,
//     });
//     // Save user
//     await user.save();
//     res.json(user);
//   } catch (err) {
//     console.log(err);
//   }
// });

photoRouter.post("/photo", upload.single("image"), async (req, res) => {
  try {
    const result = await cloudinary.uploader.upload(req.file.path);
    res.json(result);
    let user = new Photo({
      name: req.body.name,
      avatar: result.secure_url,
      cloudinary_id: result.public_id,
    });
    await user.save();
    res.json(user);
  } catch (error) {
    console.log(error);
  }
});

module.exports = photoRouter