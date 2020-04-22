import React from "react";

export default function PostTwo(props) {
  const { title, author, post, imgUrl, datePublished} = props;
  return (
    <div className="post" key={Math.floor(Math.random() * 99999)}>
      <h1>{title}</h1>
      <hr />

      <h3>{author}</h3>
      <p>{post}</p>
      <br />
      <img src={imgUrl} height="400" width="100%" alt="handicap" />
      <br />
      <h6>{datePublished}</h6>
    </div>
  );
}
