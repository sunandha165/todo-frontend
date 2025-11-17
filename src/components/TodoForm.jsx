import React, { useState } from 'react';

export default function TodoForm({ onAdd }) {
  const [text, setText] = useState('');
  return (
    <div>
      <div className="add-row">
        <input className="input" placeholder="Create a task..." value={text} onChange={e=>setText(e.target.value)} />
        <button className="btn btn-primary" onClick={() => { if (!text) return; onAdd({ title:text }); setText(''); }}>Add</button>
      </div>
    </div>
  );
}
