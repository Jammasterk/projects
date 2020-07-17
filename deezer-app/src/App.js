import React, { Component } from 'react'
import axios from 'axios'
import Track from "./Track"
import Search from "./Search"
const API_KEY ='570a4a103a9fa511b252c7fac1bbc995'

export class App extends Component {

    state = {
        tracks: [],
        loading: false,
        alert: null
    }

    searchTracks = async text => {
        this.setState({track: true})
        console.log(text)
        const res = await axios.get(`https://api.deezer.com/search?q=${text}&apiKey=${API_KEY}`
        );
        this.setState({tracks: res.data.items, loading: false})
    }

    clearTracks = () => this.setState({tracks: [], loading: false})

    setAlert = (msg, type) => {
        this.setState({alert: {msg, type}})
    }

    render() {
        return (
            <div>
                <Search 
                searchTracks={this.searchTracks}
                showClear={this.state.tracks.length > 0 ? true : false}
                setAlert={this.setAlert}
                />
                <Track loading={this.state.loading} tracks={this.state.tracks}/>
                
            </div>
        )
    }
}

export default App
