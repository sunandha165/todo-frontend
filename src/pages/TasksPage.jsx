import React, { useEffect, useState } from "react";
import axios from "axios";
import MiniCalendar from "../components/MiniCalendar";
import TodoForm from "../components/TodoForm";
import { getTasks, createTask, updateTask, deleteTask } from "../services/api";
import { useNavigate } from "react-router-dom";

export default function TasksPage() {
  const [tasks, setTasks] = useState([]);
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [userName, setUserName] = useState("");
  const nav = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem("token");
    const name = localStorage.getItem("userName");

    if (!token) {
      nav("/login");
      return;
    }

    setUserName(name);
    load();
  }, []);

  const load = async () => {
    try {
      // ⭐ Wake up backend
      await axios.get("https://todo-backend-drqv.onrender.com");

      // ⭐ Now get tasks
      const data = await getTasks();
      setTasks(data);
    } catch (err) {
      console.error("TASK ERROR", err);
    }
  };

  const onAdd = async (task) => {
    await createTask({ ...task, date: selectedDate.toISOString() });
    load();
  };

  const onDelete = async (id) => {
    await deleteTask(id);
    load();
  };

  const onToggle = async (t) => {
    await updateTask(t._id, { completed: !t.completed });
    load();
  };

  return (
    <div style={{ padding: 20 }}>
      <h2>Your Tasks</h2>
      <p>User: {userName}</p>

      <MiniCalendar value={selectedDate} onChange={setSelectedDate} />
      <TodoForm onAdd={onAdd} />

      {tasks.map((t) => (
        <div key={t._id}>
          <input
            type="checkbox"
            checked={t.completed}
            onChange={() => onToggle(t)}
          />
          {t.title}
          <button onClick={() => onDelete(t._id)}>Delete</button>
        </div>
      ))}
    </div>
  );
}
