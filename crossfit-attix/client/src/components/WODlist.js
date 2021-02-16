import React, {useContext} from "react"
import WOD from "./WOD"
import WODForm from "./WODForm"
import {UserContext} from "../context/UserProvider"

export default function WODlist(props){
    const {wods} = props

    const {addWod, updateWod, deleteWod} = useContext(UserContext)

    return(
        <div>
            <WODForm
                submit={addWod}
                btnText="Add WOD"
             />
             {
                wods.map(wod => 
                    <WOD
                        {...wod}
                        key={wod.title}
                        deleteWod={deleteWod}
                        updateWod={updateWod}
                     />)}
        </div>
    )
}