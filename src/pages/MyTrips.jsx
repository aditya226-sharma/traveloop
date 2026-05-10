import React from 'react';
import { Link } from 'react-router-dom';

export default function MyTrips() {
  return (
    <div className="page-transition">
      <div className="flex-between" style={{ marginBottom: '2rem' }}>
        <h1>My Trips</h1>
        <Link to="/create-trip" className="btn-primary">New Trip</Link>
      </div>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))', gap: '1.5rem' }}>
        <div className="glass-panel" style={{ padding: '1.5rem' }}>
          <h3 style={{ marginBottom: '0.5rem' }}>Summer in Europe</h3>
          <p style={{ color: 'var(--color-text-secondary)', marginBottom: '1rem' }}>Jun 10 - Jun 25, 2026 • 4 Destinations</p>
          <div className="flex-between">
            <Link to="/itinerary-builder" className="btn-outline">Edit Itinerary</Link>
            <Link to="/itinerary-view" className="btn-primary">View</Link>
          </div>
        </div>
      </div>
    </div>
  );
}
