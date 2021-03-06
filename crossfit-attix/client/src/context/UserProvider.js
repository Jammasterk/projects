import React, {useState, useEffect} from "react"
import axios from "axios"

export const UserContext = React.createContext()

const userAxios = axios.create()

userAxios.interceptors.request.use(config => {
    const token = localStorage.getItem('token')
    config.headers.Authorization = `Bearer ${token}`
    return config
})

export default function UserProvider(props){

    const initState = {
        user: JSON.parse(localStorage.getItem('user')) || {},
        token: localStorage.getItem('token') || '',
        wods: [],
        errMsg: ""

    }

    const [userState, setUserState] = useState(initState)

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

    function login(credentials){
        axios.post("/auth/login", credentials)
        .then(res => {
            const {user, token} = res.data;
            localStorage.setItem("token", token);
            localStorage.setItem("user", JSON.stringify(user));
            getUserWOD();
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
            wods: [],
            user: {},
            token: ""
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
            errMsg: ""
        }))
    }

    function getUserWOD(){
        userAxios.get('/api/wod/user')
            .then(res => {
                setUserState(prevState => ({
                    ...prevState,
                    wods: res.data
                }))
            })
        .catch(err => console.log(err))
    }

    function addWod(newWod){
        userAxios.post('/api/wod', newWod)
        .then(res => {
            setUserState(prevState => ({
                ...prevState,
                wods: [...prevState.wods, res.data]
            }))
        })
        .catch(err => console.log(err.response.data.errMsg))
    }

    function updateWod(updates, wodId){
        userAxios.put(`/api/wod/${wodId}`, updates)
        .then(res => {
            console.log(res)
            setUserState(prevState => ({
                ...prevState,
                wods: prevState.wods.map(wod => wod._id !== wodId ? wod : res.data)
            }))
        })
        .catch(err => console.log(err))
    }

    function deleteWod(wodId){
        userAxios.delete(`/api/wod/${wodId}`)
        .then(res => {
            setUserState(prevState => ({
                ...prevState,
                wods: prevState.wods.filter(wod => wod._id !== wodId)
            }))
        })
    }

    useEffect(() => {
        getUserWOD()
    }, [])

    return(
        <UserContext.Provider
        value={{
            ...userState,
            signup,
            login,
            logout,
            resetAuthErr,
            addWod,
            updateWod,
            deleteWod
        }}
        >
            {props.children}
        </UserContext.Provider>
    )
}