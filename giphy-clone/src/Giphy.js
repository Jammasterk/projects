import React, { Component } from 'react'
import axios from "axios"
import MemeForm from "./MemeForm.js"
const API_KEY = "yw8cwBXgmbDqwljakyTvO2wNvqxRsIZN";

class Giphy extends Component{

        state ={
            gif: [],
            title: undefined,
            url: undefined
        }
    

    getMeme = async e =>{  
        e.preventDefault()
        const title = e.target.elements.title.value  
        axios
          .get(
            `http://api.giphy.com/v1/gifs/search?q=${title}&api_key=${API_KEY}&limit=10`
          )
          .then((response) => {
            console.log(response.data)
            this.setState({
              gif: response.data,
              title: response.data.title,
              url: response.data.url
            });
          })
          .catch((error) => {
            console.log(error);
          });
    }

    render(){
        // console.log(this.state.gif)
        return(
            <div>
              <MemeForm getMeme={this.getMeme} {...this.state}/>
            </div>
        )
    }
}

export default Giphy
