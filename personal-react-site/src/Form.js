import React from 'react'


class Form extends React.Component {
  constructor() {
    super();
    this.state = {
      name: "",
      country: "",
      description: "",
      temp: "",
      icon: "",
      unit: "f"
    };
  }


  render() {
      console.log(this.props.icon)
    return (
      <div className="body">
        <h1 className="title">Current Weather</h1>
        <form onSubmit={this.props.getWeather}>
          <input
            type="text"
            name="city"
            placeholder="City"
            autoComplete="off"
          />
          <input
            type="text"
            name="country"
            placeholder="State"
            autoComplete="off"
          />
          <button>Get Weather</button>
        </form>
        <div className="result">
          <h3>{this.props.city}</h3>
          <h1>{this.props.temp}</h1>
          <img
            src={`http://openweathermap.org/img/wn/${this.props.icon}@2x.png`}
            alt=""
          />
          <h3>{this.props.description}</h3>
        </div>
      </div>
    );
  }
}

export default Form

