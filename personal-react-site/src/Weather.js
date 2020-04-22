import React, { Component } from "react"
import axios from "axios"
import Form from "./Form"

const API_key = "ae36266d31e87bb60dd9265c9f72c9b7";

class Weather extends Component {
  state = {
    city: undefined,
    country: undefined,
    temp: undefined,
    icon: undefined,
    description: undefined
  };

  getWeather = async e => {
    e.preventDefault();
    const city = e.target.elements.city.value;
    const country = e.target.elements.country.value;
    axios
      .get(
        `http://api.openweathermap.org/data/2.5/weather?q=${city},${country}&APPID=${API_key}&units=imperial`
      )
      .then(response => {
        console.log(response.data);
        this.setState({
          temp: response.data.main.temp,
          city: response.data.name,
          country: response.data.sys.country,
          description: response.data.weather[0].description,
          icon: response.data.weather[0].icon
        });
      })
      .catch(error => console.log(error));
  };



  render() {
    return (
      <div>
        <Form getWeather={this.getWeather} {...this.state} />
      </div>
    );
  }
}

export default Weather