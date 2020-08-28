import React, { useState, useEffect } from "react";
import axios from "axios";

export const UserContext = React.createContext();

const userAxios = axios.create();

userAxios.interceptors.request.use((config) => {
  const token = localStorage.getItem("token");
  config.headers.Authorization = `Bearer ${token}`;
  return config;
});

export default function UserProvider(props) {
  const initState = {
    user: JSON.parse(localStorage.getItem("user")) || {},
    token: localStorage.getItem("token") || "",
    blogs: [],
    errMsg: "",
  };

  const [userState, setUserState] = useState(initState);

  function signup(credentials) {
    axios
      .post("/auth/signup", credentials)
      .then((res) => {
        const { user, token } = res.data;
        localStorage.setItem("token", token);
        localStorage.setItem("user", JSON.stringify(user));
        setUserState((prevUserState) => ({
          ...prevUserState,
          user,
          token,
        }));
      })
      .catch((err) => handleAuthErr(err.response.data.errMsg));
  }

  function login(credentials) {
    axios
      .post("/auth/login", credentials)
      .then((res) => {
        const { user, token } = res.data;
        localStorage.setItem("token", token);
        localStorage.setItem("user", JSON.stringify(user));
        getUserBlogs();
        getBlogs();
        setUserState((prevUserState) => ({
          ...prevUserState,
          user,
          token,
        }));
      })
      .catch((err) => handleAuthErr(err.response.data.errMsg));
  }

  function logout() {
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    setUserState({
      blogs: [],
      user: {},
      token: "",
    });
  }

  function handleAuthErr(errMsg) {
    setUserState((prevState) => ({
      ...prevState,
      errMsg,
    }));
  }

  function resetAuthErr() {
    setUserState((prevState) => ({
      ...prevState,
      errMsg: "",
    }));
  }

  function getUserBlogs() {
    userAxios
      .get("/api/blog/user")
      .then((res) => {
        setUserState((prevState) => ({
          ...prevState,
          blogs: res.data,
        }));
      })
      .catch((err) => console.log(err.response.data.errMsg));
  }

  function getBlogs(){
    userAxios.get('/api/blog')
      .then(res => {
        console.log(res.data)
        setUserState((prevState) => ({
          ...prevState,
          blogs: res.data,
        }))
      })
    
  }

  function addNewBlog(newBlog) {
    userAxios
      .post("/api/blog", newBlog)
      .then((res) => {
        setUserState((prevState) => ({
          ...prevState,
          blogs: [...prevState.blogs, res.data],
        }));
      })
      .catch((err) => console.log(err.response.data.errMsg));
  }

  function updateBlog(updates, blogId) {
    userAxios
      .put(`/api/blog/${blogId}`, updates)
      .then((res) => {
        console.log(res);
        setUserState((prevState) => ({
          ...prevState,
          blogs: prevState.blogs.map((blog) =>
            blog._id !== blogId ? blog : res.data
          ),
        }));
      })
      .catch((err) => console.log(err));
  }

  function deleteBlog(blogId) {
    userAxios
      .delete(`/api/blog/${blogId}`)
      .then((res) => {
        setUserState((prevState) => ({
          blogs: prevState.blogs.filter((blog) => blog._id !== blogId),
        }));
      })
      .catch((err) => console.log(err));
  }

  useEffect(() => {
    getUserBlogs();
  }, []);

  useEffect(() => {
    getBlogs()
  }, [])

  return (
    <UserContext.Provider
      value={{
        ...userState,
        setUserState,
        signup,
        login,
        logout,
        addNewBlog,
        updateBlog,
        deleteBlog,
        resetAuthErr,
      }}
    >
      {props.children}
    </UserContext.Provider>
  );
}
