import React from "react"
import Board from "./Board"

export default function BoardList(props){
    const {boards} = props
    return(
        <div>
            {boards.map(board => <Board {...board} key={board._id} />)}
        </div>
    )
}