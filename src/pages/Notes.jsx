import React from 'react';

export default function Notes() {
  return (
    <div className="page-transition">
      <h1 style={{ marginBottom: '2rem' }}>Trip Notes</h1>
      <div className="glass-panel" style={{ padding: '2rem', maxWidth: '800px' }}>
        <textarea className="input-field" placeholder="Jot down hotel check-in info, contacts, or reminders..." rows="6" style={{ marginBottom: '1rem' }}></textarea>
        <button className="btn-primary">Save Note</button>
        <div style={{ marginTop: '2rem', borderTop: '1px solid var(--color-border)', paddingTop: '1.5rem' }}>
          <div className="glass-panel" style={{ padding: '1.5rem', marginBottom: '1rem' }}>
            <p style={{ fontSize: '0.875rem', color: 'var(--color-text-secondary)', marginBottom: '0.5rem' }}>Oct 12, 2026 - 10:30 AM</p>
            <p>Hotel check-in is at 3 PM. Remember to bring the printed confirmation.</p>
          </div>
        </div>
      </div>
    </div>
  );
}
