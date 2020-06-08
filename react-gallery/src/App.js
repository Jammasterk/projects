import React from "react";
import UserForm from "./components/UserForm";
import "./styles.css";
import axios from "axios";

class App extends React.Component {
  state = {
    repos: null,
  };

  getUser = (e) => {
    e.preventDefault();
    const user = e.target.elements.username.value;
    if (user) {
      axios.get(`https://api.github.com/users/${user}`).then((res) => {
        const repos = res.data.public_repos;
        this.setState({ repos });
      });
    } else return;
  };

  render() {
    return (
      <div>
        <UserForm getUser={this.getUser} />
        {this.state.repos ? (
          <p>Number of Repos: {this.state.repos}</p>
        ) : (
          <p>Please enter Username</p>
        )}
      </div>
    );
  }
}

export default App;
