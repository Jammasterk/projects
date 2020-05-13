import React, { Component } from "react";
import axios from "axios";

const API_KEY = "41f3f91b13mshaa0652a8c3b96f1p165abcjsn42e270cab71c";

class Dictionary extends Component {

    state={
        
    }

  getDictionary = async (e) => {
    e.preventDefault();
    axios
      .get({
        method: "GET",
        url: "https://dictionary35.p.rapidapi.com/wordSearchEnglish",
        headers: {
          "content-type": "application/octet-stream",
          "x-rapidapi-host": "dictionary35.p.rapidapi.com",
          "x-rapidapi-key": API_KEY,
          useQueryString: true,
        },
        params: {
          query: "sword",
        },
      })
      .then(response => {
        console.log(response.data);
        this.setState({
            
        })
      }
      )
      .catch((error) => {
        console.log(error);
      });
  };
  render() {
    return <div>hi</div>;
  }
}

export default Dictionary;
