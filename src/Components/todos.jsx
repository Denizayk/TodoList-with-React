import React from "react";
import Todo from "./todo";


const TodoList = ( {Todos,removeTodo,UpdateTodo}) => {


return (
    <div className="TodoList">
        <ul className="todos">
            {Todos.map(todoVar => {
              return (
                <>
                    <Todo todoVar={todoVar} key={todoVar.id} removeTodo={removeTodo} UpdateTodo={UpdateTodo} />
                </>
              );
            })}
        </ul>
    </div>
          );
        }

export default TodoList;