import React from "react"
import Spinner from "./Spinner"
import BrewItems from "./BrewItems"
import PropTypes from "prop-types"

const Brew = ({by_city, loading}) => {
    if(loading){
        return <Spinner />
    }else {
        return (
            <div>
                {by_city.map(location => (
                    <BrewItems key={location.id} location={location} />
                ))}
            </div>
        )
    }
}

Brew.propTypes = {
    by_city: PropTypes.array.isRequired,
    loading: PropTypes.bool.isRequired,
}

export default Brew