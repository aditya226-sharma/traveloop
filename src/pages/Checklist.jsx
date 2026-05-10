import React from 'react';

export default function Checklist() {
  return (
    <div className="page-transition">
      <h1 style={{ marginBottom: '2rem' }}>Packing Checklist</h1>
      <div className="glass-panel" style={{ padding: '2rem', maxWidth: '600px' }}>
        <div style={{ display: 'flex', gap: '1rem', marginBottom: '1.5rem' }}>
          <input className="input-field" type="text" placeholder="Add new item..." />
          <button className="btn-primary">Add</button>
        </div>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
          <label style={{ display: 'flex', alignItems: 'center', gap: '1rem', cursor: 'pointer' }}>
            <input type="checkbox" style={{ width: '20px', height: '20px' }} />
            <span style={{ fontSize: '1.1rem' }}>Passport</span>
          </label>
          <label style={{ display: 'flex', alignItems: 'center', gap: '1rem', cursor: 'pointer' }}>
            <input type="checkbox" style={{ width: '20px', height: '20px' }} />
            <span style={{ fontSize: '1.1rem' }}>Phone Charger</span>
          </label>
        </div>
      </div>
    </div>
  );
}
