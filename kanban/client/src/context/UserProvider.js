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
        token: localStorage.getItem("token") || "",
        boards: [],
        errMsg: ""
    }

    const [userState, setUserState] = useState(initState)

    function signup(credentials){
        axios.post('/auth/signup', (credentials))
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
        axios
          .post("/auth/login", credentials)
          .then((res) => {
            const { user, token } = res.data;
            localStorage.setItem("token", token);
            localStorage.setItem("user", JSON.stringify(user));
            getBoard()
            setUserState((prevUserState) => ({
              ...prevUserState,
              user,
              token,
            }));
          })
          .catch((err) => handleAuthErr(err.response.data.errMsg));
    }

    function logout(){
        localStorage.removeItem('token')
        localStorage.removeItem("user")
        setUserState({
            boards: [],
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

       function resetAuthErr(){
           setUserState(prevState => ({
               ...prevState,
               errMsg: ""
           }))
       }

       function getBoard(){
            userAxios.get("/api/board")
            .then((res) => {
                setUserState(prevState => ({
                    ...prevState,
                    boards: res.data
                }))
            })
            .catch(err => console.log(err.response.data.errMsg))
       }

       function getUserBoard(){
           userAxios.get("/api/board/user")
           .then(res => {
               setUserState(prevState => ({
                   ...prevState,
                   boards: res.data
               }))
           })
           .catch(err => console.log(err.res.data.errMsg))
       }

       function addBoard(newBoard){
           userAxios.post('/api/board', newBoard)
           .then(res => {
               setUserState(prevState => ({
                   ...prevState,
                   boards: [...prevState.boards, res.data]
               }))
           })
           .catch(err => console.log(err.res.data.errMsg))
       }

       function updateBoard(updates, boardId){
           userAxios.put(`/api/board/${boardId}`, updates)
           .then(res => {
               setUserState(prevState => ({
                   ...prevState,
                   boards: prevState.boards.map(board => board._id !== boardId ? board : res.data)
               }))
           })
           .catch(err => console.log(err))
       }

       function deleteBoard(boardId){
           userAxios.delete(`/api/board/${boardId}`)
           .then(res => {
               setUserState(prevState => ({
                   ...prevState,
                   boards: prevState.boards.filter(board => board._id !== boardId)
               }))
           })
           .catch(console.log("board deleted"))
       }

    return(
        <UserContext.Provider
            value={{
                ...userState,
                signup,
                login,
                logout,
                addBoard,
                getBoard,
                getUserBoard,
                updateBoard,
                deleteBoard,
                resetAuthErr
            }}
        >
            {props.children}
        </UserContext.Provider>
    )
}

