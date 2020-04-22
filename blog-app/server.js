const express = require('express')
var PORT = process.env.PORT || 8800
require('dotenv').config()
const mongoose = require('mongoose')
const morgan = require('morgan')
const app = express()
const expressJwt = require('express-jwt')

process.env.SECRET

app.use(express.json())
app.use(morgan('dev'))

mongoose.connect('mongodb://localhost:27017/user-authentication',
{
    useNewUrlParser: true,
    useUnifiedTopology:true,
    useCreateIndex: true,
    useFindAndModify: false
},
()=>console.log('Connected to DB')
)

app.use('/auth', require('./routes/authRouter.js'))
app.use('/api', expressJwt({secret: process.env.SECRET}))
app.use('/api/post/', require('./routes/postRouter.js'))
// app.use('/api/comment', require('./routes/commentRouter.js'))

app.use((err, req, res, next)=>{
    console.log(err)
    if(err.name === "UnauthorizedError"){
        res.status(err.status)
    }
    return res.send({errMsg: err.message})
})

app.listen(PORT, () => {
    console.log("The server is up and running on port 8800")
}) 