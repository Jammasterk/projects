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
  MDBDropdownItem,
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
  .dark {
    color: #000 !important;
    background: none !important;
  }

  .preview{
    margin-top: 1.5em
  }
  @media only screen and (max-width: 600px) {
      .block{
        display: block !important
      };
      img{
        /* width: 100%; */
        margin: 0 auto
      }
      .text{
        max-width: 100%
      }
      .text-container{
        width: 100%;
        
        
      }
      .med-width{
        width: 100% !important
      }
      .btn{
        margin-top: 4em;
        margin-left: 0;
        margin-right: 0;
        margin-bottom: 0
      }
  }
`;


const Blog = (props) => {
  const date = moment().format("MMM Do YY");
  const { title, author, image, content, tags, _id } = props;
  const abreviated = content.slice(0, 150)
  const [editToggle, setEditToggle] = useState(false);
  return (
    <div>
      {!editToggle ? (
        <>
          <Wrapper>
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
                        <img src={image} alt=""/>
                        <h4>{title}</h4>
                        <p className="lead">{content}</p>
                        <hr className="my-2" />
                        <MDBBadge color="danger" className="mb-2 px-3 py-2">
                          {tags}
                        </MDBBadge>
                        <br />
                        <button
                          onClick={() =>
                            setEditToggle((prevToggle) => !prevToggle)
                          }
                        >
                          Edit
                        </button>
                      </MDBDropdownMenu>
                    </MDBDropdown>
                  </MDBCol>
                </MDBRow>
              </MDBJumbotron>
            </MDBContainer>
          </Wrapper>
        </>
      ) : (
        <>
          <BlogForm
            title={title}
            content={content}
            btnText="Edit"
            _id={_id}
            submit={props.updateBlog}
          />
          <button onClick={() => setEditToggle((prevToggle) => !prevToggle)}>
            Close
          </button>
        </>
      )}
    </div>
  );
};

export default Blog;
