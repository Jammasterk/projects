import React from "react";
import SearchForm from "../components/SearchForm.js";

class Porn extends React.Component {
  constructor() {
    super();
    this.state = {
      searchTerm: "",
      porns: [],
      isFetchingPorn: false,
    };
    this.onSearchChange = this.onSearchChange.bind(this);
    this.SearchPorn = this.SearchPorn.bind(this);
  }

  SearchPorn() {
    this.setState({ isFetchingPorn: true });
    fetch(`https://steppschuh-json-porn-v1.p.rapidapi.com/search/?q=${this.state.searchTerm}`, {
      method: "GET",
      headers: {
        "x-rapidapi-host": "steppschuh-json-porn-v1.p.rapidapi.com",
        "x-rapidapi-key": "41f3f91b13mshaa0652a8c3b96f1p165abcjsn42e270cab71c",
        Accept: "application/json",
      },
    })
      .then((response) => response.json())
      .then((json) => {
        const porns = json.results;
        this.porns = json.porns;
        console.log("porns", this.porns);
        this.setState({
          porns,
          isFetchingPorn: false,
        });
      });
  }

  onSearchChange(value) {
    this.setState({ searchTerm: value });
  }

  renderPorn() {
    return (
      <ul>
        {this.state.porns &&
          this.state.porns.map((item) => <li key={item.id}>{item.title}</li>)}
      </ul>
    );
  }

  render() {
    // console.log('---Render---')
    return (
      <div>
        <SearchForm
          onFormSubmit={this.SearchPorn}
          onSearchValueChange={this.onSearchChange}
          isSearching={this.isFetchingPorn}
        />
        {this.state.isFetchingPorn ? "Searching" : this.renderPorn()}
        <p>{this.state.isFetchingPorn ? "Loading" : this.state.porns}</p>
      </div>
    );
  }
}

export default Porn;
