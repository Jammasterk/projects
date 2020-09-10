import React from "react"

const About = (props) => {
    const {outsideClick} = props
    return(
        <div onClick={outsideClick}>
            <h1>About Page</h1>
        </div>
    )
}

export default About