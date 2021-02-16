const express = require('express')
const app = express() 
const morgan = require('morgan')
const mongoose = require('mongoose')
require('dotenv').config()
const expressJwt = require('express-jwt')
const fileUpload = require('express-fileupload')

process.env.SECRET

app.use(express.json())
app.use(morgan('dev'))

app.use(fileUpload())

mongoose.connect("mongodb://localhost:27017/e-commerce", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
    useFindAndModify: false
},
()=> console.log("Connected to DB")
)



app.post('/upload', (req, res, next) => {
  if(req.files === null){
    return res.status(400).json({msg: "no file is uploade"})
  }
  const file = req.files.file;
  file.mv(`${__dirname}/client/uploads/ ${file.name}`, err => {
    if(err){
      console.error(err)
      return res.status(500).send(err)
    }
    res.json({fileName: file.name, filePath: `/uploads/${file.name}`})
  })
})

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