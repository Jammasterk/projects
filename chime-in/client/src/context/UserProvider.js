import React, {useState} from "react"
import axios from "axios"

export const UserContext = React.createContext()
const userAxios = axios.create()

userAxios.interceptors.request.use(config => {
    const token = localStorage.getItem("token")
    config.headers.Authorization = `Bearer ${token}`
    return config
})

export default function UserProvider(props){
    const initState = {
        user: JSON.parse(localStorage.getItem('user')) || {},
        token: localStorage.getItem('token') || "",
        profiles: [],
        errMsg: ""
    }

    const [userState, setUserState] = useState(initState)

    function signup(credentials){
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

    function login(credentials){
        axios.post("/auth/login", (credentials))
        .then(res => {
            const {user, token} = res.data
            localStorage.setItem("token", token)
            localStorage.setItem("user", JSON.stringify(user))
            getUserProfile()
            setUserState(prevUserState => ({
                ...prevUserState,
                user,
                token
            }))
        })
        // .catch(err => handleAuthErr(err.response.data.errMsg))
        .catch(err => console.log(err))
    }
    function logout(){
        localStorage.removeItem("token")
        localStorage.removeItem("user")
        setUserState({
            user: {},
            token: ""
        })
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

       function getUserProfile(){
         userAxios.get("/api/profile/user")
         .then(res => {
           setUserState(prevState => ({
             ...prevState,
             profiles: res.data
           }))
         })
         .catch(err => console.log(err))
       }
       function getProfile(){
        userAxios.get("/api/profile/")
        .then(res => {
          setUserState(prevState => ({
            ...prevState,
            profiles: res.data
          }))
        })
        .catch(err => console.log(err.response.data.errMsg))
      }

       function addProfile(newProfile){
         userAxios.post("/api/profile", newProfile)
         .then(res => {
           setUserState(prevState => ({
             ...prevState,
             profiles: [...prevState.profiles, res.data]
           }))
         })
         .catch(err => console.log(err.response.data.errMsg))
       }

       function updateProfile(updates, profileId){
          userAxios.put(`/api/profile/${profileId}`, updates)
          .then(res => {
            setUserState(prevState => ({
              ...prevState,
              profiles: prevState.profiles.map(profile => profile._id !== profileId ? profile: res.data)
            }))
          })
          .catch(err => console.log(err))
       }

       function deleteProfile(profileId){
         userAxios.delete(`/api/profile/${profileId}`)
         .then(res => {
           setUserState(prevState => ({
             ...prevState,
             profiles: prevState.profiles.filter(profile => profile._id !== profileId)
           }))
         })
         .catch(console.log("Your profile has been deleted"))
       }

    return(
        <UserContext.Provider
        value={{
            ...userState,
            signup,
            login,
            logout,
            resetAuthErr,
            getUserProfile,
            updateProfile,
            deleteProfile,
            addProfile
        }}>
            {props.children}
        </UserContext.Provider>
    )
}