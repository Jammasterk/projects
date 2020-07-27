import React from "react"
import styled from "styled-components"

    const Container = styled.div`
      h2 {
        color: #000;
      }
      .container {
        display: flex;
        margin: 20px auto;
        justify-content: center;
        font-family: "Heebo", sans-serif;
        width: 100%;
        top: 20em;
        background: #efecec;
      }

      .title-container {
        margin-left: 30px;
        width: 60%;
      }
      a {
        text-decoration: none;
        color: black;
        border: 1px solid green;
        padding: 6px;
        border-radius: 25px;
        margin: 16px 0 !important;
      }
      p {
        margin: 0;
      }
      h2 {
        margin: 0;
      }
      audio {
        margin-bottom: 12px;
      }

      .rank{
          color: #000
      }

      .album {
        margin-top: 12px;
      }

      img {
        width: 12em;
        height: 12rem !important;
      }

      audio {
        width: 15em;
      }

      audio:focus {
        outline: none;
      }

      .outer-container {
        margin-top: 15em;
      }

      @media only screen and (max-width: 490px) {
        .container {
          display: inline-block;
          margin: auto;
        }

        img {
          width: 24em;
          height: 24em !important;
        }
      }
    `;

const SearchMap = ({ title, artist, picture, preview, link, album, rank, artistTwo }) => {


  return (
    <div>
      <Container>
        <div className="outer-container">
          <div className="container">
            <img src={picture} alt="" />
            <div className="title-container">
              <h2>Song: {title}</h2>
              <p>
                {artistTwo}: {artist}
              </p>
              <br />
              <audio controls>
                <source src={preview} />
              </audio>
              <br />
              <a href={link}>Play on Deezer</a>
              <p className="album">Album: {album}</p>
              <small className="rank">Rank on Deezer: {rank}</small>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default SearchMap