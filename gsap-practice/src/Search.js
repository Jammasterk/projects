import React, {useState, useEffect} from 'react'
import styled from "styled-components"
import SearchMap from "./SearchMap"

const Wrapper = styled.div`

@import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@200;300&display=swap');
font-family: 'Montserrat', sans-serif;
font-weight: 200

background: #107a8b;

.background{
    width: 100%;
  height: 100vh;
  background: #107a8b;
  margin: 0;
  position: absolute
}

.inner{
    max-width: 20%;
    // height: 60vh;
    padding-top: 1em;
    background: #be6a15;
    border-radius: 5px;
    background: #be6a15;
margin: auto;
    box-shadow: 9.91px 9.91px 15px #AD6013, -9.91px -9.91px 15px #CF7417;
    position: relative;
    margin-bottom: 2em
}

.inner:after{
    content: "";
  display: block;
  padding-bottom: 100%;
  margin: auto;
}

.bottom{
    padding-top: 1em;
    border-radius: 5px;
    background: linear-gradient(145deg, #0E6876, #128CA0);
    box-shadow: 9.91px 9.91px 15px #0F6F7E, -9.91px -9.91px 15px #118598;
    margin: auto;
    width: 90%;
    height: 50%;
    margin-top: 4em;
    padding-top: 4em
}

.bottom:after{
    content: "";
    display: block;
    // padding-bottom: 100%;
}

.inputs{
    width: 90%;
    margin: auto
}

input{
    width: 90%;
    height: 35px;
    margin: 1em 0;
    border: none;
    background: transparent;
    background: #107a8b;
    border-radius: 5px;
    box-shadow: inset 9.91px 9.91px 15px #0F6F7E, inset -9.91px -9.91px 15px #118598;
    padding-left: 8px;
    color:#f5eded;
}
.submit{
    width: 50%;
    height: 35px;
    border: none;
    background: #107a8b;
    border-radius: 5px,
    background: linear-gradient(145deg, #0E6876, #128CA0);
    box-shadow: 9.91px 9.91px 15px #0F6F7E, -9.91px -9.91px 15px #118598;
    // margin-top: 2em;
    color:#f5eded;
    font-weight: 200;
    font-size: 2vw

}

.submit:focus{
    outline: none;
    border: none
}

h1{
    font-size: 5vw;
    margin-left: 5%;
    color:#f5eded
}
`

export default function Search() {

    const [results, setResults] = useState([])
    const [search, setSearch] = useState('')
    const [query, setQuery] = useState({})

            

            const getTrack = async () => {
                const response = await fetch(
                  `https://cors-anywhere.herokuapp.com/https://api.deezer.com/search?q=${query}&limit=50`,
                  {
                    method: "GET",
                    headers: {
                      app_id: '503a4079441e995b33cccb7804e0d316',
                      limit: 50,
                    },
                  }
                );
                const data = await response.json();
                setResults(data.data)
                console.log(data)
            }
            
            const updateSearch = (e) => {
                setSearch(e.target.value)
            }
            
            const getSearch = e => {
                e.preventDefault()
                setQuery(search)
                setSearch('')
            }

            useEffect(() => {
                getTrack()
            }, [query])


    return (
        <div>
             <Wrapper>
        <div 
        className="background zoomIn">

            {/* <div className="inner"></div> */}
                <form className="bottom" onSubmit={getSearch}>
                <h1>Music</h1>
                <div className="inputs">
                <input 
                type="text" 
                value={search}
                onChange={updateSearch}
                />
                <br/>
                {/* <input type="text" /> */}
                <br/>
                <br/>
                <button className="submit" type="submit">Search</button>
                </div>
            </form>
        </div>
        </Wrapper>
        {results.map((result) => (
            <SearchMap
            key={result.id}
            title={result.title}
            artist={result.artist.name}
            picture={result.album.picture_big}
            />

        ))}
        </div>
    )
}
