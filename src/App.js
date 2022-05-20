import React,{ useState,useEffect } from 'react';
import './App.css';
import Form from './components/Form';
import TodoList from './components/TodoList';

function App() {
  //States
  const [inputText, setInputText] = useState("");
  const [todos, setTodos] = useState([]);
  const [status, setStatus] = useState('all');
  const [filteredTodos, setFilteredTodos] = useState([]);
 
  //Functions
  const filterHandler = () => {
    switch (status) {
      case 'completed':
        setFilteredTodos((todos.filter((todo) => todo.completed === true)));
        break;       
      case 'uncompleted':
        setFilteredTodos((todos.filter((todo) => todo.completed === false)));
        break;
      default:
        setFilteredTodos(todos);
        break;

    }

  }

  const saveLocalTodos = () => {
    let data = localStorage.getItem("todos");
    if (data === null) {
      console.log('saving');
      localStorage.setItem("todos", JSON.stringify([]));
    }
    else {
      console.log('todo', todos);
     localStorage.setItem("todos",JSON.stringify(todos));
    }
  };

  const getLocalTodos = () => {
    if (localStorage.getItem("todos") === null) {
      let localTodo = [];
      setTodos(localTodo);
    }
    else {
      let localTodo = JSON.parse(localStorage.getItem("todos"));
      console.log('getting data',localTodo);
      setTodos(localTodo);
    }
  };

 
  useEffect(() => {
    getLocalTodos();
  }, []);


  useEffect(() => {
    filterHandler();
    saveLocalTodos();
  }, [todos, status]
  );

  return (
    <div className="App">
      <header><h1>Todo List</h1></header>
      <Form todos={todos} setTodos={setTodos} setInputText={setInputText} inputText={inputText} setStatus={setStatus} />
      <TodoList todos={todos} setTodos={setTodos} filteredTodos={filteredTodos}/>
    </div>
  );
}

export default App;
