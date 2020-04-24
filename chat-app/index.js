var express = require('express')
var socket = require('socket.io')
// App set up

var app = express();

var server = app.listen(3000, function(){
    console.log("listening to request")
})

// Static files

app.use(express.static('public'))

// Socket set up

var io = socket(server)

io.on('connection', function(socket){
    console.log("made socket connection", socket.id);

    //Handle Chat events

    socket.on('chat', function(data){
        io.sockets.emit('chat', data)
    })

    socket.on('typing', function(data){
        socket.broadcast.emit('typing', data)
    })
})