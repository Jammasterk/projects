import React, {useContext, useState} from "react"
import UserForm from "./UserForm"
import UserList from "./UserList"
import {UserContext} from "../context/UserProvider"
import styled from "styled-components"

const Wrapper = styled.div`
  .margin {
    margin-left: 70px;
  }
  .neu{
    padding: 16px;
    background: #fff;
    border-radius: 50%;
    border-radius: 50%;
    background: #ffffff;
    box-shadow: 20px 20px 60px #d9d9d9, -20px -20px 60px #ffffff;
  }
`;

export default function NewAccount(){

    const [toggle, setToggle] = useState(false)
    const {
        user:{
            name
        },
        addProfile,
        profiles
    } = useContext(UserContext)

    function handleToggle(){
        setToggle(!toggle)
    }
    return (
      <Wrapper>
        <div>
          <h1 className="margin">Welcome {name}</h1>
          <h4 className="margin">Your account information</h4>
          <i className="" onClick={handleToggle} class="fas fa-plus margin neu"></i>
          <div
            className="transform"
            style={toggle ? { display: "block" } : { display: "none" }}
          >
            <UserForm addProfile={addProfile} />
          </div>
          <h4 className="margin">Your details</h4>
          <UserList profiles={profiles} />
        </div>
      </Wrapper>
    );
}