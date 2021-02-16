// import React, {useState} from "react"
// import {TextField} from "@material-ui/core"
// import Button from "@material-ui/core/Button"
// import IconButton from "@material-ui/core/IconButton"
// import RemoveIcon from "@material-ui/icons/Remove"
// import AddIcon from "@material-ui/icons/Add"

// export default function WODForm(props){
//     const initInputs = {
//         warmUp: props.warmUp || "",
//         strength: props.strength || "",
//         workout: props.workout || "",
//         coolDown: props.coolDown || ""
//     }

//     const [inputs, setInputs] = useState(initInputs)
//     const [inputFields, setInputFields] = useState([
//       { warmUp: "", strength: "", workout: "", coolDown: "" }
//     ]);

//     function handleChange(i, e){
//        const values = [...inputFields]
//        values[i][e.target.name] = e.target.value
//        setInputFields(values)
//     }
//     function handleSubmit(e){
//         e.preventDefault()
//         console.log(inputs)
//         props.submit(inputs, props._id)
//         setInputs(initInputs)
//     }

//     const {warmUp, strength, workout, coolDown} = inputs

//     return (
//       <form onSubmit={handleSubmit}>
//         {/* <input 
//             type="text"
//             name="warmUp"
//             value={warmUp}
//             onChange={handleChange}
//             placeholder="Warm up"
//             />
//             <input 
//             type="text"
//             name="strength"
//             value={strength}
//             onChange={handleChange}
//             placeholder="Strength"
//             />
//             <input 
//             type="text"
//             name="Workout"
//             value={workout}
//             onChange={handleChange}
//             placeholder="Workout"
//             />
//             <input 
//             type="text"
//             name="coolDown"
//             value={coolDown}
//             onChange={handleChange}
//             placeholder="Cooldown"
//             /> */}
//         {inputFields.map((inputField, index) => (
//           <div key={index}>
//               <TextField label="Warm up"/>
//             <input
//               type="text"
//               name="warmUp"
//               value={inputField.warmUp}
//               onChange={handleChange}
//               placeholder="Warm up"
//             />
//             <input
//               type="text"
//               name="strength"
//               value={inputField.strength}
//               onChange={handleChange}
//               placeholder="Strength"
//             />
//             <input
//               type="text"
//               name="workout"
//               value={inputField.workout}
//               onChange={handleChange}
//               placeholder="Workout"
//             />
//             <input
//               type="text"
//               name="coolDown"
//               value={inputField.coolDown}
//               onChange={handleChange}
//               placeholder="Cooldown"
//             />
//             <IconButton>
//                 <RemoveIcon />
//             </IconButton>
//             <IconButton>
//                 <AddIcon/>
//             </IconButton>
//           </div>
//         ))}
//         <button>Add Workout</button>
//       </form>
//     );

// }

import React, { useState } from "react";
import Container from "@material-ui/core/Container";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import IconButton from "@material-ui/core/IconButton";
import RemoveIcon from "@material-ui/icons/Remove";
import AddIcon from "@material-ui/icons/Add";
import ExitToAppIcon from "@material-ui/icons/ExitToApp";
import Icon from "@material-ui/core/Icon";
import { v4 as uuidv4 } from "uuid";
import Nav from "./Nav"
import {Link} from "react-router-dom"
import styled from "styled-components"
import { UserContext } from "../context/UserProvider";
import Calendar from "react-calendar";
import { makeStyles } from "@material-ui/core/styles";
import "react-calendar/dist/Calendar.css";

const useStyles = makeStyles((theme) => ({
  root: {
    "& .MuiTextField-root": {
      margin: theme.spacing(1),
    },
  },
  button: {
    margin: theme.spacing(1),
  },
}));

const Wrapper = styled.div`
  h1, h2 {
    font-family: "Poppins", sans-serif;
  };

  h2{
      cursor: pointer
  }
`;

function WodForm(props) {

    
  const classes = useStyles();
  const [inputFields, setInputFields] = useState([
    { warmUp: "", strength: "", workout: "", coolDown: "" },
  ]);
  const [value, onChange] = useState(new Date());

  const { logout } = props;

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("InputFields", inputFields);
  };

  const handleChangeInput = (id, event) => {
    const newInputFields = inputFields.map((i) => {
      if (id === i.id) {
        i[event.target.name] = event.target.value;
      }
      return i;
    });

    setInputFields(newInputFields);
  };

  const handleAddFields = () => {
    setInputFields([
      ...inputFields,
      { id: uuidv4(), firstName: "", lastName: "" },
    ]);
  };

  const handleRemoveFields = (id) => {
    const values = [...inputFields];
    values.splice(
      values.findIndex((value) => value.id === id),
      1
    );
    setInputFields(values);
  };

  return (
    <Container>
      <Wrapper>
        <h1>Add New Workout</h1>

        <form className={classes.root} onSubmit={handleSubmit}>
          {inputFields.map((inputField) => (
            <div key={inputField.id}>
              <TextField
                name="warmUp"
                label="Warm up"
                variant="filled"
                value={inputField.warmUp}
                onChange={(event) => handleChangeInput(inputField.id, event)}
              />

              <IconButton
                disabled={inputFields.length === 1}
                onClick={() => handleRemoveFields(inputField.id)}
              >
                <RemoveIcon />
              </IconButton>
              <IconButton onClick={handleAddFields}>
                <AddIcon />
              </IconButton>
            </div>
          ))}
          {inputFields.map((inputField) => (
            <div key={inputField.id}>
              <TextField
                name="strength"
                label="Strength"
                variant="filled"
                value={inputField.strength}
                onChange={(event) => handleChangeInput(inputField.id, event)}
              />

              <IconButton
                disabled={inputFields.length === 1}
                onClick={() => handleRemoveFields(inputField.id)}
              >
                <RemoveIcon />
              </IconButton>
              <IconButton onClick={handleAddFields}>
                <AddIcon />
              </IconButton>
            </div>
          ))}
          {inputFields.map((inputField) => (
            <div key={inputField.id}>
              <TextField
                name="workout"
                label="Workout"
                variant="filled"
                value={inputField.workout}
                onChange={(event) => handleChangeInput(inputField.id, event)}
              />

              <IconButton
                disabled={inputFields.length === 1}
                onClick={() => handleRemoveFields(inputField.id)}
              >
                <RemoveIcon />
              </IconButton>
              <IconButton onClick={handleAddFields}>
                <AddIcon />
              </IconButton>
            </div>
          ))}
          {inputFields.map((inputField) => (
            <div key={inputField.id}>
              <TextField
                name="coolDown"
                label="Cool down"
                variant="filled"
                value={inputField.coolDown}
                onChange={(event) => handleChangeInput(inputField.id, event)}
              />

              <IconButton
                disabled={inputFields.length === 1}
                onClick={() => handleRemoveFields(inputField.id)}
              >
                <RemoveIcon />
              </IconButton>
              <IconButton onClick={handleAddFields}>
                <AddIcon />
              </IconButton>
            </div>
          ))}
          <Button
            className={classes.button}
            variant="contained"
            color="primary"
            type="submit"
            onClick={handleSubmit}
          >
            Add Workout
          </Button>
        </form>
        <button className="loginOut" onClick={logout}>
          Logout
        </button>
        <h2 onClick={logout}>Logout</h2>
      </Wrapper>
      <div>
        <Calendar onChange={onChange} value={value} />
      </div>
    </Container>
  );
}

export default WodForm;