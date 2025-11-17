export default function TodoCard({ todo, onDelete, onToggle }) {
  return (
    <div className="p-3 rounded-xl bg-[#eef6ff] flex items-start justify-between">
      <div className="flex items-start gap-3">
        <input type="checkbox" checked={!!todo.completed} onChange={() => onToggle(todo._id, todo.completed)} className="mt-1" />
        <div>
          <div className={`text-sm ${todo.completed ? "line-through text-gray-400" : "text-gray-800"}`}>{todo.text}</div>
          {todo.category && <div className="text-xs text-gray-400 mt-1">{todo.category}</div>}
        </div>
      </div>
      <button onClick={() => onDelete(todo._id)} className="text-red-500">✖</button>
    </div>
  );
}
