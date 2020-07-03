import React from 'react'
import PropTypes from "prop-types"

const ListItem = ({property: {rdc_web_url, city, state, line, postal_code, thumbnail, price, beds, baths}}) => {
    return(
        <div>
            <img src={thumbnail} alt=""/>
            <p>{line}</p>
            <p>{city}</p>
            <p>{state}</p>
            <p>{postal_code}</p>
            <p>{price}</p>
            <small>{beds}</small>
            <small>{baths}</small>
            <a href={rdc_web_url}>Details</a>
        </div>
    )
}

ListItem.propTypes = {
    property: PropTypes.object.isRequired
}



export default ListItem
