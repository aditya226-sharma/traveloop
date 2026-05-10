import React from 'react';
import { Link } from 'react-router-dom';

export default function Home() {
  return (
    <div className="page-transition">
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '2rem' }}>
        <h1>Welcome Back!</h1>
        <Link to="/create-trip" className="btn-primary">Plan New Trip</Link>
      </div>
      <div className="glass-panel" style={{ padding: '2rem', marginBottom: '2rem' }}>
        <h2>Upcoming Trips</h2>
        <p style={{ color: 'var(--color-text-secondary)', marginTop: '1rem' }}>You have no upcoming trips. Start planning one today!</p>
      </div>
      <div className="glass-panel" style={{ padding: '2rem' }}>
        <h2>Recommended Destinations</h2>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '1rem', marginTop: '1rem' }}>
          <div className="glass-panel" style={{ padding: '1rem', textAlign: 'center' }}>Paris, France</div>
          <div className="glass-panel" style={{ padding: '1rem', textAlign: 'center' }}>Tokyo, Japan</div>
          <div className="glass-panel" style={{ padding: '1rem', textAlign: 'center' }}>New York, USA</div>
        </div>
      </div>
    </div>
  );
}
