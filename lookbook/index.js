const express = require('express')
const mongoose = require('mongoose')
require('dotenv').config()
const morgan = require("morgan")
const app = express()
const expressJwt = require('express-jwt')

app.use(express.json())
app.use(morgan('dev'))

mongoose.connect('mongodb://localhost:27017/user-authentication',{
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
    useFindAndModify: false
},

()=> console.log('Connected to DB')
)

app.use("/auth", require("./routes/authRouter.js"));
app.use(
  "/api",
  expressJwt({ secret: process.env.SECRET, algorithms: ["RS256"] })
);
app.use('/api/look', require('./routes/lookRouter.js'))

app.use((err, req, res, next)=>{
    console.log(err)
    if(err.name === "UnauthorizedError"){
        res.status(err.status)
    }
    return res.send({errMsg: err.message})
})

app.listen(3000, () => {
    console.log('Connected to server on port 3000')
})