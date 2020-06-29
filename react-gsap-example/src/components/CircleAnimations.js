import React, {useRef, useEffect, useState} from "react"
import {TweenMax, Power3} from "gsap"

function CircleAnimation(){
    let app = useRef(null)
    let circle = useRef(null)
    let red = useRef(null)
    let blue = useRef(null)
    let [state, setState] = useState(false)

    const handleExpand = () => {
        TweenMax.to(red, .8, {width: 200, height: 200, ease: Power3.easeOut})
        setState(true)
    }
     const handleShrink = () => {
       TweenMax.to(red, .8, { width: 75, height: 75, ease: Power3.easeOut });
       setState(false)
     };
    useEffect(() => {
        TweenMax.to(app, 0, {css: {visibility: "visible"}})
        TweenMax.staggerFrom([app, circle, red, blue], 
          .8, {
          opacity: 0,
          x: 40,
          ease: Power3.easeOut,
          
        },
        .2);
    }, [])

    return (
      <div ref={(el) => (app = el)} className="circle-container">
        <div
          ref={(el) => (circle = el)}
          className="circle"
        ></div>
        <div
          onClick={state !== true ? handleExpand : handleShrink}
          ref={(el) => (red = el)}
          className="circle red"
        ></div>
        <div
          ref={(el) => (blue = el)}
          className="circle blue"
        ></div>
      </div>
    );
}

export default CircleAnimation