import React from "react"
import Spinner from "./Spinner"
import TrackItems from "./TrackItems"
import PropTypes from "prop-types"

const Track = ({results, loading}) => {
    if(loading){
        return <Spinner />
    }else {
        return(
            <div>
                {results.map(result => (
                    <TrackItems key={result.id} result={result}/>
                ))} 
                {/* <TrackItems /> */}
            </div>
        )
    }
}

Track.propTypes = {
    // results: PropTypes.array.isRequired,
    loading: PropTypes.bool.isRequired,
}

export default Track