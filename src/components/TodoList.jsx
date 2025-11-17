import React from "react";
import TodoCard from "./TodoCard";

export default function TodoList({ todos, onDelete, onToggle }) {
  return (
    <div className="space-y-3">
      {todos.map(todo => (
        <TodoCard key={todo._id} todo={todo} onDelete={onDelete} onToggle={onToggle} />
      ))}
    </div>
  );
}
