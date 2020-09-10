const express = require('express')
const app = express()
require('dotenv').config()
const morgan = require('morgan')
const mongoose = require('mongoose')
const expressJwt = require('express-jwt')

process.env.SECRET

app.use(express.json())
app.use(morgan('dev'))

mongoose.connect(
    'mongodb://localhost:27017/user-authentication',
    {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useCreateIndex: true,
        useFindAndModify: false
    },
    () => console.log('Connected to express database')
)

    app.use('/auth', require('./routes/authRouter'))
    app.use("/api", expressJwt({secret: process.env.SECRET, algorithms: ["HS256"]}))
    app.use('/api/note', require("./routes/noteRouter"))

    app.use((err, req, res, next) => {
        console.log(err)
        if(err.name === "UnauthorizedError"){
            res.status(err.status)
        }
    })

    app.listen(4300, () => {
        console.log('The server is running on port 3500')
    })
