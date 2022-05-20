import React from 'react';

const Todo = ({ todo,todos,setTodos}) => {

  //Events
  const completionHandler = () => { 
    setTodos(todos.map((item) => {
      if (item.id === todo.id) {
        console.log(item.text, !item.completed);
        return { ...item, completed: !item.completed };
      }
      return item;
    
})
    )
  };

  const deleteHandler = () => {
    setTodos(todos.filter((el) => el.id !== todo.id));
  };
    return(
      <div className='todo'>
        <li className={`todo-item ${todo.completed ? "completed" : ""}`}>{todo.text}</li>
        <button className='complete-btn' onClick={completionHandler}><i className='fa fa-check'></i></button>
        <button  className='trash-btn' onClick={deleteHandler}><i className='fa fa-trash'></i></button>
    </div>
    );
 }
export default Todo;