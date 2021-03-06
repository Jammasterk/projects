import React, { Component } from 'react'
import PropTypes from "prop-types"

export class Search extends Component {

    state = {
        text: ''
    }

    static propTypes = {
        searchTracks: PropTypes.func.isRequired,
        showClear: PropTypes.bool.isRequired,
        setAlert: PropTypes.func.isRequired,
    }

    onChange = e => this.setState({[e.target.name]: e.target.value})

    onSubmit = e => {
        e.preventDefault()
        if(this.state.text === ''){
            this.props.setAlert('Enter a search term', "light")
        }else{
            this.props.searchTracks(this.state.text)
            this.setState({text: ''})
        }
    }

    render() {
        return (
            <div>
                <form action="" onSubmit={this.onSubmit}>
                    <input 
                    type="text"
                    value={this.state.text}
                    placeholder="Search..."
                    onChange={this.onChange}
                    />
                    <input 
                    type="submit" 
                    value="Search"
                    />
                </form>
                
            </div>
        )
    }
}

export default Search
