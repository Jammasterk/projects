const todoInput = document.querySelector('.todo-input')
const todoButton = document.querySelector('.todo-button')
const todoList = document.querySelector('.todo-list')

// Event Listener

todoButton.addEventListener('click', addTodo)
todoList.addEventListener('click', deleteCheck)

function addTodo(event){
    event.preventDefault()
    console.log('hello')
    //todo div
    const todoDiv = document.createElement('div')
    todoDiv.classList.add('todo');
    
    //create li
    const newTodo = document.createElement('li')
    newTodo.innerText = todoInput.value
    newTodo.classList.add('todo-item')
    todoDiv.appendChild(newTodo);
    //check button

    const completedButton = document.createElement('button')
    completedButton.innerHTML = '<i class="fas fa-check"></i>';
    completedButton.classList.add('complete-btn')
    todoDiv.appendChild(completedButton)

    //Trash Button
    const trashButton = document.createElement('button')
    trashButton.innerHTML = '<i class="far fa-trash-alt"></i>';
    trashButton.classList.add('trash-btn')
    todoDiv.appendChild(trashButton) 

    // append to list

    todoList.appendChild(todoDiv)
    //clear todo input value
    todoInput.value = ""
}

function deleteCheck(event){
    console.log(event.target)
    const item = event.target
    if(item.classList[0] === "trash-btn"){
        const todo = item.parentElement
        todo.classList.add('fall')
        todo.addEventListener('transitionEnd', function(){
            todo.remove()
        })
    }

    // checkmark
    if(item.classList[0] === 'complete-btn'){
        const todo = item.parentElement
        todo.classList.toggle('completed')
    }
}
