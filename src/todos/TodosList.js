import React from "react";
import NewTodoForm from "./NewTodoForm";
import TodoListItem from "./TodoListItem";
import "./TodoList.css";

const TodosList = ({ todos = [{ text: "hello" }] }) => {
  return (
    <div className="list-wrapper">
      <NewTodoForm />
      {todos.map((todo) => (
        <TodoListItem todo={todo} />
      ))}
    </div>
  );
};

export default TodosList;
