const express = require("express");
const profileRouter = express.Router();
const Profile = require("../models/profileSchema");
const cloudinary = require("../utils/cloudinary");
const upload = require("../utils/multer");
const path = require("path");

profileRouter.get("/", (req, res, next) => {
  Profile.find((err, profiles) => {
    if (err) {
      res.status(500);
      return next(err);
    }
    return res.status(201).send(profiles);
  });
});

profileRouter.get("/user", (req, res, next) => {
  Profile.find({ user: req.user._id }, (err, profiles) => {
    if (err) {
      res.status(500);
      return next(err);
    }
    return res.status(201).send(profiles);
  });
});

profileRouter.post("/", (req, res, next) => {
  req.body.user = req.user._id;
  const newProfile = new Profile(req.body);
  newProfile.save((err, savedProfile) => {
    if (err) {
      res.status(500);
      return next(err);
    }
    return res.status(200).send(savedProfile);
  });
});

profileRouter.post("/photo", upload.single("image"), async (req, res) => {
  try {
    const result = await cloudinary.uploader.upload(req.file.path);

    let user = new Profile({
      name: req.body.name,
      avatar: result.secure_url,
      cloudinary_id: result.public_id,
    });
    await user.save();
    res.json(user);
  } catch (err) {
    console.log(err);
  }
});

profileRouter.put("/:profileId", (req, res, next) => {
  Profile.findOneAndUpdate(
    { _id: req.params.profileId, user: req.user._id },
    req.body,
    { new: true },
    (err, updateProfile) => {
      if (err) {
        res.status(500);
        return next(err);
      }

      return res.status(200).send(updateProfile);
    }
  );
});

profileRouter.delete("/:profileId", (req, res, next) => {
  Profile.findOneAndDelete(
    { _id: req.params.profileId, user: req.user._id },
    (err, deleteProfile) => {
      if (err) {
        res.status(500);
        return next(err);
      }
      return res
        .status(200)
        .send(`Successfully deleted ${deleteProfile.name}'s profile'`);
    }
  );
});

module.exports = profileRouter;
