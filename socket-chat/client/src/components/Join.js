import React, {useState} from 'react'
import {Link} from "react-router-dom"
import {TextField, Button} from "@material-ui/core"


const Join = () => {
    
    
        const [name, setName] = useState('')
        const [room, setRoom] = useState('')

        return (
          <div>
            <div>
              <h1 className="heading">Join</h1>
              
              <TextField
                className="input"
                id="standard-basic"
                label="Name"
                onChange={(event) => setName(event.target.value)}
              />
              <br />
              <TextField
                className="input"
                id="standard-basic"
                label="Room"
                onChange={(event) => setRoom(event.target.value)}
              />
              <br />
              <Link
                onClick={(event) =>
                  (!name || !room) ? event.preventDefault() : null
                }
                to={`/chat?name=${name}&room=${room}`}
              >
                {/* <button type="submit">Sign In</button> */}
                <Button
                  className="input"
                  type="submit"
                  variant="contained"
                  color="primary"
                >
                  Enter Chat
                </Button>
              </Link>
            </div>
          </div>
        );
    }

export default Join