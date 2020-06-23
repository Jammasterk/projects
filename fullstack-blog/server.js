const express = require('express')
const app = express()
const morgan = require("morgan")
const mongoose = require('mongoose')




app.use(express.json())
app.use(morgan('dev'))

//
// Connect to database

mongoose.connect('mongodb://localhost:27017/usersdb', 
{
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true,
    useFindAndModify: false
},
() => console.log("connected to database"))

// app.use()

app.use("/users", require('./routes/userRouter.js'))
// app.use("/info", require("./routes/infoRouter.js"))

//Error Handling

app.use(() => (err, req, res, next) => {
    console.log(err)
    return res.send({errMsg: err.message})
})

const PORT = 9000

app.listen(PORT, () => {
    console.log(`the server is running on ${PORT}`)
})

