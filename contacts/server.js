const express = require('express')
const app = express()
const mongoose = require('mongoose')
const morgan = require('morgan')
const expressJwt = require('express-jwt')
require('dotenv').config()
const PORT = process.env.PORT || 7500

process.env.SECRET 

app.use(express.json())
app.use(morgan('dev'))

mongoose.connect('mongodb://localhost:27017/contact-authentication', {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true,
    useFindAndModify: false
},
    ()=>console.log('Connected to the database')
)

app.use("/auth", require("./routes/authRouter.js"));
app.use(
  "/api",
  expressJwt({ secret: process.env.SECRET, algorithms: ["HS256"] })
);
app.use("/api/contacts", require("./routes/contactRouter"))

app.listen(PORT, () => {
    console.log(`The server is running on port ${PORT}`)
})