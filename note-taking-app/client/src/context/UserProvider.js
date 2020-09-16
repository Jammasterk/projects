import React, {useState} from "react"
import axios from "axios"

export const UserContext = React.createContext()

const userAxios = axios.create()

userAxios.interceptors.request.use(config => {
    const token = localStorage.getItem('token')
    config.headers.Authorization = `Bearer ${token}`
    return config
})

export default function UserProvider(props){

    const initState = 
    {
    user: JSON.parse(localStorage.getItem("user")) || {}, 
    token: localStorage.getItem("token") || '', 
    notes: [],
    contact: [],
    errMsg: ""
}
    const [userState, setUserState] = useState(initState)

    // Signup

    function signup(credentials){
        axios.post('/auth/signup', credentials)
        .then(res => {
            const {user, token} = res.data
            localStorage.setItem("token", token)
            localStorage.setItem("user", JSON.stringify(user))
            setUserState(prevUserState => ({
                ...prevUserState,
                user,
                token
            }))
        })
        .catch(err => handleAuthErr(err.response.data.errMsg))
    }

    // Login

    function login(credentials){
        axios
          .post("/auth/login", credentials)
          .then((res) => {
              const { user, token } = res.data;
              localStorage.setItem("token", token);
              localStorage.setItem("user", JSON.stringify(user));
              getUserNote()
              getUserContact()
              setUserState((prevUserState) => ({
                ...prevUserState,
                user,
                token,
              }));
          })
          .catch((err) => handleAuthErr(err.response.data.errMsg));
    }

    // Logout

    function logout(){
        localStorage.removeItem("token")
        localStorage.removeItem("user")
        setUserState({
            user: [],
            token: "",
            notes: [],
            contact: [] 
        })
    }

    function handleAuthErr(errMsg){
        setUserState(prevState => ({
            ...prevState,
            errMsg
        }))
    }

    function resetAuthErr(){
        setUserState(prevState => ({
            ...prevState,
            errMsg: ''
        }))
    }

    function getUserNote(){
        userAxios.get('/api/notes/user')
        .then(res => {
            setUserState(prevState => ({
                ...prevState,
                notes: res.data
            }))
        })
        .catch(err => console.log(err))
    }

    // Add notes

    function addNote(newNote){
        userAxios.post("/api/notes", newNote)
        .then(res => {
            setUserState(prevState => ({
                ...prevState,
                notes: [...prevState.notes, res.data]
            }))
        })
        .catch(err => console.log(err.response.data.errMsg))
    }

    // get User contact

    function getUserContact(){
        userAxios.get('/api/contact/user')
        .then(res => {
            setUserState(prevState => ({
                ...prevState,
                contact: res.data 
            }))
        })
        .catch(err => console.log(err))
    }

    // Add Contact

    function addContact(newContact){
        userAxios.post('/api/contact', newContact)
        .then(res => {
            setUserState(prevState => ({
                ...prevState,
                contact: [...prevState.contact, res.data]
            }))
        })
        .catch(err => console.log(err.response.data.errMsg))
    }

    return(
        <UserContext.Provider
            value={{
                ...userState,
                signup,
                login,
                logout,
                addNote,
                addContact,
                resetAuthErr
            }}
        >
            {props.children}
        </UserContext.Provider>
    )
}