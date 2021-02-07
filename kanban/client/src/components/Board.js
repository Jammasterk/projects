import React, {useState} from "react"
import styled from "styled-components"

const Wrapper = styled.div`
  /* text-align: center; */

  small {
    text-align: left !important;
  }
  .drag-n-drop {
    padding: 0.5rem;
    display: grid;
    width: 100vw;
    height: 80%;
    grid-template-columns: repeat(auto-fill, 300px);
    grid-gap: 0.5rem;
  }

  .dnd-group {
    background: #24244d;
    border-radius: 5px;
    padding: 0.5rem;
  }
  .dnd-item {
    background: #fff;
    color: #24244d;
    min-height: 150px;
    border-radius: 5px;
    display: flex;
    /* justify-content: center; */
    align-items: center;
    font-weight: bold;
    padding: 1em;
  }

  .dnd-item:not(:last-of-type) {
    margin-bottom: 0.5rem;
  }
  .dnd-item * {
    margin: 0;
  }
  p {
    color: #f1f1f1;
  }
  button {
  }
`;


function Board(props){

  const [show, setShow] = useState(false)

  function handleToggle(){
    setShow(!show)
  }

  const {boardName,tasks, assignedTo, comment, priority, sprint, timeLine, engineers, dateCreated} = props
    return (
      <Wrapper>
        <div className="drag-n-drop">
          <div className="dnd-group">
            <p>Not Started</p>

            <div className="dnd-item">
              <div style={{display : "block"}}>
                <small>Task: {boardName}</small>
                <br/>
                <small>Created on: {dateCreated}</small>
                <br/>
                <small>Task: {tasks}</small>
                <br/>
                <small>Sprint: {sprint}</small>
                <br/>
                <button onClick={handleToggle}>
                  <i className="fas fa-caret-down"></i>
                </button>
                <div
                  style={show ? { display: "block" } : { display: "none" }}
                  className="moreOptions"
                >
                  <small>Assigned to:{assignedTo}</small>
                  <br/>
                  <small>Priority: {priority}</small>
                  <br/>
                  <small>Timeline: {timeLine}</small>
                  <br/>
                  <small>Engineers: {engineers}</small>
                  <br/>
                  <small>Comments: {comment}</small>
                </div>
              </div>
            </div>
          </div>
          <div className="dnd-group">
            <p>In Progress</p>
            <div className="dnd-item">
              <div>{/* <p>ITEM</p> */}</div>
            </div>
            <div className="dnd-item">
              <div>{/* <p>ITEM</p> */}</div>
            </div>
            <div className="dnd-item">
              <div>{/* <p>ITEM</p> */}</div>
            </div>
          </div>
          <div className="dnd-group">
            <p>In Review</p>
          </div>
          <div className="dnd-group">
            <p>Complete</p>
          </div>
          <div className="dnd-group">
            <p>Shipped</p>
          </div>
        </div>
      </Wrapper>
    );
}

export default Board