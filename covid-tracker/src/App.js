import React, { Component } from "react";
import axios from "axios";
import Search from "./components/Search";
import Case from "./components/Case";

const API_KEY = "41f3f91b13mshaa0652a8c3b96f1p165abcjsn42e270cab71c";

export default class App extends Component {
  state = {
    cases: [],
    loading: false,
    alert: null,
  };

  searchCases = async text => {
    this.setState({ case: true });
    console.log(text);
    const res = await axios.get(
      `https://covid-19-data.p.rapidapi.com/report/country/name?q=${text}&rapidapi-key=${API_KEY}`
    );
    console.log(res.data);
    this.setState({ cases: res.data.items, loading: false });
  };

  clearCases = () => this.setState({ cases: [], loading: false });

  setAlert = (msg, type) => {
    this.setState({ alert: { msg, type } });
  };

  setAlert = (msg, type) => {
    this.setState({ alert: { msg, type } });
  };

  render() {
    return (
      <div className="App">
        <Search
          searchCases={this.searchCases}
          clearCases={this.clearCases}
          showClear={this.state.cases.length > 0 ? true : false}
          setAlert={this.setAlert}
        />
        <Case loading={this.state.loading} cases={this.state.cases} />
      </div>
    );
  }
}
