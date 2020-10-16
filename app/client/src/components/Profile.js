import React, {useState} from 'react'
import {Button} from "react-bootstrap"
import styled from "styled-components"

const Wrapper = styled.div`
    p{
        font-size: 14px
    }
    .underline{
        /* width: 75%; */
        border-bottom: 1px solid black;
        margin: 1em 0
    }

    .btn:focus{
        outline: none !important
    }

    .showtext{
        transition: all .2s ease-in
    }
   
`

export default function Profile(props) {

    const [show, setShow] = useState(false)

    const date = Date()
    const datey = date.toString()

    function toggleShow(){
        setShow(!show)
    }

    function downCaret(){
        return (
          <svg
            width="1em"
            height="1em"
            viewBox="0 0 16 16"
            class="bi bi-caret-down-fill"
            fill="currentColor"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M7.247 11.14L2.451 5.658C1.885 5.013 2.345 4 3.204 4h9.592a1 1 0 0 1 .753 1.659l-4.796 5.48a1 1 0 0 1-1.506 0z" />
          </svg>
        );
    }

    function upCaret(){
        return (
          <svg
            width="1em"
            height="1em"
            viewBox="0 0 16 16"
            class="bi bi-caret-up-fill"
            fill="currentColor"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M7.247 4.86l-4.796 5.481c-.566.647-.106 1.659.753 1.659h9.592a1 1 0 0 0 .753-1.659l-4.796-5.48a1 1 0 0 0-1.506 0z" />
          </svg>
        );
    }

    const {title, note, img, _id} = props

    return (
      <Wrapper>
        <div className=" w-75 mx-auto mt-5">
          <h5>{title}</h5>
          <div className="underline"></div>
          <p>Created on {datey}</p>

          <div
            className="showtext"
            style={show ? { display: "block" } : { display: "none" }}
          >
            <p>
              {note}
            </p>
            <img
              className="w-100  mb-3 rounded"
              src={img}
              alt=""
            />
            <Button className="w-50" variant="danger" onClick={() => props.deleteNote(_id)}>
              Delete
            </Button>
          </div>
          <Button style={{borderRadius: "25% !important"}} className="mt-2 rounded" onClick={toggleShow}>{show ? upCaret() : downCaret()}</Button>
        </div>
      </Wrapper>
    );
}
