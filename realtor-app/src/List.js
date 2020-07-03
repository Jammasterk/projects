import React from "react"
import ListItem from "./ListItem"
import Spinner from "./Spinner"
import PropTypes from "prop-types"

const List = ({listings, loading}) => {
    if(loading){
        return <Spinner />
    }else{
        return(
            <div>
                {listings.map(list => (
                    <ListItem key={list.id} list={list}/>
                ))}
            </div>
        )
    }
}

List.propTypes = {
    listings: PropTypes.array.isRequired,
    loading: PropTypes.bool.isRequired,
}

export default List
