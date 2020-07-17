import React, {useState} from "react"
import {Link} from "react-router-dom"

const Join = () => {
    const [name, setName] = useState('')
    const [room, setRoom] = useState('')

    

    return (
      <div className="outerContainer">
        <div className="innerContainer">
          <h1 className="heading">Join</h1>
          <div>
            <input
              type="text"
              placeholder=""
              className="joinInput"
              onChange={(event) => setName(event.target.value)}
            />
          </div>
          <div>
            <input
              type="text"
              placeholder=""
              className="joinInput"
              onChange={(event) => setRoom(event.target.value)}
            />
          </div>
          <Link onClick={(event) => (!name || !room) ? event.preventDefault() : null} to={`/chat?name=${name}&room=${room}`}>
            <button className="button" type="submit">
              Sign In
            </button>
          </Link>
        </div>
      </div>
    );
}

export default Join