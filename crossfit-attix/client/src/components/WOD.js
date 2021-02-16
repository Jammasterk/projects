import React, {useState, useContext} from 'react'
import WODForm from "./WODForm"
import Nav from "./Nav"
import { UserContext } from "../context/UserProvider";


function WOD(props) {
    const {warmUp, strength, workout, coolDown, title, _id} = props
    const [editToggle, setEditToggle] = useState(false)
    const { token, logout } = useContext(UserContext);

    return (
      <div>
      {token && <Nav logout={logout} />}
        {!editToggle ? (
          <>
            <h1>{title}</h1>
            <ul>
              <li>{warmUp}</li>
            </ul>
            <ul>
              <li>{strength}</li>
            </ul>
            <ul>
              <li>{workout}</li>
            </ul>
            <ul>
              <li>{coolDown}</li>
            </ul>
            <button onClick={() => props.deleteWod(_id)}></button>
            <button onClick={setEditToggle((prevToggle) => !prevToggle)}>
              Edit
            </button>
          </>
        ) : (
          <>
            <WODForm
              title={title}
              warmUp={warmUp}
              strength={strength}
              workout={workout}
              coolDown={coolDown}
            />
            <button
              onClick={() => setEditToggle((prevToggle) => !prevToggle)}
            >Close</button>
          </>
        )}
      </div>
    );
}

export default WOD
