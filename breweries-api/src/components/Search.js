import React, { Component } from 'react'
import PropTypes from "prop-types"

export class Search extends Component {

    state = {
        text: ''
    }

    static propTypes = {
        searchBreweries: PropTypes.func.isRequired,
        clearBreweries: PropTypes.func.isRequired,
        // showClear: PropTypes.bool.isRequired,
        setAlert: PropTypes.func.isRequired,
    }

    onChange = e => this.setState({[e.target.name]: e.target.value})

    onSubmit = e => {
        e.preventDefault()
        if(this.state.text === ""){
            this.props.setAlert('Please enter a location', "light")
        }else{
            this.props.searchBreweries(this.state.text)
            this.setState({text: ''})
        }
    }

    render() {
        return (
            <div className="container">
               <form action="" onSubmit={this.onSubmit}>
                    <input
                    className="input" 
                    type="text"
                    name="text"
                    value={this.state.text}
                    placeholder="City"
                    onChange={this.onChange}
                    /> 
                    <input
                    className="button" 
                    type="submit" 
                    value="Search"
                    />  
                </form> 
            </div>
        )
    }
}

export default Search
