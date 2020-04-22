import React from 'react'

export default function Store(props){
    return(
        <div>
            <div>
                <h1>{props.item.name}</h1>
                <p>{props.item.description}</p>
                <img src={props.item.imgUrl} alt="product data"/>
                <h4>{props.item.price}</h4>
            </div>
        </div>
    )
}