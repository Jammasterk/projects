import React, {useState} from "react"
import BlogForm from "./BlogForm"
import {
  MDBJumbotron,
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBBadge,
} from "mdbreact";
import styled from "styled-components"

const Wrapper = styled.div`
.tag{
    padding: 3px 6px !important;

}
`

const Blog = (props) => {
    const {title, author, image, content, tags, _id} = props
    const [editToggle, setEditToggle] = useState(false) 
    return (
      <div>
        {!editToggle ? (
          <>
            <Wrapper>
              <MDBContainer className="mt-5 text-center">
                <MDBRow>
                  <MDBCol>
                    <MDBJumbotron>
                      <h4>{title}</h4>
                      <small>{author}</small>
                      <img src={image} alt="" />
                      <p className="lead">{content}</p>
                      <hr className="my-2" />
                      <MDBBadge color="danger" className="px-3 py-2">
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
                    </MDBJumbotron>
                  </MDBCol>
                </MDBRow>
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
}

export default Blog