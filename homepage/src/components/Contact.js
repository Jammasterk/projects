import React, { Component} from 'react'
import {Button, TextField} from "@material-ui/core"
export class Contact extends Component {

    
    render() {
        return (
          <form>
            <h1>Contact us</h1>
            <div className="social">
              <button onClick={this.handleChange} type="submit">
                Facebook
              </button>
              <button type="submit">Twitter</button>
            </div>
            <div className="upperInput">
              <TextField type="text" label="'First name" />
              <TextField type="text" label="'Last name" />
            </div>
            <div className="lowerInputs">
              <TextField type="text" label="Email" />
              <TextField type="text" label="'Message" />
              <br />
              <Button color="primary" w-50 type="submit">
                Create Account
              </Button>
            </div>
          </form>
        );
    }
}

export default Contact
