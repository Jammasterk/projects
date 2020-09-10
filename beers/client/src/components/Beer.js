import React, {useState} from "react"
import AddBeerForm from "./AddBeerForm"

const Beer = (props) => {
    console.log(props)
    const {brand, type, _id} = props
    const [editToggler, setEditToggler] = useState(false)
    return (
      <div className="m-auto w-75">
        {!editToggler ? (
          <>
            <h1>Brand: {brand}</h1>
            <p>Type: {type}</p>
            <button
              style={{
                width: "15%",
                height: "60px",
                background: "transparent",
                borderRadius: "5px",
                border: "2.5px solid red",
                fontSize: "25px",
                color: "red",
              }}
              onClick={() => props.deleteBeer(_id)}
            >
              Delete
            </button>
            <button
              onClick={() => setEditToggler((prevToggler) => !prevToggler)}
              style={{
                width: "15%",
                height: "60px",
                background: "transparent",
                borderRadius: "5px",
                border: "2.5px solid yellow",
                fontSize: "25px",
                color: "yellow",
              }}
            >
              Edit
            </button>
          </>
        ) : (
          <>
            <AddBeerForm 
            brand={brand} 
            type={type} 
            btnText="Edit Beer" 
            submit={props.updateBeer} 
            _id={_id}/>
            <button
              onClick={() => setEditToggler((prevToggler) => !prevToggler)}
              style={{
                width: "15%",
                height: "60px",
                background: "transparent",
                borderRadius: "5px",
                border: "2.5px solid green",
                fontSize: "25px",
                color: "green",
              }}
            >
              Close
            </button>
          </>
        )}
      </div>
    );
}

export default Beer 