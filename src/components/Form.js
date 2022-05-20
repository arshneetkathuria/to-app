import React from 'react';


const Form = ({todos,setTodos,setInputText,inputText,setStatus}) => {
    const inputTextHandler = (e) => {
        setInputText(e.target.value);
    }

    const submitTodoHandler = (e)=>
    {
        e.preventDefault();
            setTodos([
                ...todos, { text: inputText.trim(), completed: false, id: Math.random() * 10000 }
            ]);
        setInputText(" ");
    }
    
    const statusHandler = (e) => {
        setStatus(e.target.value);
    }
    return (
        <form>
            <input onChange={inputTextHandler} type="text" className="todo-input" value={inputText}></input>
            <button onClick={submitTodoHandler} className='todo-button' type='submit' >
                <i className='fa fa-plus-square'></i>
            </button>
            <div className='select'>
                <select name='todos' className='filter-todo' onClick={statusHandler}>
                    <option value="all">All</option>
                    <option value="completed">Completed</option>
                    <option value="uncompleted">Uncompleted</option>
                </select>
            </div>
</form>
    );
}

export default Form;