import React, { useState } from "react";
import BlogForm from "./BlogForm";
import {
  MDBJumbotron,
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBBadge,
  MDBDropdown,
  MDBDropdownToggle,
  MDBDropdownMenu,
} from "mdbreact";
import styled from "styled-components";
import moment from "moment";

const Wrapper = styled.div`
  .tag {
    padding: 3px 6px !important;
  }
  .lead {
    margin-top: 2em;
    width: 100vw;
    padding: 2em;
  }
  h4 {
    margin-top: 1.5em;
  }

  h6 {
    width: 100%;
    text-align: center;
  }

  img {
    display: block;
    margin-left: auto;
    margin-right: auto;
    width: 50%;
  }

  .dropdown-img {
    width: 80%;
    margin: 0 auto;
  }

  .dark {
    color: #000 !important;
    background: none !important;
  }

  .preview {
    margin-top: 1.5em;
  }
  @media only screen and (max-width: 600px) {
    .block {
      display: block !important;
    }
    img {
      width: 80% !important;
      margin: 0 auto;
    }
    .text {
      max-width: 100%;
    }
    .text-container {
      width: 100%;
    }
    .med-width {
      width: 100% !important;
    }
    .btn {
      margin-top: 4em;
      margin-left: 0;
      margin-right: 0;
      margin-bottom: 0;
    }
  }
`;


const Blog = (props) => {
  const date = moment().format("MMM Do YY");

  const { title, author, image, content, tags, _id } = props;
  const [editToggle, setEditToggle] = useState(false);

  const abreviated = content.slice(0, 150)

  return (
    <div>
      <Wrapper>
      {!editToggle ? (
        <>
        <MDBContainer className="mt-5 text-center">
          <MDBJumbotron>
            <MDBRow className="w-100 block">
              <MDBCol className="med-width w-50">
                <div className="text-container">
                  <div className="text">
                    <h4>{title}</h4>
                    <h6>Author: {author}</h6>
                    <small>Date published: {date}</small>
                  </div>
                  <img src={image} alt="" />
                </div>
              </MDBCol>
              <MDBCol>
                <p className="preview">{abreviated}...</p>
                <MDBDropdown dropright className="w-100">
                  <MDBDropdownToggle
                    caret
                    outline
                    color="dark"
                    className="w-100 dark"
                  >
                    View Article
                  </MDBDropdownToggle>
                  <MDBDropdownMenu basic>
                    <img className="dropdown-img" src={image} alt="" />
                    <h4>{title}</h4>
                    <h6>{author}</h6>
                    <p className="lead">{content}</p>
                    <hr className="my-2" />
                    <MDBBadge color="danger" className="mb-2 px-3 py-2">
                      {tags}
                    </MDBBadge>
                    <br />
                    <button
                      className="deleteBtn"
                      onClick={() => props.deleteBlog(_id)}
                    >
                      Delete
                    </button>
                    <button
                      onClick={() => setEditToggle((prevToggle) => !prevToggle)}
                    >
                      Edit
                    </button>
                  </MDBDropdownMenu>
                </MDBDropdown>
              </MDBCol>
            </MDBRow>
          </MDBJumbotron>
        </MDBContainer>
        </>
      )
      :
      (
        <>
        <BlogForm
          title={title}
          author={author}
          content={content}
          image={image}
          tags={tags}
          btnTxt="Submit Edit"
         />
         <button onClick={() => setEditToggle(prevToggle => !prevToggle)}
           >
           Close
         </button>
        </>
      )
      }
      </Wrapper>
    </div>
  );
};

export default Blog;
