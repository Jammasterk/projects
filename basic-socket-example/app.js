const express = require('express')
const http = require("http")
const socketIo = require("socket.io")

const PORT = 4500
const index = require("./routes/server")
const { clearInterval } = require('timers')

const app = express()
app.use(index)

const server = http.createServer(app)

const io = socketIo(server)

const getApiEmit = "TODO"

let interval;

io.on("connection", (socket) => {
  console.log("new connection");
  if (interval) {
    clearInterval(interval);
  }
  interval = setInterval(() => getApiAndEmit(socket), 1000);
  socket.on("disconnect", () => {
    console.log("Disconnected");
    clearInterval(interval);
  });
});

const getApiAndEmit = socket => {
    const response = new Date()
    socket.emit("FromAPI", response)
}

server.listen(PORT, () => console.log(`Listening on port ${PORT}`))