import React from 'react';

export default function Profile() {
  return (
    <div className="page-transition">
      <h1 style={{ marginBottom: '2rem' }}>User Profile</h1>
      <div className="glass-panel" style={{ padding: '2rem', maxWidth: '600px' }}>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
          <div>
            <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: '500' }}>Full Name</label>
            <input className="input-field" type="text" defaultValue="John Doe" />
          </div>
          <div>
            <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: '500' }}>Email</label>
            <input className="input-field" type="email" defaultValue="john@example.com" />
          </div>
          <div>
            <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: '500' }}>Language Preference</label>
            <select className="input-field">
              <option>English</option>
              <option>Spanish</option>
              <option>French</option>
            </select>
          </div>
          <button className="btn-primary" style={{ marginTop: '1rem' }}>Save Changes</button>
        </div>
      </div>
    </div>
  );
}
