import React, {useState} from 'react'
import { MDBJumbotron, MDBBtn, MDBBadge, MDBContainer, MDBRow, MDBCol, MDBInput } from "mdbreact";


export default function ContactForm(props) {

  const initInputs = {
    firstName: props.firstName || "",
    lastName: props.lastName || "",
    phone: props.phone || "",
    email: props.email || "",
    twitter: props.twitter || "",
    facebook: props.facebook || "",
    instagram: props.instagram || "",
    img: props.img || ""
  }

  const [inputs, setInputs] = useState(initInputs)
  const [state, setState] = useState(false)

  function handleChange(e){
    const {name, value} = e.target
    setInputs(prevInputs => ({
      ...prevInputs,
      [name]: value
    }))
  }

  function handleSubmit(e){
    e.preventDefault()
    props.submit(inputs, props._id)
    setInputs(initInputs)
  }

    function toggleChange(e){
        e.preventDefault(setState(!state))
      }

      const {firstName, lastName, phone, email, twitter, facebook, instagram, img} = inputs

    return (
      <div>
        <div className="container">
          <MDBContainer className="mt-5 text-center">
            <MDBRow>
              <MDBCol>
                <MDBJumbotron>
                  <h1>Save a contact</h1>
                  <form onSubmit={handleSubmit}>
                    <MDBInput 
                    type="text"
                    name="firstName"
                    value={firstName}
                    onChange={handleChange}
                    label="First name" />
                    <MDBInput
                    type="text"
                    name="lastName"
                    value={lastName}
                    onChange={handleChange}
                     label="Last name" />
                    <MDBInput
                    type="text"
                    name="phone"
                    value={phone}
                    onChange={handleChange}
                     label="Phone" />
                    <div
                      style={state ? { display: "block" } : { display: "none" }}
                    >
                      <MDBInput type="date" label="Birthday" />
                      <MDBInput
                      type="text"
                      name="email"
                      value={email}
                      onChange={handleChange}
                       label="Email" />
                      <MDBInput
                      type="text"
                      name="twitter"
                      value={twitter}
                      onChange={handleChange}
                       label="Twitter" />
                      <MDBInput
                      type="text"
                      name="instagram"
                      value={instagram}
                      onChange={handleChange}
                       label="Instagram" />
                      <MDBInput
                      type="text"
                      name="facebook"
                      value={facebook}
                      onChange={handleChange}
                       label="Facebook" />
                      <MDBInput 
                      type="file"
                      name="img"
                      value={img}
                      onChange={handleChange}
                       />
                    </div>
                    <MDBBadge
                      className="px-3"
                      /* color="success" */
                      onClick={toggleChange}
                      pill
                      color="mdb-color"
                    >
                      <small>{state ? "less" : 'more'} options</small>
                      
                    </MDBBadge>

                    <br />
                    <MDBBtn type="submit" outline className="mt-3" color="mdb-color" rounded>
                      {props.btnText}
                    </MDBBtn>
                  </form>
                </MDBJumbotron>
              </MDBCol>
            </MDBRow>
          </MDBContainer>
        </div>
      </div>
    );
} 
