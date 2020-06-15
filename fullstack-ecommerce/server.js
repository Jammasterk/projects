const express = require('express')
const app = express()
const morgan = require('morgan')
const mongoose = require('mongoose')

app.use(express.json())
app.use(morgan('dev'))

mongoose.connect('mongodb://localhost:27017/webdb', {
    useCreateIndex: true,
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false
},
() => console.log('connected to database'))

app.use('/products', require('./routes/productRouter'))

const PORT = 3500

app.listen(PORT, () => {
    console.log(`Up and running on port ${PORT}`)
})
