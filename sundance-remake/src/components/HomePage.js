import React from 'react'
import SplashImage from "../assets/woman-finger-glasses.jpg"

export function HomePage() {
    return (
        <div>
           <img style={{height: '100vh', width: "100vw", backgroundSize: "cover"}} src={SplashImage} alt=""/>
        </div>
    )
}

export default HomePage
