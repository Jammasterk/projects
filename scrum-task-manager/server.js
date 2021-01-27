const express = require('express')
const app = express()
const morgan = require('morgan')
const mongoose = require('mongoose')

app.use(express.json())
app.use(morgan('dev'))

mongoose.connect("mongodb://localhost:27017/task-manager", {
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

app.use("/task", require('./routes/tasksRouter.js'))
app.use("/user", require("./routes/userRouter.js"))
app.use('/description', require('./routes/descriptionRouter.js'))

app.listen(3001, () => {
    console.log('Server is connected')
})