import React, { Component } from 'react'

export class Homepage extends Component {
    render() {
        return (
          <div className="splash">
            <div className="text">
              <h1 className="title">The perfect solutions for educators.</h1>
              <p className="sub-title">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Enim
                quam est maxime accusantium! Explicabo sapiente, aperiam, cumque
                magnam aliquam corporis sunt dolor voluptas suscipit possimus et
                illo deleniti doloribus asperiores veniam excepturi ipsum
                reprehenderit aspernatur officia dolore odio. Omnis cupiditate,
                atque, voluptatem expedita fuga officiis quaerat rerum impedit
                nam perferendis natus laudantium, maxime dolorum?
              </p>
              <div className="interactions">
                <input className="subscribe" type="text" placeholder="E-mail" />
                <button className="submit" type="submit">
                  Sign up for newsletter
                </button>
              </div>
            </div>
            <img
              className="img"
              src="https://images.pexels.com/photos/4144095/pexels-photo-4144095.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
              alt=""
            />
          </div>
        );
    }
}

export default Homepage
