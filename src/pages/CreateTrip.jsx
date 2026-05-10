import React from 'react';
import { Link } from 'react-router-dom';

export default function CreateTrip() {
  return (
    <div className="page-transition glass-panel" style={{ padding: '2rem', maxWidth: '600px', margin: '0 auto' }}>
      <h1 style={{ marginBottom: '1.5rem' }}>Create New Trip</h1>
      <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
        <input className="input-field" type="text" placeholder="Trip Name (e.g. Summer in Europe)" />
        <div style={{ display: 'flex', gap: '1rem' }}>
          <input className="input-field" type="date" />
          <input className="input-field" type="date" />
        </div>
        <textarea className="input-field" placeholder="Trip Description" rows="4"></textarea>
        <Link to="/my-trips" className="btn-primary" style={{ textAlign: 'center', marginTop: '1rem' }}>Save Trip</Link>
      </div>
    </div>
  );
}
