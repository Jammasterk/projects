import React from 'react'
import PropTypes from "prop-types"

const ListItems = ({listing: {address, price, bedroom_count, bathroom_count, size, property_url, agent}}) => {
    return(
        <div>
            <h3>{address}</h3>
            <p>{price}</p>
            <small>{bedroom_count}</small>
            <small>{bathroom_count}</small>
            <small>{size}</small>
            <a href={property_url}>Property</a>
            <small>{agent}</small>

        </div>
    )
}

ListItems.propTypes = {
    listing: PropTypes.object.isRequired
}

export default ListItems