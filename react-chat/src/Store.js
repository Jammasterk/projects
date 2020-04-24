import React from 'react'
import io from "socket.io-client"

export const CTX = React.createContext()



const initState = {
  general: [
    { name: "jared", msg: "hello" },
    { name: "anthony", msg: "hello" },
    { name: "archer", msg: "hello" },
  ],
  topic2: [
    { name: "jared", msg: "hello" },
    { name: "jared", msg: "hello" },
    { name: "jared", msg: "hello" },
  ],
};

function  reducer(state, action){
    const {name, msg, topic } = action.payload
    switch(action.type){
    case 'RECEIVE_MESSAGE': 
    return{
        ...state,
        [topic]: [
            ...state[topic],
            {name, msg}
        ]
    }
    default: 
    return state
}
}


let socket;

function sendChatAction(socket, value){
    socket.emit('chat message', value)
}

export default function Store(props){
    const [allChats, dispatch] = React.useReducer(reducer, initState)
    
    if(!socket){
        socket = io(':3000');
        socket.on("chat message", function (msg) {
                dispatch({ type: "RECEIVE_MESSAGE", payload: msg });
                console.log(msg)
        });
    }
    const user = "Jared" + Math.random(100).toFixed(2) 


return(
    <CTX.Provider value={{allChats, sendChatAction, user}}>
        {props.children}
    </CTX.Provider>
    )
} 