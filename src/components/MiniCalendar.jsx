import React from 'react';

export default function MiniCalendar({ value, onChange }) {
  const val = value ? (new Date(value)).toISOString().split('T')[0] : '';
  return (
    <div>
      <label style={{display:'block', color:'#6b7280', marginBottom:6}}>Select date</label>
      <input type="date" value={val} onChange={e => onChange(new Date(e.target.value))} />
    </div>
  );
}
