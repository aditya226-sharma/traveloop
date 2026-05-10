import React from 'react';

export default function Budget() {
  return (
    <div className="page-transition">
      <h1 style={{ marginBottom: '2rem' }}>Trip Budget Breakdown</h1>
      <div className="glass-panel" style={{ padding: '2rem', marginBottom: '2rem' }}>
        <h2>Total Estimated Cost: <span style={{ color: 'var(--color-success)' }}>$0.00</span></h2>
      </div>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '1.5rem' }}>
        <div className="glass-panel" style={{ padding: '1.5rem' }}>
          <h3>Transport</h3>
          <p style={{ fontSize: '1.5rem', fontWeight: 'bold' }}>$0</p>
        </div>
        <div className="glass-panel" style={{ padding: '1.5rem' }}>
          <h3>Stay</h3>
          <p style={{ fontSize: '1.5rem', fontWeight: 'bold' }}>$0</p>
        </div>
        <div className="glass-panel" style={{ padding: '1.5rem' }}>
          <h3>Activities</h3>
          <p style={{ fontSize: '1.5rem', fontWeight: 'bold' }}>$0</p>
        </div>
        <div className="glass-panel" style={{ padding: '1.5rem' }}>
          <h3>Meals</h3>
          <p style={{ fontSize: '1.5rem', fontWeight: 'bold' }}>$0</p>
        </div>
      </div>
    </div>
  );
}
