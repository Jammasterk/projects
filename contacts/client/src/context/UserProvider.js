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
        token: localStorage.getItem('token') || "",
        contacts: [],
        errMsg: ''
    }

    const [userState, setUserState] = useState(initState)


    // Signup

    function signup(credentials) {
      axios
        .post("/auth/signup", credentials)
        .then((res) => {
          console.log(res);
          const { user, token } = res.data;
          localStorage.setItem("token", token);
          localStorage.setItem("user", JSON.stringify(user));
          setUserState((prevUserState) => ({
            ...prevUserState,
            user,
            token,
          }));
        })
        .catch((err) => handleAuthErr(err.response.data.errMsg))
        .catch((err) => console.log(err));
    }

    // Login

    function login(credentials) {
      axios
        .post("/auth/login", credentials)
        .then((res) => {
          const { user, token } = res.data;
          localStorage.setItem("token", token);
          localStorage.setItem("user", JSON.stringify(user));
          getUserContacts()
          setUserState((prevUserState) => ({
            ...prevUserState,
            user,
            token,
          }));
        })
        .catch((err) => handleAuthErr(err.response.data.errMsg));
    }

    // Logout

    function logout() {
      localStorage.removeItem("token");
      localStorage.removeItem("user");
      setUserState({
        user: {},
        token: "",
        contacts: []
      });
    }

    // Handle Error

    function handleAuthErr(errMsg) {
      setUserState((prevState) => ({
        ...prevState,
        errMsg,
      }));
    }

    // Reset Error

    function resetAuthErr() {
      setUserState((prevState) => ({
        ...prevState,
        errMsg: "",
      }));
    }

    // get user contacts

    function getUserContacts(){
      userAxios.get('/api/contacts/user')
      .then(res => {
        setUserState(prevState => ({
          ...prevState,
          contacts: res.data
        }))
      })
      .catch(err => console.log(err.response.data.errMsg))
    }

    // add contacts

    function addContact(newContact){
      userAxios.post('/api/contacts', newContact)
      .then(res => {
        setUserState(prevState => ({
          ...prevState,
          contacts: [...prevState.contacts, res.data]
        }))
      })
      .catch(err => console.log(err.response.data.errMsg))
    }

    // Update Contact

    function updateContact(updates, contactId){
      userAxios.put(`/api/contacts/${contactId}`, updates)
      .then(res => {
        console.log(res)
        setUserState(prevState => ({
          ...prevState,
          contacts: prevState.contacts.map(contact => contact._id !== contactId ? contact : res.data)
        }))
      })
      .catch(err => console.log(err))
    }

    function deleteContact(contactId){
      userAxios.delete(`/api/contacts/${contactId}`)
      .then(res => {
        setUserState(prevState => ({
          ...prevState,
          contacts: prevState.contacts.filter(contact => contact._id !== contactId)
        }))
      })
    }

    useEffect(() => {
      getUserContacts()
    }, [])

    return(
        <UserContext.Provider
            value={{
                ...userState,
                login,
                signup,
                logout,
                addContact,
                updateContact,
                deleteContact,
                resetAuthErr
            }}
        >
            {props.children}
        </UserContext.Provider>
    )

}