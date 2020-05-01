const express = require('express')
const router = express.Router()

// @route Get api/users @description @access Public


router.get("/", (req, res) => res.send("User Route"))

module.exports = router;