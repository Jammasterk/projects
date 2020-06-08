import React, { Component } from 'react'

export class Form extends Component {
    constructor(){
        super()
        this.state = {
            picture: "",
            name: "",
            location: "",
            icon: "",
            display_name: "",
            url: "",
            id: ""
        }
    }


    render() {
        return (
          <div>
            <h1>Search</h1>
            <form onSubmit={this.props.getShow} key={this.state.id}>
              <input type="text" name="name" placeholder="Name" />
              <input
                type="text"
                name="location"
                placeholder="Location Optional"
              />
              <input type="submit"/>
            </form>
            <div>
                <h1>{this.props.name}</h1>
                <h6>{this.props.location}</h6>
                <img src={this.props.picture} alt=""/>
                <a href={this.props.url}/>
                <p>{this.props.display_name}</p>
                <img src={this.props.icon} alt=""/>
            </div>
          </div>
        );
    }
}

export default Form



