import React from 'react'

//You get 3 props from the App.js (parent of ToDoList.js file) - 
//1. todos - a list of all todo items
//2. onDelete - a function to delete a todo item
//3. onUpdate - a function to update a todo item
const ToDoList = ({todos , onDelete , onUpdate}) => {
    return(
        <ul>
            {todos.map((todo) => (
                <li key = {todo._id}>
                    <span style = {{textDecoration: todo.completed ? 'line-through' : 'none'}}>
                        {todo.text}
                    </span>
                    <button onClick={() => onDelete(todo._id)}>Delete</button>
                    <input type="checkbox" checked={todo.completed} onChange={(e) => onUpdate(todo._id,e.target.checked)} />
                </li>
            ))}
        </ul>
    );
};

export default ToDoList;