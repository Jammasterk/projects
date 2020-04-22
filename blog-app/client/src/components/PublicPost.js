
import React, { useContext, useEffect } from "react";
import PostTwo from "./PostTwo.js";
import { UserContext } from "../context/UserProvider";

export default function PostList(props) {
  const { posts } = useContext(UserContext);
  useEffect(() => {
    // getUserPosts()
  }, []);
  return (
    <div className="postList">
      {posts.map((post, i) => (
        <PostTwo {...post} key={post._id} />
      ))}
    </div>
  );
}