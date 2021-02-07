import React, {useContext} from "react"
import Board from "./Board"
import BoardForm from "./BoardForm"
import {UserContext} from "../context/UserProvider"

export default function BoardList(props){
    const {addBoard} = props
    const {boards} = useContext(UserContext)
    return(
        <div>
            <BoardForm submit={addBoard} btnText="Add Board"/>
            {boards.map((board) => (
                <Board
                {...board}
                key={board.boardName}
                 />
            ))}
        </div>
    )
}