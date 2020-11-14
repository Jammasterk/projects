 const express = require('express')
 const app = express()
 const mongoose = require('mongoose')
 const morgan = require('morgan')
 const expressJwt = require('express-jwt')
 require('dotenv').config()
 const fileUpload = require("express-fileupload");

 app.use(express.json())
 app.use(morgan('dev'))

 app.use(fileUpload());

 mongoose.connect('mongodb://localhost:27017/media-gallery', {
     useNewUrlParser: true,
     useCreateIndex: true,
     useUnifiedTopology: true,
     useFindAndModify: false
 },
 () => console.log("Connected to DB")
 )

 app.use('/auth', require("./routes/authRouter"))
 app.use("/api", expressJwt({secret: process.env.SECRET, algorithms: ["HS256"]}))

app.post("/upload", (req, res) => {
  if (req.files === null) {
    return res.status(400).json9({ msg: "No file was uploaded" });
  }

  const file = req.files.file;

  file.mv(`${__dirname}/client/public/uploads/${file.name}`, (err) => {
    if (err) {
      console.error(err);
      return res.status(500).send(err);
    }
    res.json({ fileName: file.name, filePath: `/uploads/${file.name}` });
  });
});


 app.listen(8000, () => {
     console.log("The server is running on port 9000")
 })