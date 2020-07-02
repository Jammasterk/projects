
import React, { Component } from 'react'
import Navbar from "./Navbar"
import User from "./User"
import Search from "./Search"
import axios from 'axios'
import "./App.css"






export class App extends Component {
    state ={
        users: [],
        loading: false
    }

    searchUsers = async text => {
        this.setState({user: true})
        console.log(text)
        const res = await axios.get(
          `https://api.github.com/search/users?q=${text}&client_id=
          ${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=
          ${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`
        );
        this.setState({ users: res.data.items, loading: false });

    }

    // Clear users from state

    clearUsers = () => this.setState({users: [], loading: false})

    render() {
        return (
            <div>
                
            <Navbar />
            <Search searchUsers={this.searchUsers} clearUsers={this.clearUsers} showClear={this.state.users.length > 0 ? true : false}/>
             <User loading={this.state.loading} users={this.state.users}/>
            </div>
        )
    }
}

export default App
