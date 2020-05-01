const express = require("express");
const router = express.Router();

// @route Get api/posts @description @access Public

router.get("/", (req, res) => res.send("Posts Route"));

module.exports = router;
