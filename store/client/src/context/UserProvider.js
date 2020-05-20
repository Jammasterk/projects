import React, {useState, useEffect} from "react"
import axios from "axios"

export const UserContext = React.createContext()

const userAxios = axios.create()

userAxios.interceptors.request.use(config => {
    const token = localStorage.getItem("token") || {};
    config.headers.Authorization = `Bearer ${token}`
    return config
});

export default function UserProvider(props){
    const initState = {
        user: JSON.parse(localStorage.getItem("user")) || {},
        token: localStorage.getItem('token') || "",
        merchants : [],
        errMsg: ""
    };

    const [userState, setUserState] = useState(initState);

    // Signup

    function signUp(credentials){
        axios.post("/auth/signup", credentials)
        .then(res => {
            const {user, token} = res.data
            localStorage.setItem("token", token)
            localStorage.setItem("user", JSON.stringify(user))
            setUserState(prevState => ({
                ...prevState,
                user,
                token
            }))
        })
        .catch(err => handleAuthErr(err.response.data.errMsg))
    }

    // Login

    function login(credentials){
        axios.post("/auth/login", credentials)
        .then(res => {
            const {user, token} = res.data
            localStorage.setItem("token", token)
            localStorage.setItem("user", JSON.stringify(user))
            // getUserPosts();
            setUserState(prevUserState => ({
                ...prevUserState,
                user,
                token
            }))
        })
        .catch(err => handleAuthErr(err.response.data.errMsg))
    }

    function logout(){
        localStorage.removeItem('token')
        localStorage.removeItem('user')
        setUserState({
        merchants: [],
        user: {},
        token: ""    
        })
    }

    function handleAuthErr(errMsg) {
      setUserState((prevState) => ({
        ...prevState,
        errMsg: "",
      }));
    }

    function resetAuthErr() {
      setUserState((prevState) => ({
        ...prevState,
        errMsg: "",
      }));
    }

    // useEffect(() => {
    //   getUserPosts();
    // }, []);
    // useEffect(()=> {
    //     getMerchant();
    // }, [])


return(
    <UserContext.Provider
        value={{
            ...userState,
            setUserState,
            signUp,
            login,
            logout,
            resetAuthErr
        }}
    >
    {props.children}
    </UserContext.Provider>
)
    }