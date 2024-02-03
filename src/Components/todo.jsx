import { FaTrash, FaPen } from "react-icons/fa";
import { useState } from "react";


const Todo = ({ todoVar, removeTodo,UpdateTodo }) => {

    const [editTodo, seteditTodo] = useState(false);
    const [todo, settodo] = useState("");


    const onKeyDown = (e) => {
        if (e.key === 'Enter') {
            e.preventDefault();
            seteditTodo(false);
            UpdateTodo(todoVar.id, todo);
        }
      }

  return (
    <div className="SingleTodo">
        { editTodo ? (
            <form className="edit-Todo-form">
            <input
              className="edit-Todo-textbox"
              type="text"
              placeholder="Add something to do..."
              value={todo}
              onChange={(e) => settodo(e.target.value)}
              onBlur={() => {
                seteditTodo(false);
                UpdateTodo(todoVar.id, todo);
              }}
              onKeyDown={onKeyDown}
            />
          </form> ) : (
        <li className="Todo" key={todoVar.id}>
            {todoVar.todo}
        </li> ) }
        
      <div className="Todo-icons">
        <button className="Todo-update" type="submit" onClick={() => seteditTodo(true)}>
          <FaPen />
        </button>
        <button
          className="Todo-delete"
          type="submit"
          onClick={() => removeTodo(todoVar.id)}
        >
          <FaTrash />
        </button>
      </div>
    </div>
  );
};

export default Todo;
