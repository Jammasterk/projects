import React from "react"
import PropTypes from "prop-types"

const TrackItems = ({track: {title, link, duration, preview, artist, album, picture_medium}}) => {
    return(
        <div>
            <h2>{title}</h2>
            <h3>{artist}</h3>
            <img src={picture_medium} alt=""/>
            <a href={preview}>Preview</a>
            <a href={link}>Play on Deezer</a>
            <small>{album}</small>
            <small>{duration}</small>
        </div>
    )
}

TrackItems.propTypes = {
    track: PropTypes.object.isRequired,
}

export default TrackItems