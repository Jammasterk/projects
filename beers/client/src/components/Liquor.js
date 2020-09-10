import React, {useState} from "react"
import AddLiquorForm from "./AddLiquorForm"
import { MDBBadge } from "mdbreact";

const Liquor = props => {
    console.log(props)

    const {brand, type, notes, _id} = props
    const [editToggler, setEditToggler] = useState(false)

    return (
      <div className="m-auto w-75" style={{ margin: "20px 0" }}>
        {!editToggler ? (
          <div style={{ marginTop: "65px" }}>
            <h3>Brand: {brand}</h3>
            <small>Type: {type}</small>
            <p>Notes: {notes}</p>
            <MDBBadge
              style={{
                background: "transparent",
                borderRadius: "5px",
                fontSize: "16px",
                color: "red",
                width: "75px",
              }}
              onClick={() => props.deleteLiquor(_id)}
            >
              Delete
            </MDBBadge>
            <MDBBadge
              onClick={() => setEditToggler((prevToggler) => !prevToggler)}
              color="warning"
              pill
              style={{
                margin: "0 16px",
                width: "75px",
                background: "transparent",
                borderRadius: "5px",
                fontSize: "16px",
              }}
            >
              Edit
            </MDBBadge>
          </div>
        ) : (
          <>
            <AddLiquorForm
              brand={brand}
              type={type}
              notes={notes}
              btnText="Edit Liquor"
              submit={props.updateLiquor}
              _id={_id}
            />
            <MDBBadge
              onClick={() => setEditToggler((prevToggler) => !prevToggler)}
              pill
              color="success"
              style={{
                background: "transparent",
                borderRadius: "5px",
                border: "2.5px solid green",
                fontSize: "16px",
                color: "green",
              }}
            >
              Close
            </MDBBadge>
          </>
        )}
      </div>
    );
}

export default Liquor