import React from 'react'
import styled from "styled-components"
import ProImage from "../assets/download.png"

const Wrapper = styled.div`
  .container {
    height: 100vh;
    position: absolute;
    padding: 0 !important
  }
  .upper {
    height: 375px;
    background: #29cdb5;
    width: 100vw;
  }
  .image {
    height: 200px;
    width: 200px;
    position: absolute;
    /* background: blue; */
    margin-top: 275px;
    margin-left: 100px;
    display: flex;
  }
  .profile-info {
    margin-top: 310px;
    margin-left: 350px;
    display: flex;
  }
  .cog {
    position: absolute;
    color: #707070;
    font-size: 24px;
    bottom: 0;
    right: 0;
    margin-bottom: -8px;
    /* margin-left: 18px */
  }
  img {
    width: 100%;
  }
  .img {
    width: 100%;
    display: flex;
  }
  h2,
  small {
    font-family: "Titillium Web", sans-serif;
    color: #010101
  }
  .icon {
    margin-left: 1em;
  }

  ul {
    list-style: none;
    display: flex;
    width: 450px;
    justify-content: space-around;
    margin-top: 85px;
    margin-left: 200px;
  }

  .soc-icon {
    font-size: 35px;
  }
  .middle,
  .end {
    margin-top: 170px;
    width: 80%;
    margin-left: 100px;
    border-left: 1px solid black;
    padding-left: 1.5em;
  }

  .bio {
    font-size: 30px;
    color: #707070;
    font-family: "Titillium Web", sans-serif;
  }
  i {
    color: #707070;
  }
  p {
    font-family: "Titillium Web", sans-serif;
  }

  h1 {
    font-family: "Titillium Web", sans-serif;
    color: #707070;
  }

  .board-img {
    width: 250px;
  }
  .text-info{
    color: #000
  }
`;

export default function User(props) {

    const {name, location, occupation, email, portfolio, bio, twitter, dribble, behance, linkedIn, avatar} = props

    return (
      <Wrapper>
        <div style={{margin: "none"}}>
          <div className="container">
            <div className="upper">
              <div className="img">
                <div className="image">
                  <img src={avatar} alt="" />
                  <a href="">
                    <i class=" cog fas fa-user-cog"></i>
                  </a>
                </div>
                <div className="profile-info">
                  <div className="text-info">
                    <h2>{name}</h2>
                    <small>Location: {location}</small>
                    <br />
                    <small>Occupation: {occupation}</small>
                    <br />
                    <small>Email: {email}</small>
                    <br />
                    <small>Portfolio: {portfolio}</small>
                  </div>
                  <ul className="socials">
                    <li>
                        <a href={twitter}>
                      <i className="soc-icon fab fa-twitter"></i>
                      </a>
                    </li>
                    <li>
                        <a href={dribble}>
                      <i className="soc-icon fab fa-dribbble"></i>
                      </a>
                    </li>
                    <li>
                        <a href={behance}>
                      <i className="soc-icon fab fa-behance"></i>
                      </a>
                    </li>
                    <li>
                        <a href={linkedIn}>
                      <i className="soc-icon fab fa-linkedin-in"></i>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="middle">
              <h1 className="bio">Bio</h1>
              <p>
               {bio}
              </p>
            </div>
            <div className="end">
              <h1>Boards</h1>
              <div className="individual-board">
                <img
                  className="board-img"
                  src="https://d27yqot8savz5t.cloudfront.net/screengrabs/images/000/013/663/medium.jpg"
                  alt=""
                />
                <div className="board-info"></div>
              </div>
            </div>
          </div>
        </div>
      </Wrapper>
    );
}