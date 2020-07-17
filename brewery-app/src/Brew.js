import React, { useState, useEffect } from "react";
import Map from "./Map";

const Brew = () => {
  const [breweries, setBreweries] = useState([]);
  const [search, setSearch] = useState("");
  const [query, setQuery] = useState("");
  useEffect(() => {
    getBreweries();
  }, [query]);

  const getBreweries = async () => {
    const response = await fetch(
      `https://api.openbrewerydb.org/breweries/search?query=${query}`
    );
    const data = await response.json();
    setBreweries(data.hits);
    console.log(data);
  };

  const updateSearch = (e) => {
    setSearch(e.target.value);
    console.log(search);
  };

  const getSearch = (e) => {
    e.preventDefault();
    setQuery(search);
    setSearch("");
  };

  return (
    <div>
      <form onSubmit={getSearch}>
        <input
          type="text"
          value={query}
          onChange={updateSearch}
          placeholder="Find a Brewery..."
        />
        <button type="submit">Search</button>
      </form>
      <main>
        {breweries.map((brewery) => (
          <Map
            name={brewery.name}
            brewery_type={brewery.brewery_type}
            street={brewery.street}
            city={brewery.city}
            state={brewery.state}
            postal_code={brewery.postal_code}
            phone={brewery.phone}
            website_url={brewery.website_url}
          />
        ))}
      </main>
    </div>
  );
};

export default Brew;
