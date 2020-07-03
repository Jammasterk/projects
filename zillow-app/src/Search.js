import React, { Component } from 'react'
import PropTypes from "prop-types"

export class Search extends Component {

    state = {
        text: ''
    }

    static propTypes = {
        searchListings: PropTypes.func.isRequired,
        clearListings: PropTypes.func.isRequired,
        showClear: PropTypes.bool.isRequired,
        setAlert: PropTypes.func.isRequired,
    }

    onChange = e => this.setState({[e.target.name]: e.target.value})

    onSubmit = e => {
        e.preventDefault()
        if(this.state.text === ''){
            this.props.setAlert('Please enter something')
        }else{
            this.props.searchListings(this.state.text)
            this.setState({text: ''})
        }
    }

    render() {
        return (
            <div>
               <form action="" onSubmit={this.onSubmit}>
                <input 
                type="text"
                name="text"
                value={this.state.text}
                placeholder="Search..."
                onChange={this.onChange}
                /> 
                <input 
                type="submit" 
                value="Search"/>   
               </form> 
            </div>
        )
    }
}

export default Search

