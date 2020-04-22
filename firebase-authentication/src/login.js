import React, {Component} from "react"

class Login extends Component{
    constructor(props){
        super(props)
        this.state ={
            email: '',
            password: ''
        }
    }

    handleChange(e){
        this.setState({[e.target.name]: e.target.value})
    }

    render(){
        return (
          <form action="">
            <div>
              <label htmlFor="">Email Address</label>
              <input
                type="text"
                placeholder="Email Address"
                value={this.state.email}
                onChange={this.handleChange}
              />
              <small>We'll never share you information with anyone else</small>
            </div>
            <div>
              <label htmlFor="">Password</label>
              <input
                type="text"
                placeholder="Password"
                value={this.state.password}
                onChange={this.handleChange}
              />
            </div>
            <button type="submit" onSubmit={this.login}>
              Login
            </button>
            <button type="submit" onSubmit={this.signup}>
              Signup
            </button>
          </form>
        );
    }
}

export default Login