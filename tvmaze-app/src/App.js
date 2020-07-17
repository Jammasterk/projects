import React, { Component } from 'react'
import axios from "axios"
import Search from "./Search"
import Show from "./Show"

export class App extends Component {

    state = {
        shows: [],
        loading: false,
        alert: null
    }

    searchTitle = async text => {
        this.setState({show: true})
        console.log(text)
        const res = await axios.get(`http://api.tvmaze.com/search/shows?q=${text}`
        );
        this.setState({shows: res.data.items, loading: false})
    }

    clearShows = () => this.setState({shows: [], loading: false})

    setAlert = (msg, type) => {
        this.setState({alert: {msg, type}})
    }

    render() {
        return (
            <div>
                <Search 
                searchTitle={this.searchTitle}
                clearShows={this.clearShows}
                setAlert={this.setAlert}
                />
                <Show loading={this.state.loading} shows={this.state.shows}/>
            </div>
        )
    }
}

export default App
