import React, { Component } from 'react'
import PropTypes from "prop-types"

export class Search extends Component {

    state= {
        text: ''
    }

    static propTypes = {
        searchShows: PropTypes.func.isRequired,
        clearShows: PropTypes.func.isRequired,
        setAlert: PropTypes.func.isRequired,
    }

    onChange = e => this.setState({[e.target.name]: e.target.value})

    onSubmit = e => {
        e.preventDefault()
        console.log(this.state.text)
        if(this.state.text === ''){
            this.props.setAlert("Please enter a show name", "light")
        }else{
            this.props.searchShows(this.state.text)
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
                    name='text'
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
