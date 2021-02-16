const express = require('express')
const app = express()
const mongoose = require("mongoose")
const morgan = require("morgan")
require("dotenv").config()

app.use(express.json())
app.use(morgan('dev'))

mongoose.connect("mongodb://localhost:27017/todo-app", {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true,
    useFindAndModify: false
},
    () => console.log("server is running")
)

app.use("/auth", require("./routes/userRouter"))

app.listen(5000, () => {
    console.log('Server is running on port 9000')
})