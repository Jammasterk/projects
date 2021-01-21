const express = require('express')
const app = express()
require('dotenv').config()
const mongoose = require('mongoose')
const morgan = require('morgan')
const expressJwt = require("express-jwt")
const port = process.env.PORT || 4000

app.use(express.json())
app.use(morgan('dev'))

mongoose.connect('mongodb://localhost:27017/champagne-campaign', {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
},

() => console.log('connected to DB')
)

app.use('/auth', require('./routes/userRouter'))
app.use(
    "/api",
    expressJwt({ secret: process.env.SECRET, algorithms: ["HS256"] })
  );
  app.use('/api/wod', require('./routes/wodRouter'))

app.use((err, req, res, next)=>{
    console.log(err)
    if(err.name === "UnauthorizedError"){
        res.status(err.status)
    }
    return res.send({errMsg: err.message})
})

app.listen(port, () => {
    console.log(`The server is running on port ${port}`)
})