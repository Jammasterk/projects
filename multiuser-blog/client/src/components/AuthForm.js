import React from "react"
import { MDBContainer, MDBRow, MDBCol, MDBInput } from 'mdbreact';

import styled from "styled-components"

const Wrapper = styled.div`
    .ripple{
        border: none;
        outline: none;
        padding: 1rem 2rem;
        font-size: 1rem;
        text-transform: uppercase;
        color: white;
        box-shadow: 0 0 4px #999;
        cursor: pointer;
    }

    .btn{
        background-color: hsl(200deg, 50%, 50%);
        transition: background 0.6s;
        background-position: center;
        background-image: radial-gradient(circle, transparent 1%, hsl(200deg, 50%, 55%) 1%);
        background-size: 11000%
    }
    .btn:active{
        background: hsla(200deg, 50%, 60%, 0.32);
        transition: background 0s;
        background-size: 100%
    }

`


export default function AuthForm(props){
const {
     handleChange,
     handleSubmit,
     errMsg,
     inputs : {
         username,
         password
     }
 } = props

 return (
   <Wrapper>
     <MDBContainer>
       <MDBRow>
         <MDBCol md="6">
           <form onSubmit={handleSubmit}>
             <p className="h5 text-center mb-4">Sign up</p>
             <div className="grey-text">
               <MDBInput
                 label="Username"
                 icon="user"
                 group
                 type="text"
                 validate
                 error="wrong"
                 success="right"
                 value={username}
                 name="username"
                 onChange={handleChange}
                 errMsg={errMsg}
               />
               <MDBInput
                 label="Your password"
                 icon="lock"
                 group
                 type="password"
                 validate
                 value={password}
                 name="password"
                 onChange={handleChange}
                 errMsg={errMsg}
               />
             </div>
             <div className="text-center">
               <button className="ripple btn">Submit</button>
               <p style={{color: "purple"}}>{errMsg}</p>
             </div>
           </form>
         </MDBCol>
       </MDBRow>
     </MDBContainer>
   </Wrapper>
 );
}