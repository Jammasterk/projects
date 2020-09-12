const express = require('express')
const app = express()
const mongoose = require('mongoose')

app.use(express.json())

app.use('/notes', require('./routes/noteRouter'))
app.use('/account', require('./routes/accountRouter'))
app.use('/contact', require('./routes/contactRouter'))

app.listen(9000, ()  => {
    console.log("The server is running on PORT 9000")
})