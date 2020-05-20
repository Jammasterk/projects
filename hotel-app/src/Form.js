import React, {Component} from "react"


class UserForm extends Component{
    constructor(){
        super()
        this.state  = {
            artist: "",
            title_short: "",
            preview: "",
            picture_medium: "",
            link: ""
        }
    }
    render(){
        console.log(this.props.name)
  return (
    <div>
      <form onSubmit={this.props.getSong}>
        <input type="text" name="artist" />
        <br />
        <input type="text" name="title" />
        <br />
        <input type="text" name="link"/>
        <button>Search Song</button>
      </form>
      <div>
          <h1>{this.state.name}</h1>
          <h3>{this.state.title_short}</h3>
          <audio src="">
              <source src={this.state.preview}/>
          </audio>
          <img src={this.state.picture_medium} alt=""/>
      </div>
    </div>
  );
}
};

export default UserForm;