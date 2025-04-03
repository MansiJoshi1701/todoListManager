import React from 'react'

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