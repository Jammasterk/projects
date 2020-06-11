import React from "react";
import SearchForm from "./SearchForm";


class Joke extends React.Component {
  constructor() {
    super();
    this.state = {
      searchTerm: "",
      jokes: [],
      isFetchingJoke: false,
    };

    this.onSearchChange = this.onSearchChange.bind(this);
    this.SearchJoke = this.SearchJoke.bind(this);
  }

  SearchJoke(limit = 20) {
    this.setState({ isFetchingJoke: true });
    fetch(
      `https://icanhazdadjoke.com/search?term=${this.state.searchTerm}&limit=${limit}`,
      {
        method: "GET",
        headers: {
          Accept: "application/json",
        },
      }
    )
      .then((response) => response.json())
      .then((json) => {
        const jokes = json.results;
        this.setState({
          jokes,
          isFetchingJoke: false,
        });
      });
  }

  onSearchChange(value) {
    this.setState({ searchTerm: value });
  }

  renderJoke() {
    return (
      <ul>
        {this.state.jokes.map((item) => (
          <li key={item.id}> {item.joke}</li>
        ))}
      </ul>
    );
  }

  render() {
    // console.log('---Render---')
    return (
      <div>
        <SearchForm
          onFormSubmit={this.SearchJoke}
          onSearchValueChange={this.onSearchChange}
          isSearching={this.state.isFetchingJoke}
          onSingleSearchClick={() => this.SearchJoke(1)}
        />

        {this.state.isFetchingJoke ? "Searching For Joke" : this.renderJoke()}
        <p>{this.state.isFetchingJoke ? "Loading Joke" : this.state.joke}</p>
      </div>
    );
  }
}

export default Joke;
