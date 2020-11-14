const express = require('express')
const app = express()
const mongoose = require('mongoose')
const morgan = require('morgan')
const expressJwt = require("express-jwt")
require('dotenv').config()


process.env.SECRET 

app.use(express.json())
app.use(morgan('dev'))

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost:27017/wagme-authentication", {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true,
    useFindAndModify: false
},
() => console.log('connected to database')
)


app.use('/auth', require('./routes/authRouter'))
app.use("/api", expressJwt({secret: process.env.SECRET, algorithms: ["HS256"]}))
app.use("/api/profiles", require('./routes/profileRouter'))

app.listen(3500, ()=>{
    console.log('database is running on port 5000')
})
