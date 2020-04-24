var app = require('express')()
var http = require('http').createServer(app)
const io = require("socket.io")(http);

app.get('/', function(req, res){
    res.send('<h1>Hello World</h1>')
})

io.on("connection", function(socket){
  console.log("user connected");
     socket.on("chat message", function (msg) {
         console.log(msg)
     });
});

http.listen(3000, function(){
    console.log('listening on port  *:3000')
})