import React, {useState} from 'react'
import AddUser from "./AddUser"

export default function User(props) {
    const {name, age, _id} = props
    const [editToggle, setEditToggle] = useState(false)
    console.log(props)
    return (
      <div>
        {!editToggle ? (
          <>
            <h4>Name: {name}</h4>
            <p>Age: {age}</p>
            <button
              className="delete-button"
              onClick={() => props.deleteUser(_id)}
            >
              -
            </button>
            <button onClick={() => setEditToggle((prevToggle) => !prevToggle)}>
              Edit Button
            </button>
          </>
        ) : (
          <>
            <AddUser name={name} age={age} _id={_id} btnText="Submit Edit" submit={props.editUser}/>
            <button onClick={() => setEditToggle((prevToggle) => !prevToggle)}>
              Close
            </button>
          </>
        )}
      </div>
    );
}

