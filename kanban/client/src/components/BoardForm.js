import React, {useState} from "react"
import { MDBBtn } from "mdbreact";
import styled from "styled-components"

const Wrapper = styled.div`
  form {
    width: 75%;
    height: 550px;
    background: #fff;
    /* border: 1px solid black; */
    margin: auto;
    -webkit-box-shadow: 3px 1px 12px -4px #000000;
    box-shadow: 3px 1px 12px -4px #000000;
    border-radius: 0.25em;
    margin-top: 4em;
  }

  .zoomIn {
    -webkit-animation-name: zoomIn;
    animation-name: zoomIn;
    -webkit-animation-duration: 0.3s;
    animation-duration: 0.3s;
    -webkit-animation-fill-mode: both;
    animation-fill-mode: both;
  }
  @-webkit-keyframes zoomIn {
    0% {
      opacity: 0;
      -webkit-transform: scale3d(0.3, 0.3, 0.3);
      transform: scale3d(0.3, 0.3, 0.3);
    }
    50% {
      opacity: 1;
    }
  }
  @keyframes zoomIn {
    0% {
      opacity: 0;
      -webkit-transform: scale3d(0.3, 0.3, 0.3);
      transform: scale3d(0.3, 0.3, 0.3);
    }
    50% {
      opacity: 1;
    }
  }
  i {
    padding: 0.5em;
    color: #fff;
  }
  button {
    border-radius: 50%;
    border: none;
    background: #4caac0;
    -webkit-box-shadow: 3px 1px 12px -4px #000000;
    box-shadow: 3px 1px 12px -4px #000000;
    height: 50px;
    width: 50px;
    margin-top: 1em;
    margin-left: 1em;
  }
  button:focus {
    outline: none;
  }
  select {
    border: none;
    border-bottom: 1px solid #000;
    padding-bottom: 5px;
    width: 150px;
  }

  select {
    color: #767676 !important;
    margin-top: 14px;
  }

  .inner-modal {
    display: flex;
    justify-content: space-around
  }

  input,
  select {
    width: 250px;
  }
  input {
    margin: 14px 0;
    border: none;
    border-bottom: 1px solid black;
  }

  input:focus{
      outline: none
  }

  .icons {
    color: #989898;
    margin: 0 0.55em;
  }
  .ripple{
      margin-top: 3em;
    border-radius: 3px;
    width: 200px;
    color: #fff
  }
`;

const initInputs = {
    boardName: "",
    dateCreated: "",
    tasks: "",
    assignedTo: "",
    comment: "",
    priority: "",
    sprint: "",
    timeLine: ""
}

function BoardForm(props){
    const [modal, setModal] = useState(false)
    const [inputs, setInputs] = useState(initInputs)

    const {addBoard} = props

    function handleChange(e){
            const {name, value} = e.target
            setInputs(prevInputs => ({
                ...prevInputs,
                [name]: value
            }))
    }

    function handleSubmit(e){
        e.preventDefault()
        setInputs(initInputs)
    }

    function handleClick(e){
        e.preventDefault()
        setModal(!modal)
    }

    const {
    boardName,
    dateCreated,
    tasks,
    assignedTo,
    comment,
    priority,
    sprint,
    timeLine,
    engineers
} = inputs
    return (
      <Wrapper>
        <button onClick={handleClick}>
          <i class="fas fa-plus"></i>
        </button>
        <form
          className="zoomIn"
          style={modal ? { display: "block" } : { display: "none" }}
        >
          <a href="" onClick={handleClick}>
            <i
              style={{ color: "#989898", fontSize: "24px" }}
              class="fas fa-times"
            ></i>
          </a>
          <div className="inner-modal">
            <div className="left-modal">
              <i class="icons far fa-clock"></i>
              <input type="text" placeholder="Name new task" name="boardName" value={boardName} onChange={handleChange}/>
              <br />
              <i class="icons fas fa-tasks"></i>
              <input type="text" placeholder="Task" name="tasks" value={tasks} onChange={handleChange}/>
              <br />
              <i class="icons fas fa-user"></i>
              <input type="text" placeholder="Assign task to..." name="assignedTo" value={assignedTo} onChange={handleChange}/>
              <br />
              <i class="icons far fa-comment"></i>
              <input type="text" placeholder="Add comment" name="comment" value={comment} onChange={handleChange}/>
              <br />
              <i class="icons fas fa-signal"></i>
              <select name="" id="">
                <option disabled="disabled" active name="priority" value={priority} onChange={handleChange}>
                  Choose Priority
                </option>
                <option value="">Urgent</option>
                <option value="">High</option>
                <option value="">Medium</option>
                <option value="">Low</option>
              </select>
            </div>
            <div className="right-modal">
              <i class="icons fas fa-list"></i>
              <input type="text" placeholder="Sprint" name="sprint" value={sprint} onChange={handleChange}/>
              <br />
              <i class="icons fas fa-stream"></i>
              <input type="text" placeholder="Timeline" name="timeLine" value={timeLine} onChange={handleChange}/>
              <br />
              <i class="icons fas fa-users-cog"></i>
              <input type="text" placeholder="Engineers" name="engineers" value={engineers} onChange={handleChange}/>
            </div>
          </div>
          <button className="ripple">Create New Board</button>
        </form>
      </Wrapper>
    );
}

export default BoardForm