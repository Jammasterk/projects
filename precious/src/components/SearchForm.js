import React from "react";

const SearchForm = (props) => {
  const onSubmit = (event) => {
    event.preventDefault();
    props.onFormSubmit();
  };

  return (
    <form onSubmit={onSubmit}>
      <input
        type="text"
        placeholder="search"
        onChange={(event) => props.onSearchValueChange(event.target.value)}
      />
      <button type="submit">Search</button>
    </form>
  );
};

export default SearchForm;
