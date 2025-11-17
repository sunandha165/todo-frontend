import React from 'react';
import { Link } from 'react-router-dom';

export default function HomePage(){
  return (
    <div>
      <div className="hero card">
        <div className="left">
          <h1>Organize your day with clarity</h1>
          <p>A clean task manager — create tasks, track progress, and stay focused.</p>
          <div className="cta">
            <Link to="/tasks" className="btn btn-primary">Go to Tasks</Link>
            <Link to="/register" className="btn btn-ghost">Register</Link>
                        <Link to="/Login" className="btn btn-ghost">Login</Link>

          </div>
        </div>
        <div className="right">
          <img alt="illustration" src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=800&auto=format&fit=crop&ixlib=rb-4.0.3&s=example" style={{width:260, borderRadius:10}}/>
        </div>
      </div>
    </div>
  );
}
