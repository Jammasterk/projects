import React, {Component} from 'react'
import axios from "axios"
import List from "./List"
import Search from "./Search"



export class App extends Component{


    state ={
        listings: [],
        loading: false
    }

    searchListings = async list => {
        this.setState({listing: true})
        console.log(list)
        const res = await axios.get(
          `https://realtor.p.rapidapi.com/properties/v2/list-for-sale?q=${list}&x-rapidapi-host=
          ${process.env.REACT_APP_REALTOR_CLIENT_ID}&x-rapidapi-key=${process.env.REACT_APP_REALTOR_CLIENT_SECRET}
          `
        );
        this.setState({listings: res.data.items, loading: false})
    }

    clearListings = () => this.setState({listings: [], loading: false})

    render(){
    return (
        <div>
            <Search 
                searchListings={this.searchListings}
                clearListings={this.clearListings}
                showClear={this.state.listings.length > 0 ? true : false}
                
            />
            <List loading={this.state.loading} listings={this.state.listings} />
        </div>
    )
    }
}

export default App
