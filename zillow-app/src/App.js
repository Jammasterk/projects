import React, { Component } from 'react'
import axios from "axios"
import Search from "./Search"
import List from "./List"


const APP_ID = 'X1-ZWz1hiqiaku2ob_1pt0f'

export class App extends Component {

    state ={
        listings: [],
        loading: false
    }

    searchListings = async item => {
        this.setState({listing: true})
        console.log(item)
        const res = await axios.get(
          `http://www.zillow.com/webservice/GetSearchResults.htm?q=${item}&zwsid=${APP_ID}`
        )
        console.log(res.data)
        this.setState({listings: res.data.items, loading: false})
    }

    clearListings = () => this.setState({listings: [], loading: false})

    setAlert = (msg, type) => {
        this.setState({alert: {msg, type}})
    }

    render() {
        return (
            <div>
               <Search 
                searchListings={this.searchListings}
                clearListings={this.searchListings}
                showClear={this.state.listings.length > 0 ? true : false}
                setAlert={this.setAlert}
               /> 
               <List loading={this.state.loading} listings={this.state.listings} />
            </div>
        )
    }
}

export default App

