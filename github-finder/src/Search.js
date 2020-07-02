import React, { Component } from 'react'
import PropTypes from "prop-types"

export class Search extends Component {

    state={
        text: ''
    }

    static propTypes = {
        searchUsers: PropTypes.func.isRequired,
        clearUsers: PropTypes.func.isRequired,
        showClear: PropTypes.bool.isRequired,
        setAlert: PropTypes.func.isRequired,
    }

    onChange = e =>  this.setState({[e.target.name]: e.target.value})
    
    onSubmit = (e) =>{
        e.preventDefault()
        if(this.state.text === ""){
            this.props.setAlert('Please enter something', 'light')
        }else{

            this.props.searchUsers(this.state.text)
            this.setState({text: ''})
        }
    }

    render() {
        return (
          <div>
            <form onSubmit={this.onSubmit} action="" className="form">
              <input
                type="text"
                name="text"
                value={this.state.text}
                placeholder="Search..."
                onChange={this.onChange}
              />
              <br />
              <input
                type="submit"
                value="Search"
                className="btn-input btn-block"
              />
            {this.props.showClear && 
              <button
                className="btn btn_light btn_dark"
                onClick={this.props.clearUsers}
              >
                Clear
              </button>}
            </form>
          </div>
        );
    }
}

export default Search
