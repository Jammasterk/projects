const express = require('express')
const app = express()
const morgan = require('morgan')
const mongoose = require('mongoose')
require("dotenv").config()
const expressJwt = require('express-jwt')
//  const bodyParser = require("body-parser");
//  const multer = require("multer");

process.env.SECRET


app.use(express.json())
app.use(morgan('dev'))


mongoose.connect("mongodb://localhost:27017/chime-in", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
},
() => console.log("Connected to DB")
)

app.use("/auth", require('./routes/authRouter'))
app.use(
  "/api",
  expressJwt({ secret: process.env.SECRET, algorithms: ["HS256"] })
);
app.use("/api/profile", require("./routes/profileRouter"))
app.use("/api/story", require("./routes/storyRouter"))
// app.use("/api/profile/photo", require('./routes/profileRouter'))


app.listen(4500, () => {
    console.log("server is running on port 3000")
})