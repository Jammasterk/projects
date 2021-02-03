import React from "react"
import styled from "styled-components"

const Wrapper = styled.div`
  .card {
    width: 200px;
    padding: 1em;
    margin: 1em;
  }

  h1 {
    font-size: 0.8em;
    line-height: 14px;
    margin: 0 0 1.68rem 0;
    font-weight: bold;
  }

  p {
    font-size: 0.75em;
  }

  img {
    width: 100%;
    height: 200px;
  }
  .container {
    margin: 0;
    padding: 0;
  }

  .card {
    display: inline-block;
    padding: 0.35em;
  }
`;

export default function AllProduct(props){
    const {
      title,
      subTitle,
      price,
      shippingDetails,
      query,
      image,
      _id,
    } = props;
    return (
      <Wrapper>
        <div>
          <div className="container">
            <div className="card">
              <a href="">
                <img src={image} alt="" />
                <h1>{title}</h1>
              </a>
              {/* <p>{subTitle}</p> */}
              <p>{price}</p>
              <small>Shipping: {shippingDetails}</small>
              <br />
              <small>{query}</small>
            </div>
          </div>
        </div>
      </Wrapper>
    );
}
