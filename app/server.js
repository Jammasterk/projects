const express = require('express')
const app = express()
const mongoose = require('mongoose')
const morgan = require('morgan')
const expressJwt = require('express-jwt')
const PORT = 5000
require('dotenv').config()

process.env.SECRET

app.use(express.json())
app.use(morgan('dev'))

mongoose.connect('mongodb://localhost:27017/user-authentication', {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true,
    useFindAndModify: false
},
() => console.log('Connected to database')
)

app.use('/auth', require('./routes/authRouter.js'))
app.use("/api", expressJwt({secret: process.env.SECRET, algorithms: ["HS256"]}))
app.use("/api/notes", require('./routes/noteRouter'))

app.use((err, req, res, next) => {
    console.log(err)
    if(err.name === "UnauthorizedError"){
        res.status(err.status)
    }
    return res.send({errMsg: err.message})
})

app.listen(PORT, () => {
    console.log(`The server is running on port ${PORT}`)
})
