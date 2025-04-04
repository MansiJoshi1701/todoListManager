import React , {useState , useEffect} from "react";
import axios from 'axios';

//components
import ToDoList from './components/ToDoList';
import ToDoForm from './components/ToDoForm';

function App() {

  const [todos , setTodos] = useState([]);

  //useEffect() is used coz we want to re-render the page eveytime todos (list) is updated
  useEffect(() => {

    const fetchTodos = async () => {
      const response = await axios.get('https://localhost:5000/todos');
      setTodos(response.data);
    }
    
    fetchTodos();

  },[]) //DEPENDANCY array shoudl have [todos]

  //Adding a new data , in response to submitting the ToDoForm
  const addToDo = async() => {

    await axios.post('http://localhost:5000/todos/add', { text });
    const response = await axios.get('http://localhost:5000/todos');
    setTodos(response.data);
  }

  //Deleting a data
  const onDelete = async (id) => {
    await axios.delete(`http://localhost:5000/todos/${id}`);
    const response = await axios.get('http://localhost:5000/todos');
    setTodos(response.data);
  }

  //Updating a data
  const onUpdate = async (id , completed) => {
    await axios.post(`http://localhost:5000/todos/${id}` , { completed });
    const response = await axios.get(`http://localhost:5000/todos/${id}`);
    setTodos(response.data);
  }

  return (
    <div className="App">
      <h1>To-Do List</h1>
      <ToDoForm onAdd={addToDo}/>
      <ToDoList todos={todos} onDelete={delteToDo} onUpdate={updateToDo} />
    </div>
  );
}

export default App;
