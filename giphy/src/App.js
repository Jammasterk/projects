import React, {Component} from 'react'
import axios from "axios"
import Gif from "./Gif"
import Search from "./Search"
require('dotenv').config()


// const API_KEY = "S0lbBue5lKol2vsT27zaR9NDWXOFmT2Y";


export class App extends Component{


    state = {
        gifs: [],
        loading: false
    }

    searchGifs = async text => {
        this.setState({gif: true})
        console.log(text)
        const res = await axios.get(
          `https://api.giphy.com/v1/gifs/search?q=${text}&api_key=S0lbBue5lKol2vsT27zaR9NDWXOFmT2Y
          `
        );
        console.log(res.data)
        this.setState({gifs: res.data.items, loading: false})
    }

        clearGifs = () => this.setState({gifs: [], loading: false})

        setAlert = (msg, type) => {
            this.setState({alert: {msg, type}})
        }

    render(){
        return(
            <div>
                <Search 
                    searchGifs={this.searchGifs}
                    clearGifs={this.clearGifs}
                    /* showClear={this.showClear} */
                    setAlert={this.setAlert}
                />
                <Gif loading={this.state.loading} gifs={this.state.gifs}/>
            </div>
        )
    }
}

export default App
