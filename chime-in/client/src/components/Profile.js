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
    background: blue;
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

export default function Profile() {

    function cog(){
        return (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill="currentColor"
            class="bi bi-gear"
            viewBox="0 0 16 16"
          >
            <path d="M8 4.754a3.246 3.246 0 1 0 0 6.492 3.246 3.246 0 0 0 0-6.492zM5.754 8a2.246 2.246 0 1 1 4.492 0 2.246 2.246 0 0 1-4.492 0z" />
            <path d="M9.796 1.343c-.527-1.79-3.065-1.79-3.592 0l-.094.319a.873.873 0 0 1-1.255.52l-.292-.16c-1.64-.892-3.433.902-2.54 2.541l.159.292a.873.873 0 0 1-.52 1.255l-.319.094c-1.79.527-1.79 3.065 0 3.592l.319.094a.873.873 0 0 1 .52 1.255l-.16.292c-.892 1.64.901 3.434 2.541 2.54l.292-.159a.873.873 0 0 1 1.255.52l.094.319c.527 1.79 3.065 1.79 3.592 0l.094-.319a.873.873 0 0 1 1.255-.52l.292.16c1.64.893 3.434-.902 2.54-2.541l-.159-.292a.873.873 0 0 1 .52-1.255l.319-.094c1.79-.527 1.79-3.065 0-3.592l-.319-.094a.873.873 0 0 1-.52-1.255l.16-.292c.893-1.64-.902-3.433-2.541-2.54l-.292.159a.873.873 0 0 1-1.255-.52l-.094-.319zm-2.633.283c.246-.835 1.428-.835 1.674 0l.094.319a1.873 1.873 0 0 0 2.693 1.115l.291-.16c.764-.415 1.6.42 1.184 1.185l-.159.292a1.873 1.873 0 0 0 1.116 2.692l.318.094c.835.246.835 1.428 0 1.674l-.319.094a1.873 1.873 0 0 0-1.115 2.693l.16.291c.415.764-.42 1.6-1.185 1.184l-.291-.159a1.873 1.873 0 0 0-2.693 1.116l-.094.318c-.246.835-1.428.835-1.674 0l-.094-.319a1.873 1.873 0 0 0-2.692-1.115l-.292.16c-.764.415-1.6-.42-1.184-1.185l.159-.291A1.873 1.873 0 0 0 1.945 8.93l-.319-.094c-.835-.246-.835-1.428 0-1.674l.319-.094A1.873 1.873 0 0 0 3.06 4.377l-.16-.292c-.415-.764.42-1.6 1.185-1.184l.292.159a1.873 1.873 0 0 0 2.692-1.115l.094-.319z" />
          </svg>
        );
    }

    return (
      <Wrapper>
        <div style={{margin: "none"}}>
          <div className="container">
            <div className="upper">
              <div className="img">
                <div className="image">
                  <img src={ProImage} alt="" />
                  <a href="">
                    <i class=" cog fas fa-user-cog"></i>
                  </a>
                </div>
                <div className="profile-info">
                  <div className="text-info">
                    <h2>Jarvis Thomas</h2>
                    <small>Occupation: UI/UX Designer</small>
                    <br />
                    <small>Location: Denver, CO</small>
                    <br />
                    <small>Email: jarvisthomas@icloud.com</small>
                    <br />
                    <small>Portfolio: jarvisthomas.com</small>
                  </div>
                  <ul className="socials">
                    <li>
                      <i class="soc-icon fab fa-twitter"></i>
                    </li>
                    <li>
                      <i class="soc-icon fab fa-dribbble"></i>
                    </li>
                    <li>
                      <i class="soc-icon fab fa-behance"></i>
                    </li>
                    <li>
                      <i class="soc-icon fab fa-linkedin-in"></i>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="middle">
              <h1 className="bio">Bio</h1>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio
                quas repellendus nam dolore libero sapiente id magni eius
                necessitatibus incidunt rem, veniam maiores quo explicabo itaque
                nemo autem cum quos error? Velit quibusdam ducimus porro ut quod
                placeat. Voluptatem, labore animi nihil debitis odio et vel
                officia fugiat blanditiis accusamus quis officiis incidunt
                ullam, repellat neque quam ab optio minima ea hic ratione
                eveniet corrupti porro. Culpa nulla ipsa tempora voluptate
                minima, a, in velit dolores facere nesciunt rem nam fuga magnam
                fugiat voluptatem consequatur quae sequi. Adipisci aut quae
                sapiente, reprehenderit dolorem, exercitationem molestiae,
                eligendi veniam accusantium voluptatum earum illo animi alias
                est numquam maxime. Quae distinctio natus molestias modi
                suscipit, velit explicabo dolorum provident quasi! Deleniti
                facilis aut magni modi delectus molestiae cum, quasi eius ea est
                fugiat recusandae error minima, cupiditate aspernatur quia,
                illum laboriosam ducimus libero! Alias similique nobis
                perspiciatis dolores iste debitis nesciunt ullam consectetur,
                placeat tenetur? Officiis deleniti quo voluptatem aspernatur
                quae eaque reprehenderit amet doloremque impedit perspiciatis,
                explicabo unde consequatur libero rem provident ipsam quasi odit
                sunt enim error a culpa iure at.
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
