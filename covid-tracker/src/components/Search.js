import React from "react";
import { PropTypes } from "prop-types";

export class Search extends React.Component {
  state = {
    text: "",
  };

  static propTypes = {
    searchCases: PropTypes.func.isRequired,
    clearCases: PropTypes.func.isRequired,
    showClear: PropTypes.bool.isRequired,
    setAlert: PropTypes.func.isRequired,
  };

  onChange = (e) => this.setState({ [e.target.name]: e.target.value });

  onSubmit = (e) => {
    e.preventDefault();
    if (this.state.text === "") {
      this.props.setAlert("Please enter a Country");
    } else {
      this.props.searchCases(this.state.text);
      this.setState({ text: "" });
    }
  };

  render() {
    return (
      <form onSubmit={this.onSubmit}>
        <input
          type="text"
          name="text"
          value={this.state.text}
          placeholder="Search Country"
          onChange={this.onChange}
        />
        <input type="submit" vale="Search" />
        {this.props.showClear && (
          <button onClick={this.props.clearCases}>Clear</button>
        )}
      </form>
    );
  }
}

export default Search;
