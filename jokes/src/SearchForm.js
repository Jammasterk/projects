import React from "react";

const SearchForm = (props) => {
  const onSubmit = (event) => {
    event.preventDefault();
    props.onFormSubmit();
  };
  return (
    <form onSubmit={onSubmit}>
      <h1>
        <span className="one">J</span>
        <span className="two">O</span>
        <span className="three">K</span>
        <span className="four">E</span>
        <span className="five">S</span>
      </h1>
      <input
        type="text"
        placeholder="Search Joke..."
        onChange={(event) => props.onSearchValueChange(event.target.value)}
      />
      <div className="buttons">
        <button disabled={props.isSearching}>Search</button>
        <button onClick={props.onSingleSearchClick}>I'm feeling funny</button>
      </div>
    </form>
  );
};
export default SearchForm;
