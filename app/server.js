const express = require('express')
const app = express()
const morgan = require('morgan')
const mongoose = require('mongoose')

app.use(express.json())
app.use(morgan('dev'))

mongoose.connect(
    'mongoose://localhost:27017/user-authentication',
    {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useCreateIndex: true,
        useFindAndModify: false
    },
    () => console.log("connected to DB")
)

const movies = [
    {title: "Die Hard", genre: "action"},
    {title: "Star Wars", genre: "fantasy"},
    {title: "Lion King", genre: "Children"},
    {title: "Friday the 13th", genre: "horror"}
]

app.get('/movies', (req, res) => {
    res.send(movies)
})

app.post('/movies', (req, res) => {
    const newMovie = req.body
    movies.push(newMovie)
    res.send(`Successfully added ${newMovie.title} to the database`)
})

app.listen(9000, () => {
    console.log('Server is running on port 9000')
})