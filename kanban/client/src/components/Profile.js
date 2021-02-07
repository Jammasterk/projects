import React, {useContext} from "react"
import BoardForm from "./BoardForm"
import BoardList from "./BoardList"
import { UserContext } from '../context/UserProvider.js'

export default function Profile(){
    const {
        user: {
            username
        },
        addBoard,
        boards
    } = useContext(UserContext);

    return(
        <div>
            <h1>Welcome {username}</h1>
            <h1>Create New Board</h1>
            <BoardForm addBoard={addBoard}/>
            <h4>Your Boards</h4>

            <BoardList boards={boards}/>
        </div>
    )
} 
