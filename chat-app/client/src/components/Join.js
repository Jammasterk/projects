import React, {useState} from "react"
import {Link} from "react-router-dom"
import {TextField, Button} from "@material-ui/core"
import styled from "styled-components"
import SendIcon from "@material-ui/icons/Send"

const Container = styled.div`
  .button{
    margin-top: 1em;
    width: 29.5%
  }
`

const Join = () => {
    const [name, setName] = useState('')
    const [room, setRoom] = useState('')

    

    return (
      <div className="outerContainer">
        <Container>
          <div className="innerContainer">
            <h1 className="heading">Join</h1>
            <div>
              <TextField
                type="text"
                placeholder="username"
                className="joinInput"
                onChange={(event) => setName(event.target.value)}
              />
            </div>
            <div>
              <TextField
                type="text"
                placeholder="room"
                className="joinInput"
                onChange={(event) => setRoom(event.target.value)}
              />
            </div>
            <Link
              onClick={(event) =>
                !name || !room ? event.preventDefault() : null
              }
              to={`/chat?name=${name}&room=${room}`}
            >
              <Button
                className="button"
                type="submit"
                variant="contained"
                color="primary"
              >
                Sign In
              <SendIcon style={{marginLeft: "1.2em"}} />
              </Button>
            </Link>
          </div>
        </Container>
      </div>
    );
}

export default Join