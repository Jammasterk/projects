import React from "react"
import User from "./User"

export default function UserList(props){
    const {profiles} = props
    return(
        <div>
            {profiles.map(profile => <User {...profile} key={profile._id}/>)}
            {/* <User /> */}
        </div>
    )
}