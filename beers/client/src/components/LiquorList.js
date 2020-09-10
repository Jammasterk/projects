import React, {useState, useEffect} from "react"
import Liquor from "./Liquor"
import AddLiquorForm from "./AddLiquorForm"
import Axios from "axios"


export default function LiquorList(){

const [liquors, setLiquors] = useState([])

    function getLiquor(){
        Axios.get('/liquors')
        .then(res => setLiquors(res.data))
        .catch(err => console.log(err.response.data.errMsg))
    }

    function addLiquor(newLiquor){
        Axios.post('/liquors', newLiquor)
        .then((res) => {
            setLiquors(prevLiquors => [...prevLiquors, res.data])
        })
        .catch(err => console.log(err))
    }

    function deleteLiquor(liquorId){
        Axios.delete(`/liquors/${liquorId}`)
        .then(res => {
            setLiquors(prevLiquor => prevLiquor.filter(liquor => liquor._id !== liquorId))
        })
        .catch(err => console.log(err))
    }

    function updateLiquor(updateLiquor, liquorId){
        Axios.put(`.liquors/${liquorId}`, updateLiquor)
        .then(res => console.log(res))
        .catch(err => console.log(err))
    }

    useEffect(() => {
        getLiquor()
    }, [])

    return(
        <div>
            <AddLiquorForm submit={addLiquor} btnText="Add Liquor" />
            {liquors.map(liquor => (
                <Liquor
                    {...liquor}
                    key={liquor.brand}
                    deleteLiquor={deleteLiquor}
                    updateLiquor={updateLiquor}
                 />
        ))}
        </div>
    )
}

