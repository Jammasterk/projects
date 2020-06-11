import React, { Component } from "react";
import {Input, TextField, Button} from "@material-ui/core"

class SplashPage extends Component {

  render() {
    return (
      <form action="mailto:jaredmanwaring@me.com">
        <Input type="text" placeholder="First Name" />
        <Input type="text" placeholder="Last Name" />
        <br/>
        <TextField placeholder="Message" />
        <br/>
        <Button type="submit" variant="outlined">Submit</Button>
      </form>
    );
  }
}

export default SplashPage;
