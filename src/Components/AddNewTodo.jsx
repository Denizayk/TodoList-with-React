import React, { useState } from "react";
import { FaTrash, FaPlus } from "react-icons/fa";

const NewTodo = (props) => {
  const [todo, setTodo] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if(todo !== "" && todo !== null){
    props.addTodo(todo);
    setTodo('');}
    else{
        alert("Yeni Todo Alanı Boş Geçilemez!!");
    }
  };

  const removeAllTodos = (e) => {
    e.preventDefault();
    props.removeAllTodo(todo);
    setTodo('');
  };

  const onKeyDown = (e) => {
    if (e.key === 'Enter') {
        e.preventDefault();
        handleSubmit(e);
    }
  }
  

  return (
    <div className="Todo-add">
      <form className="Todo-form">
        <input
          className="Todo-textbox"
          type="text"
          placeholder="Add something to do..."
          value={todo}
          onChange={(e) => setTodo(e.target.value)}
          onKeyDown={onKeyDown}
        />
      </form>
      <div className="newTodo-Button">
        <button className="newTodo-Add" type="submit" value={"Add Todo"} onClick={handleSubmit}>
          <FaPlus />
          <span className="addSpan">Add To-Do</span>
        </button>
        <button className="allTodo-delete" type="Submit" onClick={removeAllTodos}>
          <FaTrash />
          <span className="addSpan">All Clear</span>
        </button>
      </div>
    </div>
  );
}

export default NewTodo;
