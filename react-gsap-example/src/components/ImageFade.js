import React, {useRef, useState} from "react"
import Close from "./close-up.jpg"
import {TimelineLite, Power2} from 'gsap'

function ImageFade(){
    let text = useRef(null)

    return (
      <div className="text" ref={el => text = el}>
        <h1>Bouncy Text</h1>
        <p>Gsap with a elastic animation</p>
      </div>
    );
}

export default ImageFade