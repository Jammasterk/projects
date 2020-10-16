import React from "react"
import Auth from "./Auth"
import AuthForm from "./AuthForm"

export  default function LoginPage(props){
    const {username, password} = props

    return(
        <>
        <AuthForm username={username} password={password}/>
        <Auth />
        </>
    )
}