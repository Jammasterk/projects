const express = require('express')
const mongoose = require('mongoose')
const app = express()

app.use(express.json())


app.use('/beers', require('./routes/beerRouter'))
app.use('/liquors', require('./routes/liquorRouter'))

app.use((err, req, res, next) => {
    return res.send({errMsg: err.message})
})

app.listen(3500, () => console.log("server started"));