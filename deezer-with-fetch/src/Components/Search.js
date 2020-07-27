import React, {useState, useEffect} from "react"
import SearchMap from "./SearchMap"
import {TextField, Button, Tooltip} from "@material-ui/core"
import styled from "styled-components"

const Wrapper = styled.div`
  .splash {
    background: url("https://images.pexels.com/photos/3760685/pexels-photo-3760685.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260");
    height: 35em;
    width: 100vw;
    background-size: cover;
  }
  .btn {
    width: 100%;
    margin-top: 16px;
  }

  .text-field {
    width: 100%;
  }
  .form {
    width: 15em;
    padding-top: 12em;
    margin: auto;
    font-family: "Heebo", sans-serif;
  }

  h1,
  small {
    color: #fff;
    font-size: .5em;
    width: 100%
  }

  h1{
      font-size: 2.5em
  }
`;

const Search = () => {

const API_KEY = "cfd5e5fd633377764d5c14725fc02a73";


const [results, setResults] = useState([])
const [search, setSearch] = useState('')
const [query, setQuery] = useState({})

            useEffect(() => {
                getTrack()
            }, [query])

const getTrack = async () => {
    const response = await fetch(
      `https://cors-anywhere.herokuapp.com/https://api.deezer.com/search?q=${query}&limit=50`,
      {
        method: "GET",
        headers: {
          app_id: API_KEY,
          limit: 50
        },
      }
    );
    const data = await response.json();
    setResults(data.data)
    console.log(data.data)
}

const updateSearch = (e) => {
    setSearch(e.target.value)
}

const getSearch = e => {
    e.preventDefault()
    setQuery(search)
    setSearch('')
}

        return (
            <Wrapper>
          <div className="splash">
              <form className="form" onSubmit={getSearch}>
                  <h1>Deezer Clone</h1>
                  <small>Created with Deezer music API</small>
                <TextField
                  className="text-field"
                  id="standard-basic"
                  label="Search artists or tracks"
                  type="text"
                  value={search}
                  onChange={updateSearch}
                />
                <br />
                <Button variant="outlined" 
                color="primary" 
                type="submit"
                className="btn"
                >
                  Search
                </Button>
              </form>
            {results.map((result) => (
              <SearchMap
                key={result.id}
                title={result.title}
                artistTwo={result.artist.type}
                artist={result.artist.name}
                picture={result.album.cover}
                preview={result.preview}
                link={result.link}
                album={result.album.title}
                rank={result.rank}
              />
            ))}
          </div>
            </Wrapper>
        );

}

export default Search