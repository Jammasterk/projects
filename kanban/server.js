const express = require('express')
const app = express()
const morgan = require('morgan')
const mongoose = require('mongoose')
require('dotenv').config()
const expressJwt = require("express-jwt")

process.env.SECRET

app.use(express.json())
app.use(morgan('dev'))

mongoose.connect("mongodb://localhost:27017/kanban", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
    useFindAndModify: false
},

() => console.log("Connected to server")
)


app.use('/auth', require('./routes/authRouter'))
app.use("/api", expressJwt({secret: process.env.SECRET, algorithms: ["HS256"]}))
app.use("/api/board", require("./routes/boardRouter"))

app.listen(4500, () => {
    console.log("server is listening on port 4600")
})