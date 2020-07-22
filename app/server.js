const express = require('express')
const app = express()
const mongoose = require('mongoose')
const nodemon = require('mongoose')
const PORT = 3500

app.use(express.json())

mongoose.connect('mongodb://localhost:27017/user-authentication', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
    useFindAndModify: false
})

app.listen(PORT, ()=>{
    console.log(`server is running on port ${PORT}`)
})