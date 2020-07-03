import React, {Component} from "react"
import PropTypes from "prop-types"

export class Search extends Component{
    state ={
        city: ''
    }

    static propTypes = {
        searchListings: PropTypes.func.isRequired,
        clearListings: PropTypes.func.isRequired,
        showClear: PropTypes.bool.isRequired,
        // setAlert: PropTypes.func.isRequired,
    }

    onChange = e => this.setState({[e.target.name]: e.target.value})

    onSubmit = (e) => {
        e.preventDefault()
        if(this.state.city === ""){
            this.props.setAlert('Please enter a search')
        }else{
            this.props.searchListings(this.state.text)
            this.setState({city: ''})
        }
    }

    render(){
        return(
            <div>
                <form action="" onSubmit={this.onSubmit}>
                    <input 
                    type="text"
                    name="city"
                    value={this.state.city}
                    placeholder="Search..."
                    onChange={this.onChange}
                    />
                    <br/>
                    <input 
                    type="submit"
                    value='Search'
                    />
                    {this.props.showClear && <button onClick={this.props.clearListings}>
                            Clear
                        </button>}
                </form>
            </div>
        )
    }
}

export default Search