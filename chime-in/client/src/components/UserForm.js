import React, {useState} from "react"
import styled from "styled-components"

const Wrapper = styled.div`
.socials{
    display: flex;
    width: 450px;
    justify-content: space-around;
    margin-top: 1em
}

.social{
    cursor: pointer
}
`

export default function UserForm(props){
    const initInputs = {
        name: "",
        location: "",
        email: "",
        portfolio: "",
        bio: "",
        twitter: "",
        dribble: "",
        behance: "",
        linkedIn: "",
        occupation: ""
    }
    const [modal, setModal] = useState(false)
    const [inputs, setInputs] = useState(initInputs)
    const [socials, setSocials] = useState(false)
    const [dribbble, setDribbble] = useState(false)
    const [linkedInTwo, setLinkedIn] = useState(false)
    const [behanceTwo, setBehanceTwo] = useState(false)

    const {addProfile} = props

    function handleChange(e){
        const {name, value} = e.target
        setInputs(prevInputs => ({
            ...prevInputs,
            [name]: value
        }))
    }

    function handleSubmit(e){
        e.preventDefault()
        console.log(inputs)
        addProfile(inputs)
        setInputs(initInputs)
    }

    const {name, location, email, portfolio, bio, twitter, behance, dribble, linkedIn, occupation} = inputs

    function handleClick(){
        setSocials(!socials)
    }

    function handleClickTwo(){
        setDribbble(!dribbble)
    }

    function handleClickThree(){
        setLinkedIn(!linkedInTwo)
    }

    function handleClickFour(){
        setBehanceTwo(!behanceTwo)
    }

    return(
        <Wrapper>
 <div className="jumbotron jumbotron-fluid">
  <form className="container" onSubmit={handleSubmit}>
   {/* <h1>Account Information</h1> */}
   <div className="form-group">
    <label for="exampleInputEmail1">Name</label>
    <input type="text" class="form-control" placeholder="Your name" name="name" value={name} onChange={handleChange}/>
  </div>
  <div className="form-group">
    <label for="exampleInputEmail1">Location</label>
    <input type="text" className="form-control" placeholder="Your location" name="location" value={location} onChange={handleChange}/>
  </div>
  <div className="form-group">
    <label for="exampleInputEmail1">Occupation</label>
    <input type="text" className="form-control" placeholder="Your location" name="occupation" value={occupation} onChange={handleChange}/>
  </div>
  <div className="form-group">
    <label for="exampleInputEmail1">Email</label>
    <input type='email' className="form-control" placeholder="Your Email" name="email" value={email} onChange={handleChange}/>
  </div>
  <div className="form-group">
    <label for="exampleInputEmail1">Portfolio</label>
    <input type="text" className="form-control" placeholder="Your Portfolio" name="portfolio" value={portfolio} onChange={handleChange}/>
  </div>
  <div className="form-group">
    <label for="exampleFormControlTextarea1">Bio</label>
    <textarea className="form-control" id="exampleFormControlTextarea1" rows="3" placeholder="Your bio" name="bio" value={bio} onChange={handleChange}></textarea>
  </div>
  <div className="socials">
      <p style={{marginLeft: "none"}}>Add your socials</p>
      <div>
      <i onClick={handleClick} className="social soc-icon fab fa-twitter"></i>
      <div className="form-group">
        <input style={socials ? {display: "block"} : {display: "none"}} type="text" className="form-control" placeholder="Twitter" name="twitter" value={twitter} onChange={handleChange}/>
    </div>
      </div>
      <div>
      <i onClick={handleClickTwo} className="social soc-icon fab fa-dribbble"></i>
      <div className="form-group">
        <input  style={dribbble ? {display: "block"} : {display: "none"}} type="text" className="form-control" placeholder="Dribble" name="dribble" value={dribble} onChange={handleChange}/>
    </div>
      </div>
      <div>
      <i onClick={handleClickFour} className="social soc-icon fab fa-behance"></i>
      <div className="form-group">
        <input  style={behanceTwo ? {display: "block"} : {display: "none"}} type="text" className="form-control" placeholder="Behance" name="behance" value={behance} onChange={handleChange}/>
    </div>
      </div>
      
      <div>
      <i onClick={handleClickThree} className="social soc-icon fab fa-linkedin-in"></i>
      <div className="form-group">
        <input  style={linkedInTwo ? {display: "block"} : {display: "none"}} type="text" className="form-control" placeholder="linkedIn" name="linkedIn" value={linkedIn} onChange={handleChange}/>
    </div>
      </div>
  </div>
  <button type="submit" className="btn btn-success">Add Board</button>
  </form>
</div>
</Wrapper>
    )

}