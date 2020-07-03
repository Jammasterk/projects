import React from "react"
import PropTypes from "prop-types"
import GifItems from "./GifItems"
import Spinner from "./Spinner"

const Gif = ({gifs, loading}) => {

    if(loading){
        return <Spinner />
    }else{
        return (
            <div style={userStyle}>
                {gifs.map(gif => (
                    <GifItems key={gif.id} gif={gif}/>
                ))}
            </div>
        )
    }
}

Gif.propTypes = {
    gifs: PropTypes.array.isRequired,
    loading: PropTypes.bool.isRequired,
}

const userStyle = {
    display: 'grid',
    gridTemplateColumns: 'repeat(3, 1fr'
}

export default Gif
