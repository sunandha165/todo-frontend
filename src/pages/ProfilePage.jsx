import React, { useEffect, useState } from 'react';
import { getTasks } from '../services/api';

import { Chart, Line, Pie } from 'react-chartjs-2';
import { Chart as ChartJS, ArcElement, CategoryScale, LinearScale, PointElement, LineElement } from 'chart.js';
ChartJS.register(ArcElement, CategoryScale, LinearScale, PointElement, LineElement);

export default function ProfilePage(){
  const [user, setUser] = useState(null);
  const [tasks, setTasks] = useState([]);

  useEffect(()=> {
    const u = JSON.parse(localStorage.getItem('user') || 'null');
    if (u) setUser(u);
    load();
  }, []);

  const load = async ()=> {
    try {
      const t = await getTasks();
      setTasks(t);
    } catch (err) { console.error(err); }
  };

  const completed = tasks.filter(t => t.completed).length;
  const pending = tasks.length - completed;

  const pieData = {
    labels: ['Completed','Pending'],
    datasets: [{ data:[completed||1, pending||0], backgroundColor:['#10b981','#f59e0b'] }]
  };

  const lineData = {
    labels: tasks.map(t => new Date(t.createdAt).toLocaleDateString()),
    datasets: [
      { label:'Total', data: tasks.map((_,i)=> tasks.length - i), borderColor:'#3b82f6', tension:0.2 },
      { label:'Completed', data: tasks.map(() => completed ? 1 : 0), borderColor:'#10b981', tension:0.2 }
    ]
  };

  return (
    <div>
      <h1>Profile — {user?.name}</h1>
      <div className="profile-grid">
        <div className="chart-box">
          <h3 style={{textAlign:'center'}}>Tasks performance</h3>
          <div style={{width:220, margin:'0 auto'}}><Pie data={pieData} /></div>
        </div>
        <div className="chart-box">
          <h3>Daily Task Completion</h3>
          <div><Line data={lineData} /></div>
        </div>
      </div>
    </div>
  );
}
