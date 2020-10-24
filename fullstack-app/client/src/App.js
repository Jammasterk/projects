import React from 'react'
import Authform from "./components/Authform"
import Game from "./components/Game"
import Message from "./components/Message"
import Account from "./components/Account"
import "./index.css"

export default function App() {
    return (
        <div>
           <Authform /> 
           <Game />
           <Message />
           <Account />
        </div>
    )
}
