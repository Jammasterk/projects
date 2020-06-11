import React, {Component} from "react";
import axios from "axios"
import Form from "./Form"
require("dotenv").config();


class Search extends Component {
  constructor(){
    super()
    this.state = {
        picture: undefined,
        term: undefined,
        location: undefined,
        icon: undefined,
        display_name: undefined,
        url: undefined
    }
  }

  getShow = async e =>{ 
    e.preventDefault() 
    const term = e.target.name.value
    const country = e.target.location.value
    axios({
      method: "GET",
      url: `https://utelly-tv-shows-and-movies-availability-v1.p.rapidapi.com/lookup/`,
      headers: {
        "content-type": "application/octet-stream",
        "x-rapidapi-host":
          "utelly-tv-shows-and-movies-availability-v1.p.rapidapi.com",
        "x-rapidapi-key": "41f3f91b13mshaa0652a8c3b96f1p165abcjsn42e270cab71c",
        useQueryString: true,
      },
      params: {
        term: term,
      country: country
      },
    })
      .then((response) => {
        console.log(response);
        this.setState = {
          picture: response.data.picture,
          term: response.data.term,
          country: response.data.country,
          icon: response.data.icon,
          display_name: response.data.display_name,
          url: response.data.url,
        };
      })
      .catch((error) => {
        console.log(error);
      });
  }

 render(){
  return(
     <div>
       <Form getShow={this.getShow}{...this.state}/>
     </div>
    )
  }
}

export default Search;
