import React from "react"
import PropTypes from "prop-types"
import ShowItems from "./ShowItems"
import Spinner from "./Spinner"

const Show = ({shows, loading}) => {

    if(loading){
        return <Spinner />
    }else{
        return (
        <div>
            {shows.map(show => (
                <ShowItems key={show.id} show={show} />
            ))}
        </div>
        )
    }
}

Show.propTypes = {
    shows: PropTypes.array.isRequired,
    loading: PropTypes.bool.isRequired,
}

export default Show