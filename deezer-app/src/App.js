import React from 'react'
import axios from 'axios'
import Track from "./components/Track"
import Search from "./components/Search"

// const API_KEY = 'cfd5e5fd633377764d5c14725fc02a73'

export default class App extends React.Component{


    state = {
        results: [],
        loading: false,
        alert: null
    }

    searchTrack = async track => {
        this.setState({result: true})
        console.log(track)
        const res = await axios.get(
          `https://cors-anywhere.herokuapp.com/https://api.deezer.com/search?q=${track}&appId=${process.env.REACT_APP_DEEZER_CLIENT}`
        );
        this.setState({results: res.data.items, loading: false});
    }

    // Clear tracks from state

    clearResults = () => this.setState({results: [], loading: false})

    // Set an alert

    setAlert= (msg, type) => {
        this.setState({alert: {msg, type}})
    }

    render(){
    return (
        <div>
            <Search
            searchTracks={this.searchTrack}
            clearResults={this.clearResults}
            showClear={this.state.results > 0 ? true : false}
            setAlert={this.setAlert}
            />
            <Track loading={this.state.loading} results={this.state.results} />
        </div>
    )
    }
}
