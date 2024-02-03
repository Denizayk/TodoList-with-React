import React, { useEffect, useState } from "react";
import NewTodo from "./AddNewTodo";
import TodoList from "./todos";
import HeaderTodo from "./todoHeader";

const TodoApp = () => {
  const [Todos, setTodos] = useState([]);

  useEffect(() => {
    const data = JSON.parse(localStorage.getItem("Todos"));
    if (data) {
      setTodos(data);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("Todos", JSON.stringify(Todos));
  });

  const addTodo = (todo) => {
    setTodos([...Todos, { id: Todos.length + 1, todo: todo }]);
  };

  const removeTodo = (id) => {
    setTodos(Todos.filter((todoVar) => todoVar.id !== id));
  };

  const removeAllTodo = (todos) => {
    setTodos(Todos.splice(0, todos.length));
  };
  const UpdateTodo = (id, todo) => {
    const updatedList = Todos.map((e) => {
      if (e.id === id && todo !== "") {
        e.todo = todo;
      }
      return e;
    });
    setTodos(updatedList);
  };
  

  return (
    <div className="Todo-app">
      <div className="Todo-container">
        <div className="Todos">
          <HeaderTodo />
          <TodoList Todos={Todos} removeTodo={removeTodo} UpdateTodo={UpdateTodo} />
        </div>
        <NewTodo addTodo={addTodo} removeAllTodo={removeAllTodo} />
      </div>
    </div>
  );
};

export default TodoApp;
