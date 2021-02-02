import React, {useState} from 'react'
import styled from "styled-components"

const Wrapper = styled.div`
  form {
    width: 40%;
    min-width:280px;
    margin: 2em;
    padding: 2em 1em;
    border-radius: 5px;
    background: #ffffff;
    box-shadow: 20px 20px 60px #d9d9d9, -20px -20px 60px #ffffff;
  }
  a{
      width: 250px
  }

  .span{
      margin-bottom: 1em
  }

  h1{
      font-size: 28px;
      font-weight: 200
  }

  .flex{
      display: flex;
      justify-content: space-around
  }
  img{
      height: 600px;
      margin-top: 2em;
      width: 40%;
      min-width: 280px
  }
`;

function AuthForm(props){

    const [show, setShow] = useState(false)

    const {
        handleChange,
        handleSubmit,
        btnText,
        errMsg,
        inputs: {
            username,
            password
        }
    } = props

    function toggle(e){
        e.preventDefault()
        setShow(!show)
    }

    return (
      <Wrapper>
        <div className="flex">
          <form onSubmit={handleSubmit}>
            <h1>Ecommerce Store</h1>
            <div className="row">
              <div class="input-field col s12">
                <input
                  id="textarea2"
                  className="materialize-textarea"
                  data-length="120"
                  name="username"
                  value={username}
                  onChange={handleChange}
                  type="text"
                />
                <label for="textarea2">Username</label>
              </div>
            </div>
            <div className="row">
              <div className="input-field col s12">
                <input
                  id="textarea2"
                  className="materialize-textarea"
                  data-length="120"
                  type={show ? "text" : "password"}
                  name="password"
                  value={password}
                  onChange={handleChange}
                />
                <label for="textarea2">Password</label>
              </div>
            </div>
            <label>
              <input
                style={{ marginBottom: "1em" }}
                type="checkbox"
                onClick={toggle}
              />
              <span className="span">View Password</span>
            </label>

            <br />
            <button
              style={{ width: "50%" }}
              type="submit"
              href=""
              className="waves-effect waves-light btn"
            >
              <i className="material-icons left">{btnText}</i>
            </button>
            <p color="red">{errMsg}</p>
          </form>
          <img
            src="https://images.pexels.com/photos/3263460/pexels-photo-3263460.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260"
            alt=""
          />
        </div>
      </Wrapper>
    );
}

export default AuthForm