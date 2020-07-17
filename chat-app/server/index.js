const express = require('express')
const socketio = require('socket.io')
const http = require('http')
const {addUser, removeUser, getUser, getUsersInRoom} = require('./users')

const PORT = process.env.PORT || 5000

const router = require('./router')

const app = express()

const server = http.createServer(app)
const io = socketio(server)

io.on('connect', (socket) => {
    console.log("We have a new connection!!!")

    socket.on('join', ({name, room}, callback) => {
        const {err, user} = addUser({id: socket.id, name, room})

        if(err){
            return callback(err)
        }

        socket.emit('message', {user: 'admin', text: `${user.name} welcome to the ${user.room}`})
        socket.broadcast.to(user.room).emit("message", {user: "admin", text: `${user.name} has joined`})
        socket.join(user.room)

        callback()
    })

    socket.on('sendMessage', (message, callback) => {
        const user = getUser(socket.id)
        io.to(user.room).emit('message', {user: user.name, text: message})
        callback()
    })

    socket.on('disconnet', () => {
        console.log("user has left")
    })

})


app.use(router)

server.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`)
})
