import React from "react"
import PropTypes from "prop-types"

const ShowItems = ({show: {name, premiered, officialSite, medium}}) => {
    return(
        <div>
            <h2>{name}</h2>
            <small>{premiered}</small>
            <img src={medium} alt=""/>
            <a href={officialSite}>View More</a>
        </div>
    )
}

ShowItems.propTypes = {
    show: PropTypes.object.isRequired,
}

export default ShowItems