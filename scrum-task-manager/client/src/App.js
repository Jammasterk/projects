import React, {useState, useEffect} from "react"
import axios from "axios"
import Task from "./components/Task"
import AddTaskForm from "./components/AddTaskForm"

const App = () => {
    const [tasks, setTasks] = useState([])

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

    useEffect(() => {
        getTasks()
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
        </>
    )
}

export default App