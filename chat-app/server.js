const express = require('express')
const app = express() 
const morgan = require('morgan')
const mongoose = require('mongoose')
require('dotenv').config()
const expressJwt = require('express-jwt')

process.env.SECRET

app.use(express.json())
app.use(morgan('dev'))

mongoose.connect("mongodb://localhost:27017/e-commerce", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
    useFindAndModify: false
},
()=> console.log("Connected to DB")
)

app.use("/auth", require('./routes/authRouter'))
app.use(
  "/api",
  expressJwt({ secret: process.env.SECRET, algorithms: ["HS256"] })
);
app.use('/api/product', require("./routes/productRouter"))
app.use('/api/product-info', require('./routes/productInfoRouter'))
app.use('/api/reviews', require('./routes/reviewRouter'))

app.listen(3000, () => {
    console.log("The server is connected")
})