import React, {useState, useEffect} from "react"
import axios from "axios"

export const UserContext = React.createContext();

const userAxios = axios.create()

userAxios.interceptors.request.use(config=>{
    const token = localStorage.getItem('token') || {}
    config.headers.Authorization = `Bearer ${token}`
    return config
})

export default function UserProvider(props){
    const initState ={
        user: JSON.parse(localStorage.getItem('user')) || {},
        token: localStorage.getItem('token') || "",
        looks: [],
        errMsg: ''
    }

    const [userState, setUserState] = useState(initState)

    function signup(credentials){
        axios.post("/auth/signup", credentials)
        .then(res => {
            const {user, token} = res.data
            localStorage.setItem('token', token)
            localStorage.setItem('user', JSON.stringify(user))
            setUserState(prevUserState => ({
                ...prevUserState,
                user,
                token
            }))
        })
        .catch(err => handleAuthErr(err.response.data.errMsg))
    }

    function login(credentials){
        axios.post('/auth/login', credentials)
        .then(res => {
            const {user, token} = res.data
            localStorage.setItem("token", token);
            localStorage.setItem("user", JSON.stringify(user));
            getUserLooks();
            setUserState(prevUserState => ({
                ...prevUserState,
                user,
                token
            }))
        })
        .catch(err => console.log(err.response.data.errMsg))
    }

    function logout(){
        localStorage.removeItem('token')
        localStorage.removeItem('user')
        setUserState({
            looks: [],
            user: {},
            token: ''
        })
    }

    function handleAuthErr(errMsg){
        setUserState(prevState => ({
            ...prevState,
            errMsg: ''
        }))
    }

    function resetAuthErr(){
        setUserState(prevState => ({
            ...prevState,
            errMsg: ''
        }))
    }

    function getUserLooks(){
        userAxios.get('/api/look/user')
        .then(res => {
            setUserState(prevState => ({
                ...prevState,
                looks: res.data
            }))
        })
        .catch(err => console.log(err.res.data.errMsg))
    }

    function addLook(newLook){
        userAxios.post('/api/look', newLook)
        .then(res => {
            setUserState(prevState => ({
                ...prevState,
                looks: [...prevState.looks, res.data]
            }))
        })
        .catch(err => console.log(err.res.data.errMsg))
    }

    function updateLook(updates, lookId){
        userAxios.put(`/api/look/${lookId}`, updates)
        .then(res => {
            console.log(res)
            setUserState(prevState => ({
                ...prevState,
                looks: prevState.looks.map(look => look._id !== lookId ? look : res.data)
            }))
        })
        .catch(err => console.log(err))
    }

    function deleteLook(lookId){
        userAxios.delete(`/api/look/${lookId}`)
        .then(res => {
            setUserState(prevState => ({
                looks: prevState.looks.filter(look => look._id !== lookId)
            }))

        })
        .catch(err => console.log(err))
    }

    useEffect(() => {
        getUserLooks()
    }, [])

    return(
        <UserContext.Provider
            value={{
                ...userState,
                setUserState,
                signup,
                login,
                logout,
                addLook,
                updateLook,
                deleteLook,
                resetAuthErr
            }}
            >
            {props.children}
        </UserContext.Provider>
    )
}