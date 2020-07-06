import React, { Component } from 'react'
import axios from "axios"
import Brew from "./components/Brew"
import Search from "./components/Search"
import "./index.css"

export class App extends Component {

    state ={
        by_city: [],
        loading: false,
        alert: null
    }

    searchBreweries = async text => {
        this.setState({by_city: true})
        console.log(text)
        const res = await axios.get(
          `https://api.openbrewerydb.org/breweries?q=${text}&per_page=60`
        );
        this.setState({by_city: res.data.items, loading: false});
    }

    clearBreweries = () => this.setState({by_city: [], loading: false})

    setAlert = (msg, type) => {
        this.setState({alert: {msg, type}})
    }

    render() {
        return (
            <div>
               <Search 
               searchBreweries={this.searchBreweries}
               clearBreweries={this.clearBreweries}
               setAlert={this.setAlert}
               /> 

               <Brew loading={this.state.loading} by_city={this.state.by_city} />
            </div>
        )
    }
}

export default App
