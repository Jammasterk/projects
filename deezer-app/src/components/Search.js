import React, { Component } from 'react'
import PropTypes from "prop-types"
import {TextField, Button, FormControl} from "@material-ui/core"

export class Search extends Component {

    state={
        text: ''
    }

    static propTypes = {
        searchTracks: PropTypes.func.isRequired,
        // clearTracks: PropTypes.func.isRequired,
        showClear: PropTypes.bool.isRequired,
        setAlert: PropTypes.func.isRequired,
    }

    onChange = e => this.setState({[e.target.name]: e.target.value})

    onSubmit = e => {
        e.preventDefault()
        if(this.state.text === ''){
            this.props.setAlert('Please enter a search term', 'light')
        }else{
            this.props.searchTracks(this.state.text)
            this.setState({text: ''})
        }
    }


    render() {
        return (
          <div>
              <h1 style={{textAlign: 'center', fontFamily: 'Londrina Outline, cursive'}}>Deezer Music Search</h1>
            <div style={{ width: "100%" }}>
              <form
                style={{ margin: "auto", position: "absolute", background: "#f45", display: 'inline-block' }}
                action=""
                onSubmit={this.onSubmit}
              >
                <TextField
                  type="text"
                  name="text"
                  value={this.state.text}
                  placeholder="Search"
                  onChange={this.onChange}
                />
                <Button
                  style={{ marginLeft: 25, marginTop: 10 }}
                  variant="outlined"
                  type="submit"
                  value="Search"
                >
                  Search
                </Button>
                {/* this.props.showClear && <button
                    onClick={this.props.clearResults}>
                    Clear
                        </button> */}
              </form>
            </div>
          </div>
        );
    }
}

export default Search
