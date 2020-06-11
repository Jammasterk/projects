import React from "react"

class MemeForm extends React.Component{
    constructor(){
        super()
        this.state = {
            // gif: ""
            title: "",
            url: ""
        }
    }

    render(){
        // console.log(this.props.url)
        return(
            <div>
                <form onSubmit={this.props.getMeme}>
                    <input type="text" name="title" placeholder="Search for Gif"/>
                    <button type="submit">Search</button>
                </form>
                <div>
                    <h1>{this.props.title}</h1>
                    <a href={this.props.url} alt=""></a>
                </div>
            </div>
        )
    }

}

export default MemeForm