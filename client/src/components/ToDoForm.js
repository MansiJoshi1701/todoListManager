import React , { useState } from "react";
import axios from 'axios';

const ToDoForm = ( {onAdd} ) => { //onAdd is a function which is basically going to update the data in the DB

    const [text , setText] = useState('');

    const handleSubmit = async(e) => {

        e.preventDefault();
        onAdd(text);
        setText('');
    }

    return(
        <form onSubmit={ handleSubmit }>
            <input type="text" value={text} onChange={(e) => setText(e.target.value)}/>
            <button type="submit">Add To-Do</button>
        </form>
    )
}