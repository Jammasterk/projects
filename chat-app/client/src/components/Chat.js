import React, {useState, useEffect} from "react"
import InfoBar from "./InfoBar"
import queryString from "query-string"
import {TextField, FormControl, Button} from "@material-ui/core"
import io from "socket.io-client"
const ENDPOINT = 'localhost:5000'
let socket;

const Chat = ({location}) => {
    const [ name, setName] = useState('')
    const [room, setRoom] = useState('')
    const [messages, setMessages] = useState([])
    const [message, setMessage] = useState('')

    useEffect(() => {
        const {name, room} = queryString.parse(location.search)

        socket = io(ENDPOINT)

        setName(name)
        setRoom(room)
        console.log(name, room)
        console.log(socket)
        socket.emit('join', {name, room}, (err) => {
            alert(err)
        })
        return () => {
            socket.emit('disconnect')

            socket.off()
        }
    }, [ENDPOINT, location.search])

    useEffect(() => {
        socket.on('message', (message) => {
            setMessages([...messages, message])
        })
    }, [messages])

    const sendMessage = (event) => {
        event.preventDefault()
        if(message){
            socket.emit('sendMessage', message, () => setMessage(''))
        }
    }

    console.log(message, messages)

    return (
      <div>
        <div>
          <InfoBar />
          <FormControl>
            <TextField
              type="text"
              value={message}
              onChange={(event) => setMessage(event.target.value)}
              onKeyPress={(event) =>
                event.key === "Enter" ? sendMessage(event) : null
              }
            />
            <Button className="enter-button" variant="contained" color="primary">Enter</Button>
          </FormControl>
        </div>
      </div>
    );
}

export default Chat