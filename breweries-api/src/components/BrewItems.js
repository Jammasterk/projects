import React from "react"
import PropTypes from "prop-types"

const BrewItems = ({brewery: {name, brewery_type, street, city, state, postal_code, website_url, phone}}) => {
    return(
        <div>
            <h2>{name}</h2>
            <h5>{brewery_type}</h5>
            <small>{street}</small><small>{city}</small><small>{state}</small>
            <small>{postal_code}</small>
            <small>{phone}</small>
            <a href={website_url}>Visit Site</a>
        </div>
    )
}

BrewItems.propTypes = {
    brewery: PropTypes.object.isRequired,
}

export default BrewItems