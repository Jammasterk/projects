const express = require('express')
const app = express()
const morgan = require('morgan')
const mongoose = require('mongoose')
require('dotenv').config()
const expressJwt = require('express-jwt')

app.use(express.json());
app.use(morgan("dev"));

mongoose.connect("mongodb://localhost:27017/food-auth", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
    useFindAndModify: false
},

() => console.log("Running")
)

app.use("/auth", require("./routes/authRouter"));
app.use(
  "/api",
  expressJwt({ secret: process.env.SECRET, algorithms: ["HS256"] })
);

app.listen(4500, () => {
    console.log("Server running on PORT 4500")
})