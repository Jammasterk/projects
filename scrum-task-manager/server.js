const express = require('express')
const app = express()
const morgan = require('morgan')

app.use(express.json())
app.use(morgan('dev'))

app.use('/task', (req, res, next) => {
    console.log("The items middleware is executed")
    next()
})

app.use("/task", require('./routes/tasksRouter.js'))
app.use("/user", require("./routes/userRouter.js"))

app.listen(3001, () => {
    console.log('Server is connected')
})