import React from "react";

export default function TodoItem({ todo, onToggle, onDelete }) {
  return (
    <div
      className={`todo-item ${todo.completed ? "completed" : ""}`}
    >
      <div>
        <strong>{todo.text}</strong>
        <p className="category">{todo.category}</p>
      </div>
      <div className="actions">
        <input
          type="checkbox"
          checked={todo.completed}
          onChange={() => onToggle(todo.id)}
        />
        <button onClick={() => onDelete(todo.id)}>🗑</button>
      </div>
    </div>
  );
}
