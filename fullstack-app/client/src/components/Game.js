import React from "react"
import styled from "styled-components"

const Wrapper = styled.div`
  background: #775ada;

  .wrapper {
    height: 100vh;
    width: 90%;
    margin: auto;
    background: #775ada;
    padding: 2em 0;
  }
  .container {
    margin: auto;
    height: 70vh;
    width: 80%;
    background: #775ada;
    border-radius: 5px;
    box-shadow: 9.91px 9.91px 15px #6c52c6, -9.91px -9.91px 15px #8262ee;
    position: relative;
  }

  .control {
    display: flex;
    position: absolute;
    bottom: 0;
    justify-content: space-around;
    width: 100%;
    margin-bottom: 2em;
  }

  .like-dislike {
    height: 75px;
    width: 75px;
    border-radius: 50%;
    background: #775ada;
    box-shadow: 9.91px 9.91px 15px #6c52c6, -9.91px -9.91px 15px #8262ee;
  }
  .far {
    font-size: 38px;
  }

  .smile {
    color: #17b978;
    vertical-align: middle;
    line-height: 95px;
    text-align: center;
  }
  .frown {
    color: #f85959;
    vertical-align: middle;
    line-height: 95px;
    text-align: center;
  }
  img {
    width: 100%;
    height: 70%;
    border-radius: 5px;
  }
  .profile-img {
    position: relative;
  }
  .info {
    position: absolute;
    top: 0;
    color: #f5f5f5;
    line-height: 6px;
    margin-left: 1em;
  }
`;

const Game = () => {

    return (
      <Wrapper>
        <div className="wrapper">
          <div className="container">
            <div className="profile-img">
              <img
                src="https://images.pexels.com/photos/4755265/pexels-photo-4755265.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
                alt=""
              />
              <div className="info">
                  <h5>Tiffany St. Louis</h5>
                  <p>Denver CO</p>
                  <p>Age 26</p>
              </div>
            </div>
            <div className="control">
              <div className="like-dislike smile">
                <i class="far fa-smile"></i>
              </div>
              <div className="like-dislike frown">
                <i class="far fa-frown"></i>
              </div>
            </div>
          </div>
        </div>
      </Wrapper>
    );
}

export default Game