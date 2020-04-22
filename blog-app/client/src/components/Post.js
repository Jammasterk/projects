import React, {useState} from "react"
import PostForm from "./PostForm.js"

export default function Post(props){

    const {title, author, post, imgUrl, datePublished, _id} = props
    const [editToggle, setEditToggle] = useState(false)

    return (
      <div className="post" key={Math.floor(Math.random() * 99999)}>
        {!editToggle ? (
          <>
            <h1 className="titleMargin">{title}</h1>
            <hr />
            <h3 className="author">{author}</h3>
            <p>{post}</p>
            <br />
            <img src={imgUrl} height="400" width="100%" alt="handicap" />
            <br />
            <h6>{datePublished}</h6>
            <br />
            <button className="deleteBtn" onClick={() => props.deletePost(_id)}>
              Delete
            </button>
            <button
              className="editBtn"
              onClick={() => setEditToggle(prevToggle => !prevToggle)}
            >
              Edit
            </button>
          </>
        ) : (
          <>
            <div className="proto">
              <PostForm
                className="postForm"
                title={title}
                post={post}
                btnTxt="Submit Edit"
                _id={_id}
                submit={props.updatePost}
              />
              <button
                className="closeBtn"
                onClick={() => setEditToggle(prevToggle => !prevToggle)}
              >
                Close
              </button>
            </div>
          </>
        )}
      </div>
    );
}