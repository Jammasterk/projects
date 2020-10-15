import React from 'react'
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
   
`

export default function Profile() {

    const date = Date()
    const datey = date.toString()

    return (
      <Wrapper>
        <div className=" w-75 mx-auto mt-5">
          <h5>Note 1</h5>
          <div className="underline"></div>
          <p>Created on {datey}</p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi id
            quae minus eos, doloremque sit esse illum repellendus perferendis
            tempore quos totam consequuntur fugiat veniam!
          </p>
          <img
            className="w-100  mb-3 rounded"
            src="https://images.pexels.com/photos/2771135/pexels-photo-2771135.jpeg?auto=compress&cs=tinysrgb&h=650&w=940"
            alt=""
          />
          <Button className="w-50" variant="danger">
            Delete
          </Button>
        </div>
      </Wrapper>
    );
}
