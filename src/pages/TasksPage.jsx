import React, { useEffect, useState } from 'react';
import MiniCalendar from '../components/MiniCalendar';
import TodoForm from '../components/TodoForm';
import { getTasks, createTask, updateTask, deleteTask } from '../service/api';
import { useNavigate } from 'react-router-dom';

export default function TasksPage(){
  const [userName, setUserName] = useState('');
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [tasks, setTasks] = useState([]);
  const nav = useNavigate();

  useEffect(()=> {
    const u = JSON.parse(localStorage.getItem('user') || 'null');
    if (!u) {
      nav('/login');
      return;
    }
    setUserName(u.name);
    load();
  }, []);

  const load = async () => {
    try {
      const data = await getTasks();
      setTasks(data);
    } catch (err) {
      console.error(err);
    }
  };

  const onAdd = async (task) => {
    try {
      await createTask({ ...task, date: selectedDate.toISOString() });
      load();
    } catch (err) { console.error(err); }
  };

  const onDelete = async (id) => { await deleteTask(id); load(); };
  const onToggle = async (t) => { await updateTask(t._id, { completed: !t.completed }); load(); };

  return (
    <div className="tasks-wrap">
      <div className="sidebar">
        <div className="card">
          <div style={{display:'flex', alignItems:'center', gap:12}}>
            <div style={{width:44, height:44, borderRadius:22, background:'#e6e9ef'}}></div>
            <div>{userName}</div>
          </div>

          <div style={{marginTop:18}}>
            <MiniCalendar value={selectedDate} onChange={setSelectedDate} />
          </div>
        </div>
      </div>

      <div className="content">
        <div className="card">
          <h3>Your tasks</h3>
          <TodoForm onAdd={onAdd} />
          <div style={{marginTop:10}}>
            {tasks.length === 0 ? <p>No tasks yet</p> : tasks.map(t => (
              <div className="task-item" key={t._id}>
                <div>
                  <input type="checkbox" checked={t.completed} onChange={()=>onToggle(t)} />
                  <span style={{marginLeft:12, textDecoration: t.completed ? 'line-through':'none'}}>{t.title}</span>
                  <div style={{fontSize:12, color:'#6b7280'}}>{new Date(t.createdAt).toLocaleString()}</div>
                </div>
                <button onClick={()=>onDelete(t._id)} style={{background:'#fff', border:'1px solid #ef4444', color:'#ef4444', padding:'8px 10px', borderRadius:8}}>Delete</button>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
