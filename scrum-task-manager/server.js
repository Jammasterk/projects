const express = require('express')
const app = express()
const morgan = require('morgan')
const mongoose = require('mongoose')
require('dotenv').config()
const expressJwt = require('express-jwt')

process.env.SECRET

app.use(express.json())
app.use(morgan('dev'))

mongoose.connect("mongodb://localhost:27017/scrum-authentication", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
    useFindAndModify: false
},
() => console.log("Connected to db")
)

app.use('/task', (req, res, next) => {
    console.log("The items middleware is executed")
    next()
})

app.use('/auth', require('./routes/authRouter'))
app.use('/api', expressJwt({secret: process.env.SECRET, algorithms: ["HS256"]}))
app.use("/api/task", require('./routes/tasksRouter.js'))
app.use("/api/description", require('./routes/descriptionRouter'))
app.use("/api/user", require("./routes/userRouter.js"))
app.use(
  "/description",
  require("./routes/descriptionRouter.js"))

app.use((err, req, res, next) => {
    console.log(err)
    if(err.name === "UnauthorizedError"){
        res.status(err.status)
    }
    return res.send({errMsg: err.message})
})

app.listen(3001, () => {
    console.log('Server is connected')
})