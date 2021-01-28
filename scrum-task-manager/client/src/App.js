import React, {useState, useEffect} from "react"
import axios from "axios"
import Task from "./components/Task"
import AddTaskForm from "./components/AddTaskForm"
import AddDescriptionForm from "./components/AddDescriptionForm"
import Description from "./components/Description"
import AddUserForm from "./components/AddUserForm"
import User from "./components/User"

const App = () => {
    const [tasks, setTasks] = useState([])
    const [descriptions, setDescriptions] = useState([])
    const [users, setUsers] = useState([])

    // Tasks

    function getTasks(){
        
            axios.get('/task')
            .then(res => setTasks(res.data))
            .catch(err => console.log(err))
      
    }

    function addTask(newTask){
        axios.post("/task", newTask)
        .then(res => setTasks(prevTasks => [...prevTasks, res.data]))
        .catch(err => console.log(err))
    }

   function deleteTask(taskId){
       axios.delete(`/task/${taskId}`)
       .then(res => console.log(res))
       .catch(err => console.log(err))
   }

   function updateTask(taskId){
       axios.put(`/task/${taskId}`)
       .then(res => console.log(res))
       .catch(err => console.log(err))
   }

   //Descriptions

   function getDescriptions(){
       axios.get("/description")
       .then(res => setDescriptions(res.data))
       .catch(err => console.log(err))
   }

   function addDescriptions(newDescription){
       axios.post("/description", newDescription)
       .then(res => setDescriptions(prevDescription => [...prevDescription, res.data]))
       .catch(err => console.log(err))
   }

   function deleteDescriptions( descriptionId){
       axios.delete(`/description/${descriptionId}`)
       .then(res => console.log(res))
       .catch(err => console.log(err))
   }

   function updateDescription(descriptionId){
       axios.put(`/description/${descriptionId}`)
       .then(res => console.log(res))
       .catch(err => console.log(Error))

   }

   // Users

   function getUsers(){
       axios.get('/user')
       .then(res => setUsers(res.data))
       .catch(err => console.log(err))
   }

   function addUser(newUser){
       axios.post('/user', newUser)
       .then(res => setUsers(prevUser => [...prevUser, res.data]))
       .catch(err => console.log(err))
   }

   function deleteUser(userId){
       axios.delete(`/user/${userId}`)
       .then(res => console.log(res))
        .catch(err => console.log(err))
   }

   function updateUser(userId){
       axios.put(`/user/${userId}`)
       .then(res => console.log(res))
       .catch(err => console.log(err))
   }

    useEffect(() => {
        getTasks()
    }, [])

    useEffect(() => {
        getDescriptions()
    }, [])

    useEffect(() => {
        getUsers()
    }, [])

    return(
        <>
        <div>
        {/* <AddTaskForm /> */}
            <AddTaskForm
                addTask={addTask}
                deleteTask={deleteTask}
                updateTask={updateTask}
             />
            {tasks.map(task => <Task {...task} key={task.todo} deleteTask={deleteTask}/>)}
             
        </div>
        <div>
            <AddDescriptionForm
                addDescriptions={addDescriptions}
                deleteDescriptions={deleteDescriptions}
                updateDescription={updateDescription}
             />
             {descriptions.map(description => <Description {...description} key={description.description} deleteDescription={deleteDescriptions}/>)}
        </div>
        <div>
            <AddUserForm
                addUser={addUser}
                deleteUser={deleteUser}
                updateUser={updateUser}
             />
             {users.map(user => <User {...user} key={user.name} deleteUser={deleteUser}/>)}
        </div>
        </>
    )
}

export default App