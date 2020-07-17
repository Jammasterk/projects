import React from "react"
import TrackItems from "./TrackItems"
import Spinner from "./Spinner"
import PropTypes from "prop-types"

const Track = ({tracks, loading}) => {
    
    if(loading){
        return <Spinner />
    }else{
        return(
            <div>
                {tracks.map(track => (
                    <TrackItems key={track.id} track={track} />
                ))}
            </div>
        )
    }
}

Track.propTypes = {
    tracks: PropTypes.array.isRequired,
    loading: PropTypes.bool.isRequired,
}

export default Track