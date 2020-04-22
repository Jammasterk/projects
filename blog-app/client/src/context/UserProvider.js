import React, { useState, useEffect } from "react";
import axios from "axios";


export const UserContext = React.createContext();

const userAxios = axios.create();

userAxios.interceptors.request.use(config => {
  const token = localStorage.getItem("token") || {};
  config.headers.Authorization = `Bearer ${token}`;
  return config;
});

export default function UserProvider(props) {
  const initState = {
    user: JSON.parse(localStorage.getItem("user")) || {},
    token: localStorage.getItem("token") || "",
    posts: [],
    comments: [],
    errMsg: ""
  };

  const [userState, setUserState] = useState(initState);

  function signup(credentials) {
    axios
      .post("/auth/signup", credentials)
      .then(res => {
        const { user, token } = res.data;
        localStorage.setItem("token", token);
        localStorage.setItem("user", JSON.stringify(user));
        setUserState(prevUserState => ({
          ...prevUserState,
          user,
          token
        }));
      })
      .catch(err => handleAuthErr(err.response.data.errMsg));
  }

  function login(credentials) {
    axios
      .post("/auth/login", credentials)
      .then(res => {
        const { user, token } = res.data;
        localStorage.setItem("token", token);
        localStorage.setItem("user", JSON.stringify(user));
        getUserPosts();
        setUserState(prevUserState => ({
          ...prevUserState,
          user,
          token
        }));
      })
      .catch(err => handleAuthErr(err.response.data.errMsg));
  }

  function logout() {
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    setUserState({
      posts: [],
      user: {},
      token: ""
    });
  }

  function handleAuthErr(errMsg) {
    setUserState(prevState => ({
      ...prevState,
      errMsg: ""
    }));
  }

  function resetAuthErr() {
    setUserState(prevState => ({
      ...prevState,
      errMsg: ""
    }));
  }

  function getUserPosts() {
    userAxios
      .get("/api/post/user")
      .then(res => {
        setUserState(prevState => ({
          ...prevState,
          posts: res.data
        }));
      })
      .catch(err => console.log(err.response.data.errMsg));
  }

  function addPost(newPost) {
    userAxios
      .post("/api/post", newPost)
      .then(res => {
        setUserState(prevState => ({
          ...prevState,
          posts: [...prevState.posts, res.data]
        }));
      })
      .catch(err => console.log(err.response.data.errMsg));
  }

  function updatePost(updates, postId) {
    userAxios.put(`/api/post/${postId}`, updates)
      .then(res => {
        console.log(res)
        setUserState(prevState => ({
          ...prevState,
          posts: prevState.posts.map(post => post._id !== postId ? post : res.data)
        }));   

      })
      .catch(err => console.log(err));
  }

  function deletePost(postId) {
    userAxios
      .delete(`/api/post/${postId}`)
      .then(res => {
        setUserState(prevState => ({
          ...prevState,
          posts: prevState.posts.filter(post => post._id !== postId)
        }));
      })
      .catch(err => console.log(err));
  }

  useEffect(() => {
    getUserPosts();
  }, []);

  return (
    <UserContext.Provider
      value={{
        ...userState,
        setUserState,
        signup,
        login,
        logout,
        addPost,
        updatePost,
        deletePost,
        resetAuthErr
      }}
    >
      {props.children}
    </UserContext.Provider>
  );
}





