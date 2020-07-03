import React from "react"
import PropTypes from "prop-types"

const GifItems = ({gif: {url}}) => {
    return(
        <div>
            <a href={url}>Gif</a>
        </div>
    )
}

GifItems.propTypes = {
    gif: PropTypes.object.isRequired,
}

export default GifItems