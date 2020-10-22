import React from 'react'
import AudioPlayer from 'react-h5-audio-player';
import 'react-h5-audio-player/lib/styles.css';
import styled from "styled-components"

const Wrapper = styled.div`

background: #dee1ec;
@import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@200&display=swap');
    height: 100vh;
    
    
    .container{
        padding-top: 1em
    }
    
    form{
        display: flex;
        margin: auto;
        padding: 1.5em;
        width: 85%;
        border: 1px solid #be6a15;
        padding-top: 1.5em;
        background: #dee1ec;
        border-radius: 5px;
        box-shadow: 16.52px 16.52px 15px #CACDD7, -16.52px -16.52px 15px #F2F5FF;
    }
    
    
    h4, p{
        font-family: 'Montserrat', sans-serif;
        margin-left: 10%;
        margin-bottom: 1em
        }

.player {
    width: 70%;
    border-radius: 5px;
    box-shadow: 16.52px 16.52px 15px #CACDD7, -16.52px -16.52px 15px #F2F5FF;
    padding-left: 1em;
    padding-top: 1em;
    padding-bottom: 1em
}

.rhap-container{
    background: #dee1ec
}

img{
    width: 25%;
    border-radius: 5px;
    box-shadow: 16.52px 16.52px 15px #CACDD7, -16.52px -16.52px 15px #F2F5FF;
    margin-right: 1.5em
}

@media only screen and (max-width: 600px) {
    form{
        display: block
    }
    img{
        width: 100%;
        margin: 0 auto
    }
    .audio-player{
        width: 100% !important
    }
    .player{
        margin-top: 4em
        padding: .5em 1em;
    }
  }
    
`

export default function SearchMap({title, artist, picture_big}) {

    const Player = () => (
        <AudioPlayer
        className="audio-player"
          src="https://cdns-preview-1.dzcdn.net/stream/c-13039fed16a173733f227b0bec631034-12.mp3"
          onPlay={e => console.log("onPlay")}
          style={{
              width: '90%',
              margin: 'auto',
              background: "transparent",
              border: "none"
          }}
          // other props here
        />
      );


    return (
        <Wrapper>
        <div className="container">
            <form>
            <img src={picture_big} />
            <div className="player">
                <h4>Artist: {artist}</h4>
                <p>Song: {title}</p>
            <Player />
            </div>
            </form>
        </div>
        </Wrapper>
    )
}
