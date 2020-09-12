const express = require('express')
const app = express()
require('dotenv').config()
const mongoose = require('mongoose')
const morgan = require('morgan')

app.use(express.json())
app.use(morgan('dev'))

mongoose.connect('mongodb://localhost:27017/user-authentication', {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true,
    useFindAndModify: false
},
() => console.log('Connected to DB')
)

app.use('/auth', require('./routes/authRouter.js'))
app.use('/notes', require('./routes/noteRouter'))
app.use('/account', require('./routes/accountRouter'))
app.use('/contact', require('./routes/contactRouter'))


app.use((err, req, res, next) => {
  console.log(err);
  if (err.name === "UnauthorizedError") {
    res.status(err.status);
  }
  return res.send({ errMsg: err.message });
});

app.listen(9000, ()  => {
    console.log("The server is running on PORT 9000")
})