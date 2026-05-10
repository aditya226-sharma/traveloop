import React from 'react';
import { Link } from 'react-router-dom';

export default function Login() {
  return (
    <div className="flex-center" style={{ minHeight: '100vh', background: 'var(--color-bg-primary)' }}>
      <div className="glass-panel" style={{ padding: '2rem', width: '100%', maxWidth: '400px' }}>
        <h1 style={{ marginBottom: '1.5rem', textAlign: 'center' }}>Welcome to Traveloop</h1>
        <p style={{ marginBottom: '2rem', textAlign: 'center', color: 'var(--color-text-secondary)' }}>Login to start planning</p>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
          <input className="input-field" type="email" placeholder="Email" />
          <input className="input-field" type="password" placeholder="Password" />
          <Link to="/" className="btn-primary" style={{ textAlign: 'center' }}>Login</Link>
        </div>
      </div>
    </div>
  );
}
