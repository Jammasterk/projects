const express = require('express')
var PORT = process.env.PORT || 5000
require('dotenv').config()
const mongoose = require('mongoose')
const app = express()
const morgan = require('morgan')
const expressJwt = require('express-jwt')

process.env.SECRET

app.use(express.json())
app.use(morgan('dev'))

mongoose.connect('mongodb://localhost:27017/user-authentication', {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true,
    useFindAndModify: false

},
()=> console.log('Connected to DB')
)


app.use("/api", expressJwt({ secret: process.env.SECRET }));
app.use("/auth", require("./routes/authRouter.js"));

app.use((err, req, res, next) => {
    console.log(err)
    if(err.name === "UnauthorizedError"){
        res.status(err.status)
    }
    return res.send({errMsg: err.message})
})

app.listen(PORT, () => {
    console.log(`The server is up and running on port ${PORT}`)
})

